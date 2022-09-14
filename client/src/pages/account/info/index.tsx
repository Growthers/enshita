import { useEffect, useState } from "react";
import type { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import styles from "~/styles/pages/accountInfo.module.scss";
import { client } from "~/libs/axios";
import { Wrapper } from "~/components/form-element/wrapper";
import { TextControl } from "~/components/account-info-form/icon-text-control";
import { PasswordControl } from "~/components/account-info-form/password-control";
import Button from "~/components/button/button";
import { AccountInfoFormFieldValues, PageStatusProps } from "./type/model";
import { accountInfoFormSchema } from "./type/schema";

const AccountInfo: FC = () => {
  const [isNotUpDate, setNotUpdate] = useState(false);
  const [isNotMatch, setNotMatch] = useState(false);
  const [{ status, pageData }, setStatus] = useState<PageStatusProps>({
    status: "loading",
    pageData: {
      mail: "hoge@hoge.com",
      name: "hoge",
    },
  });

  const check = () => {
    client.post("").then(({ data }) => {
      setStatus({
        status: "success",
        pageData: data,
      });
    });
  };

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

  useEffect(() => {
    // token and session check space
    check();
  }, []);

  if (status === "loading") {
    return <div className={styles["enshita-form-loading"]}>loading...</div>;
  }

  return (
    <section className={styles["enshita-form-main"]}>
      <div className={styles["enshita-form-head"]}>
        <h1>Personal Info</h1>
      </div>
      <Wrapper<AccountInfoFormFieldValues>
        defaultValues={{
          mail: pageData.mail,
          userName: pageData.name,
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

export { AccountInfo };
