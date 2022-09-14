import { FC } from "react";
import AccountInfoForm from "~/components/account-info-form";
import styles from "~/styles/pages/accountInfo.module.scss";

const AccountInfo: FC = () => (
  <div className={styles["enshita-body"]}>
    <AccountInfoForm mail="example@example.com" userName="hoge" />
  </div>
);

export { AccountInfo };
