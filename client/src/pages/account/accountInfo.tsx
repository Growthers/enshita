import { AxiosError } from "axios";
import { FC, useState, useEffect } from "react";
import AccountInfoForm from "~/components/form/accountInfoForm";
import Layout from "~/components/layout/layout";
import styles from "~/styles/AccountInfo.module.scss";
import { client } from "~/libs/apiClient";

type TokenCheckProps = {
  token: string;
  mail: string;
  name: string;
  password: string;
};

type PageStatusProps = {
  status: "loading" | "failure" | "success";
  pageData: TokenCheckProps | AxiosError | null;
};

const AccountInfo: FC = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const [{ status, pageData }, setStatus] = useState<PageStatusProps>({
    status: "loading",
    pageData: null,
  });

  useEffect(() => {
    const check = () => {
      client
        .post<TokenCheckProps>("", {
          token,
        })
        .then(({ data }) => {
          setStatus({
            status: "success",
            pageData: data,
          });
        })
        .catch((data: AxiosError) => {
          setStatus({
            status: "failure",
            pageData: data,
          });
        });
    };

    check();
  }, [token]);

  if (status === "loading") {
    return <div>loading</div>;
  }
  if (status === "failure" || pageData === null) {
    // const data = pageData as AxiosError
    return <div>page not found</div>;
  }

  return (
    <Layout>
      <div className={styles["enshita-body"]}>
        <AccountInfoForm mail="example@example.com" userName="" />
      </div>
    </Layout>
  );
};

export { AccountInfo };
