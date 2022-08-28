import { FC, useState } from "react";
import styles from "~/styles/components/form/accountInfoForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { client } from "~/libs/apiClient";

type FormDataProps = {
  mail: string;
  userName: string;
  newPassword: string;
  currentPassword: string;
};

type Props = {
  mail: string;
  userName: string;
};

const schema = z.object({
  email: z.string().email(),
  userName: z
    .string()
    .min(3)
    .max(128)
    .regex(/^[\w_]+?$/, {
      message: "Contains invalid characters(able to use [a-z],[A-Z],[0-9],[_])",
    }),
  newPassword: z
    .string()
    .min(3)
    .max(128)
    .regex(/^[\w_-]+?$/, {
      message: "Contains invalid characters(able to use [a-z],[A-Z],[0-9])",
    }),
  currentPassword: z
    .string()
    .min(3)
    .max(128)
    .regex(/^[\w_-]+?$/, {
      message: "Contains invalid characters(able to use [a-z],[A-Z],[0-9])",
    }),
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

  const [IsNotUpDate, setNotUpdate] = useState(false);
  const [IsShow, setShow] = useState(true);

  const onSubmit: SubmitHandler<FormDataProps> = data => {
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
        <div className={styles["enshita-accountinfoform-form-body"]}>
          <label htmlFor="mail/name">
            <small>mail Address</small>
            <div className={styles["enshita-accountinfoform-textarea"]}>
              <div className={styles["enshita-accountinfoform-icon"]}>
                <Icon icon="ci:mail" width="15" height="15"/>
              </div>
              <input
                className={styles["enshita-accountinfoform-input-i1"]}
                {...register("mail", { required: true })}
              />
            </div>
            <div className={styles["enshita-accountinfoform-error"]}>
              {errors.mail && <small>this field is required</small>}
            </div>
          </label>
        </div>

        <div className={styles["enshita-accountinfoform-form-body"]}>
          <label htmlFor="mail/name">
            <small>Username</small>
            <div className={styles["enshita-accountinfoform-textarea"]}>
              <div className={styles["enshita-accountinfoform-icon"]}>
              <Icon icon="ant-design:user-outlined" width="15" height="15"/>
              </div>
              <input
                className={styles["enshita-accountinfoform-input-i1"]}
                {...register("userName", { required: true })}
              />
            </div>
            <div className={styles["enshita-accountinfoform-error"]}>
              {errors.userName && (
                <p>
                  <small>{`${
                    errors.userName?.ref?.value === ""
                      ? "this field is required"
                      : errors.userName?.message
                  }`}</small>
                </p>
              )}
            </div>
          </label>
        </div>

        <div className={styles["enshita-accountinfoform-dis"]}>
          <small>
            if you update your password, you must enter your current password.
          </small>
        </div>

        <div className={styles["enshita-accountinfoform-form-body"]}>
          <label htmlFor="password">
            <small>New Password</small>
            <div className={styles["enshita-accountinfoform-textarea"]}>
              <div className={styles["enshita-accountinfoform-icon"]}>
                <Icon icon="bxs:lock-alt" width="15" height="15"/>
              </div>
              <input
                type={IsShow ? "password" : "text"}
                className={styles["enshita-accountinfoform-input-i2"]}
                {...register("newPassword", { required: true })}
              />
              <button
                type="button"
                className={styles["enshita-accountinfoform-icon"]}
                onClick={() => {
                  setShow(!IsShow);
                }}
              >
                {IsShow && <Icon icon="ant-design:eye-filled" width="15" height="15"/>}
                {!IsShow && <Icon icon="ant-design:eye-invisible-filled" width="15" height="15"/>}
              </button>
            </div>
            <div className={styles["enshita-accountinfoform-error"]}>
              {errors.newPassword && (
                <p>
                  <small>{`${
                    errors.newPassword.ref?.value === ""
                      ? "this field is required"
                      : errors.newPassword.message
                  }`}</small>
                </p>
              )}
            </div>
          </label>
        </div>

        <div className={styles["enshita-accountinfoform-form-body"]}>
          <label htmlFor="password">
            <small>Current Password</small>
            <div className={styles["enshita-accountinfoform-textarea"]}>
              <div className={styles["enshita-accountinfoform-icon"]}>
                <Icon icon="bxs:lock-alt" width="15" height="15"/>
              </div>
              <input
                type={IsShow ? "password" : "text"}
                className={styles["enshita-accountinfoform-input-i2"]}
                {...register("currentPassword", { required: true })}
              />
              <button
                type="button"
                className={styles["enshita-accountinfoform-icon"]}
                onClick={() => {
                  setShow(!IsShow);
                }}
              >
                {IsShow && <Icon icon="ant-design:eye-filled" width="15" height="15"/>}
                {!IsShow && <Icon icon="ant-design:eye-invisible-filled" width="15" height="15"/>}
              </button>
            </div>
            <div className={styles["enshita-accountinfoform-error"]}>
              {errors.currentPassword && (
                <p>
                  <small>{`${
                    errors.currentPassword.ref?.value === ""
                      ? "this field is required"
                      : errors.currentPassword.message
                  }`}</small>
                </p>
              )}
              {IsNotUpDate &&
                !errors.currentPassword &&
                !errors.mail &&
                !errors.userName && (
                  <p>
                    <small>failed update</small>
                  </p>
                )}
            </div>
          </label>
        </div>
        <div className={styles["enshita-accountinfoform-button"]}>
          <button type="submit" onClick={() => setNotUpdate(false)}>
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfoForm;
