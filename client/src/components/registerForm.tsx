import { FC, useState } from "react";
import styles from "~/styles/registerForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { TbPencilOff } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { client } from "~/libs/apiClient";

type FormDataProps = {
  email: string;
  userName: string;
  password: string;
};

type Props = {
  mail: string;
  type: "admin" | "account";
};

const schema = z.object({
  email: z.string().email(),
  userName: z.string().min(1),
  password: z.string().min(1),
});

const RegisterForm: FC<Props> = ({ mail, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: zodResolver(schema) });

  const [IsNorFound, setNotFound] = useState(false);
  const [IsShow, setShow] = useState(false);

  const onSubmit: SubmitHandler<FormDataProps> = data => {
    client
      .post("", {
        mail: data.email,
        password: data.password,
      })
      .then(() => {})
      .catch(() => {
        setNotFound(true);
      });
  };

  console.log(errors.email);

  return (
    <div className={styles["enshita-registerform-body"]}>
      <div className={styles["enshita-registerform-head"]}>
        <p className={styles["enshita-registerform-sentence"]}>
          Sign in to enshita
        </p>
      </div>
      <div className={styles["enshita-registerform-main"]}>
        <div className={styles["enshita-registerform-dis"]}>
          <p>
            <small>Let&apos;s get started with enshita!</small>
          </p>
          <p>
            <small>
              {type === "account"
                ? "Your account type is /(Admin | Moderator)/"
                : "Please create first admin user."}
            </small>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["enshita-registerform-form-body"]}>
            <label htmlFor="email/name">
              <small>Email Address</small>
              <div className={styles["enshita-registerform-textarea"]}>
                <div className={styles["enshita-registerform-icon"]}>
                  <FiMail size={15} />
                </div>
                <input
                  className={styles["enshita-registerform-input-i2"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("email", { required: true })}
                  value={mail}
                  readOnly
                />
                <div className={styles["enshita-registerform-icon"]}>
                  <TbPencilOff size={15} />
                </div>
              </div>
              <div className={styles["enshita-registerform-error"]}>
                {errors.email && <small>this field is required</small>}
              </div>
            </label>
          </div>

          <div className={styles["enshita-registerform-form-body"]}>
            <label htmlFor="email/name">
              <small>Username</small>
              <div className={styles["enshita-registerform-textarea"]}>
                <div className={styles["enshita-registerform-icon"]}>
                  <AiOutlineUser size={15} />
                </div>
                <input
                  className={styles["enshita-registerform-input-i1"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("userName", { required: true })}
                />
              </div>
              <div className={styles["enshita-registerform-error"]}>
                {errors.userName && <small>this field is required</small>}
              </div>
            </label>
          </div>

          <div className={styles["enshita-registerform-form-body"]}>
            <label htmlFor="password">
              <small>Password</small>
              <div className={styles["enshita-registerform-textarea"]}>
                <div className={styles["enshita-registerform-icon"]}>
                  <HiLockClosed size={15} />
                </div>
                <input
                  type={IsShow ? "password" : "text"}
                  className={styles["enshita-registerform-input-i2"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className={styles["enshita-registerform-icon"]}
                  onClick={() => {
                    setShow(!IsShow);
                  }}
                >
                  {IsShow && <AiFillEye size={15} />}
                  {!IsShow && <AiFillEyeInvisible size={15} />}
                </button>
              </div>
              <div className={styles["enshita-registerform-error"]}>
                {errors.password && (
                  <p>
                    <small>this field is required</small>
                  </p>
                )}
                {IsNorFound &&
                  !errors.password &&
                  !errors.email &&
                  !errors.userName && (
                    <p>
                      <small>not found account</small>
                    </p>
                  )}
              </div>
            </label>
          </div>
          <div className={styles["enshita-registerform-button"]}>
            <button type="submit" onClick={() => setNotFound(false)}>
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
