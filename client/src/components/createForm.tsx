import { FC, useState } from "react";
import styles from "~/styles/createAccountForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { client } from "~/libs/apiClient";

type FormDataProps = {
  email: string;
  password: "admin"|"account";
};

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

const CreateAccountForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: zodResolver(schema) });

  const [IsNorFound, setNotFound] = useState(false);
  const [IsClick, setClick] = useState(false);

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

  return (
    <div className={styles["enshita-createaccountform-body"]}>
      <div className={styles["enshita-createaccountform-head"]}>
        <p className={styles["enshita-createaccountform-sentence"]}>
        Create New Account
        </p>
      </div>
      <div className={styles["enshita-createaccountform-main"]}>
        <p className={styles["enshita-createaccountform-dis"]}>
          <small>Create New enshita Account</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["enshita-createaccountform-form-body"]}>
            <label htmlFor="email/name">
              <p><small>Email Address of New Account</small></p>
              <div className={styles["enshita-createaccountform-textarea"]}>
                <div className={styles["enshita-createaccountform-icon"]}>
                  <AiOutlineUser size={15} />
                </div>
                <input
                  className={styles["enshita-createaccountform-input"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("email", { required: true })}
                />
              </div>
              <div className={styles["enshita-createaccountform-error"]}>
                {errors.email && <small>this field is required</small>}
              </div>
            </label>
          </div>

          <div className={styles["enshita-createaccountform-form-body"]}>
            <label htmlFor="password">
              <p><small>Account Type</small></p>
              <div className={styles["enshita-createaccountform-textarea"]}>
                <div className={styles["enshita-createaccountform-icon"]} />
                <select
                  className={styles["enshita-createaccountform-input"]}
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...register("password", { required: true })}
                >
                  <option value="account">account</option>
                  <option value="admin">admin</option>
                </select>
                {/* <button
                  type="button"
                  className={styles["enshita-createaccountform-icon"]}
                  onClick={() => {
                    setShow(!IsShow);
                  }}
                >
                  {IsShow && <BsFillTriangleFill size={15} />}
                  {!IsShow && <BsFillTriangleFill size={15} />}
                </button> */}
              </div>
              <div className={styles["enshita-createaccountform-error"]}>
                {errors.password && (
                  <p>
                    <small>this field is required</small>
                  </p>
                )}
                {IsNorFound && !errors.password && !errors.email && (
                  <p>
                    <small>not found account</small>
                  </p>
                )}
              </div>
            </label>
          </div>
          <div className={styles["enshita-createaccountform-button"]}>
            <button type="submit" onClick={() => setNotFound(false)}>
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
