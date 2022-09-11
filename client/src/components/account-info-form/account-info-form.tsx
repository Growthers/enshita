import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FC, useState } from "react";
import type {
  AccountInfoFormProps,
  AccountInfoFormDataProps,
} from "~/components/account-info-form/type/model";
import { client } from "~/libs/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountInfoFormSchema } from "~/components/account-info-form/type/schema";
import styles from "~/styles/components/account-info/accountinfo.module.scss";
import { TextControl } from "~/components/form-modules/info-control/text-control";
import { PasswordControl } from "~/components/form-modules/info-control/password-control";
import Button from "~/components/button/button";

const AccountInfoForm: FC<AccountInfoFormProps> = ({ mail, userName }) => {
  const method = useForm<AccountInfoFormDataProps>({
    resolver: zodResolver(accountInfoFormSchema),
    defaultValues: {
      mail,
      userName,
    },
    mode: "onBlur",
  });

  const [isNotUpDate, setNotUpdate] = useState(false);
  const [isMatch, setMatch] = useState(false);

  const onSubmit: SubmitHandler<AccountInfoFormDataProps> = data => {
    if (data.newPassword !== data.reNewPassword) {
      setMatch(true);
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

  const onChange = () => {
    setMatch(false);
    setNotUpdate(false);
  };

  return (
    <div className={styles["enshita-form-main"]}>
      <div className={styles["enshita-form-head"]}>
        <h1>Personal Info</h1>
      </div>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)} onChange={onChange}>
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
          <PasswordControl
            name="reNewPassword"
            label="New Password (Re-enter)"
          />
          <PasswordControl name="currentPassword" label="Current Password" />

          <div className={styles["enshita-form-error"]}>
            <small>
              {isMatch && Object.keys(method.formState.errors).length === 0 && (
                <p>new password is not match</p>
              )}
              {isNotUpDate &&
                Object.keys(method.formState.errors).length === 0 && (
                  <p>unable to update</p>
                )}
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
                setMatch(false);
              }}
            >
              update
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AccountInfoForm;
