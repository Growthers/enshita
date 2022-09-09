import { FC } from "react";
import AccountInfoForm from "~/components/account-info-form/account-info-form";
import Layout from "~/components/layout/layout";
import styles from "~/styles/pages/accountInfo.module.scss";

const AccountInfo: FC = () => (
  <Layout>
    <div className={styles["enshita-body"]}>
      <AccountInfoForm mail="example@example.com" userName="hoge" />
    </div>
  </Layout>
);

export { AccountInfo };
