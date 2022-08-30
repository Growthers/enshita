import { FC, useState } from "react";
import styles from "~/styles/components/form/accountInfoForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { client } from "~/libs/apiClient";
import Normal from "~/components/form/input/textArea";
import {mailModel, passwordModel, userNameModel} from "~/components/form/zodSchema/model"
import Password from "~/components/form/input/passwordArea";
import { Button } from "../button/button";

type FormDataProps = {
  mail: string;
  userName: string;
  newPassword: string;
  reNewPassword: string;
  currentPassword: string;
};

type Props = {
  mail: string;
  userName: string;
};

const schema = z.object({
  mail: mailModel,
  userName: userNameModel,
  newPassword: passwordModel,
  reNewPassword: passwordModel,
  currentPassword: passwordModel,
});

const AccountInfoForm: FC<Props> = ({ mail, userName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      mail,
      userName,
    },
  });

  const [isNotUpDate, setNotUpdate] = useState(false);
  const [isMatch, setMatch] = useState(false);

  const onSubmit: SubmitHandler<FormDataProps> = data => {
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

  return (
    <div className={styles["enshita-accountinfoform-main"]}>
      <div className={styles["enshita-accountinfoform-head"]}>
        <h1>Personal Info</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Normal<"mail">
          label="mail"
          discription="mail Address"
          icon="ci:mail"
          register={register("mail", { required: true })}
          itsError={errors.mail}
        />

        <Normal<"userName">
          label="name"
          discription="User name"
          icon="ant-design:user-outlined"
          register={register("userName", { required: true })}
          itsError={errors.userName}
        />

        <div className={styles["enshita-accountinfoform-dis"]}>
          <small>
            if you update your password, you must enter your current password.
          </small>
        </div>

        <Password<"newPassword">
          label="newPassword"
          discription="New Password"
          register={register("newPassword", { required: true })}
          itsError={errors.newPassword}
        />

        <Password<"reNewPassword">
          label="NewPasswordReRe-enter"
          discription="New Password (Re-enter)"
          register={register("reNewPassword", { required: true })}
          itsError={errors.reNewPassword}
        />

        <Password<"currentPassword">
          label="currentPassword"
          discription="current Password"
          register={register("currentPassword", { required: true })}
          itsError={errors.currentPassword}
        />

        <div className={styles["enshita-accountinfoform-error"]}>
          <small>
            {isMatch && Object.keys(errors).length === 0 && (
              <p>new password is not match</p>
            )}
            {isNotUpDate && Object.keys(errors).length === 0 && (
              <p>unable to update</p>
            )}
          </small>
        </div>

        <div className={styles["enshita-accountinfoform-button"]}>
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
    </div>
  );
};

export default AccountInfoForm;
