package migrations

import (
	"database/sql"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	dt "github.com/golang-migrate/migrate/v4/database/testing"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/ory/dockertest/v3"
	"github.com/ory/dockertest/v3/docker"
	"log"
	"os"
	"testing"
)

var (
	postgresImageName = "postgres"
	postgresImageTag  = "14"
	postgresUsername  = "postgres"
	postgresPassword  = "password"
	postgresDbName    = "testDb"
)

var db *sql.DB

func TestMain(t *testing.M) {
	pool, err := dockertest.NewPool("")
	if err != nil {
		log.Fatal("Could not connect to docker daemon")
	}

	resource, err := pool.RunWithOptions(&dockertest.RunOptions{
		Repository: postgresImageName,
		Tag:        postgresImageTag,
		Env: []string{
			fmt.Sprintf("POSTGRES_USER=%s", postgresUsername),
			fmt.Sprintf("POSTGRES_PASSWORD=%s", postgresPassword),
			fmt.Sprintf("POSTGRES_DB=%s", postgresDbName),
			"listen_addresses = *",
		},
	}, func(config *docker.HostConfig) {
		config.AutoRemove = true
	})
	if err != nil {
		log.Fatalf("Could not start postgres server: %s", err)
	}

	if err := pool.Retry(func() error {
		var err error
		db, err = sql.Open("postgres",
			fmt.Sprintf(
				"host=127.0.0.1 user=%s password=%s dbname=%s sslmode=disable port=%s",
				postgresUsername,
				postgresPassword,
				postgresDbName,
				resource.GetPort("5432/tcp")))
		if err != nil {
			return err
		}
		return db.Ping()
	}); err != nil {
		log.Fatalf("Could not connect to database: %s", err)
	}

	code := t.Run()

	if err := pool.Purge(resource); err != nil {
		log.Fatalf("Could not purge resource: %s", err)
	}

	os.Exit(code)
}

func TestMigration(t *testing.T) {
	driver, err := postgres.WithInstance(db, &postgres.Config{
		DatabaseName: postgresDbName,
	})
	if err != nil {
		log.Fatalf("Could not get driver of postgres: %s", err)
	}
	m, err := migrate.NewWithDatabaseInstance(
		"file://.",
		postgresDbName,
		driver)
	if err != nil {
		log.Fatalf("Could not open migration files: %s", err)
	}

	dt.TestMigrate(t, m)
}
