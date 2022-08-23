import { FC, useState } from "react";
import styles from "~/styles/loginForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { client } from "~/libs/apiClient";

type FormDataProps = {
  emailOrName: string;
  password: string;
};

type ResponseProps = {
  token:string;
}

const schema = z.object({
  emailOrName: z.string().min(1),
  password: z.string().min(1),
});

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: zodResolver(schema) });

  const [IsNorFound, setNotFound] = useState(false);
  const [IsShow, setShow] = useState(false);

  const onSubmit: SubmitHandler<FormDataProps> = data => {
    client
      .post("/login", {
        mail: data.emailOrName,
        password: data.password,
      })
      .then(() => {})
      .catch(() => {
        setNotFound(true);
      });
  };

  return (
    <div className={styles["enshita-loginform-body"]}>
      <div className={styles["enshita-loginform-head"]}>
        <p className={styles["enshita-loginform-sentence"]}>
          Sign in to enshita
        </p>
      </div>
      <div className={styles["enshita-loginform-main"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["enshita-loginform-form-body"]}>
            <label htmlFor="email/name">
              <small>Email Address / Username</small>
              <div className={styles["enshita-loginform-textarea"]}>
                <div className={styles["enshita-loginform-icon"]}>
                  <AiOutlineUser size={15} />
                </div>
                <input
                  className={styles["enshita-loginform-input"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("emailOrName", { required: true })}
                />
              </div>
              <div className={styles["enshita-loginform-error"]}>
                {errors.emailOrName && <small>this field is required</small>}
              </div>
            </label>
          </div>

          <div className={styles["enshita-loginform-form-body"]}>
            <label htmlFor="password">
              <small>Password</small>
              <div className={styles["enshita-loginform-textarea"]}>
                <div className={styles["enshita-loginform-icon"]}>
                  <HiLockClosed size={15} />
                </div>
                <input
                  type={IsShow ? "password" : "text"}
                  className={styles["enshita-loginform-input"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className={styles["enshita-loginform-icon"]}
                  onClick={() => {
                    setShow(!IsShow);
                  }}
                >
                  {IsShow && <AiFillEye size={15} />}
                  {!IsShow && <AiFillEyeInvisible size={15} />}
                </button>
              </div>
              <div className={styles["enshita-loginform-error"]}>
                {errors.password && (
                  <p>
                    <small>this field is required</small>
                  </p>
                )}
                {IsNorFound && !errors.password && !errors.emailOrName && (
                  <p>
                    <small>not found account</small>
                  </p>
                )}
              </div>
            </label>
          </div>
          <div className={styles["enshita-loginform-button"]}>
            <button type="submit" onClick={() => setNotFound(false)}>
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
