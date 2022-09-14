import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { FC } from "react";
import { client } from "~/libs/axios";
import { accountInfoFormSchema } from "~/components/account-info-form/type/schema";
import styles from "~/styles/components/account-info/accountinfo.module.scss";
import { TextControl } from "~/components/account-info-form/icon-text-control";
import { PasswordControl } from "~/components/account-info-form/password-control";
import Button from "~/components/button/button";
import type {
  AccountInfoFormProps,
  AccountInfoFormFieldValues,
} from "./type/model";
import { Wrapper } from "../form-element/wrapper";

const AccountInfoForm: FC<AccountInfoFormProps> = ({ mail, userName }) => {
  const [isNotUpDate, setNotUpdate] = useState(false);
  const [isNotMatch, setNotMatch] = useState(false);

  const onSubmit: SubmitHandler<AccountInfoFormFieldValues> = data => {
    if (data.newPassword !== data.reNewPassword) {
      setNotMatch(true);
      return;
    }
    client
      .post("", {
        mail: data.mail,
        name: data.userName,
        newPassword: data.newPassword,
        currentPassword: data.currentPassword,
      })
      .then(() => {})
      .catch(() => {
        setNotUpdate(true);
      });
  };

  return (
    <section className={styles["enshita-form-main"]}>
      <div className={styles["enshita-form-head"]}>
        <h1>Personal Info</h1>
      </div>
      <Wrapper<AccountInfoFormFieldValues>
        defaultValues={{
          mail,
          userName,
          newPassword: "",
          reNewPassword: "",
          currentPassword: "",
        }}
        onSubmit={onSubmit}
        schema={accountInfoFormSchema}
      >
        <TextControl name="mail" icon="ci:mail" label="email Address" />
        <TextControl
          name="userName"
          icon="ant-design:user-outlined"
          label="User name"
        />
        <div className={styles["enshita-form-dis"]}>
          <small>
            if you update your password, you must enter your current password.
          </small>
        </div>

        <PasswordControl name="newPassword" label="New Password" />
        <PasswordControl name="reNewPassword" label="New Password (Re-enter)" />
        <PasswordControl name="currentPassword" label="Current Password" />

        <div className={styles["enshita-form-error"]}>
          <small>
            {isNotMatch && <p>new password is not match</p>}
            {isNotUpDate && <p>unable to update</p>}
          </small>
        </div>

        <div className={styles["enshita-form-button"]}>
          <Button
            type="submit"
            disabled={false}
            variant="normal"
            boxStyles={styles["enshita-button-update-box"]}
            textStyles={styles["enshita-button-update-text"]}
            onClick={() => {
              setNotUpdate(false);
              setNotMatch(false);
            }}
          >
            update
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default AccountInfoForm;
