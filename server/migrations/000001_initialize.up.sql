-- ユーザー(管理者/運営)
CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY NOT NULL,
    mail varchar(128) UNIQUE NOT NULL,
    name varchar(128) UNIQUE NOT NULL,
    password char(60) NOT NULL ,
    role integer NOT NULL -- 0=管理者, 1=運営
    );

-- イベント
CREATE TABLE IF NOT EXISTS events (
    id uuid PRIMARY KEY NOT NULL,
    title varchar(128) NOT NULL, -- イベントのタイトル
    date date NOT NULL , -- 開催日時
    venue varchar(256) NOT NULL , -- 開催場所
    description text NOT NULL , -- イベント詳細
    ogp varchar(256) NOT NULL ,
    status integer NOT NULL , /*
                      ステータス.
                      0=preparing
                      1=open
                      2=close
                      3=suddenOpen
                      4=suddenClose
                      5=finish
                      */
    hashTag varchar(128) NOT NULL ,
    );

-- 登壇者
CREATE TABLE IF NOT EXISTS speakers (
    id uuid PRIMARY KEY,
    title varchar(128) NOT NULL , -- 発表スライドのタイトル
    name varchar(128) NOT NULL , -- 登壇者の名前
    email varchar(128) NOT NULL ,
    duration integer NOT NULL , -- 発表時間(分)
    order integer NOT NULL, -- 発表順
    eventId uuid NOT NULL ,
    speakerQuotaTypeId uuid NOT NULL,
    FOREIGN KEY (speakerQuotaType) REFERENCES speakerQuotaTypes (id)
    FOREIGN KEY (eventId) REFERENCES events (id)
    );

-- レイアウト
CREATE TABLE IF NOT EXISTS layouts (
    id uuid PRIMARY KEY,
    imageType integer NOT NULL , /*
                        イメージのタイプ
                        0=openingImage
                        1=waitingImage
                        2=changingImage
                        3=breakingImage
                        4=endingImage
                        */
    eventId uuid NOT NULL,
    FOREIGN KEY (eventId) REFERENCES events (id)
    );

-- 登壇申込み(フォームの質問)
CREATE TABLE IF NOT EXISTS applications (
    id uuid PRIMARY KEY,
    deadLine date NOT NULL,
    status integer NOT NULL ,
    eventId uuid NOT NULL ,
    FOREIGN KEY (eventId) REFERENCES events (id)
    );

-- 登壇枠
CREATE TABLE IF NOT EXISTS speakerquotatypes (
    id uuid PRIMARY KEY,
    name varchar(128) NOT NULL ,
    speakingDuration integer NOT NULL,
    eventId uuid NOT NULL ,
    FOREIGN KEY (eventId) REFERENCES events (id)
    );
