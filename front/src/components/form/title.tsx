import React from "react";
import styles from "~/styles/form.module.scss"
import type { TitleProperties } from "./type/model";

const Title: React.FC<TitleProperties> = ({ title }) => (
  <div className={styles["enshita-form-title-box"]}>
    <div className={styles["enshita-form-title-wrapper"]}>
      <h1 className={styles["enshita-form-title"]}>
        {title}
      </h1>
      <h1 className={styles["enshita-form-title"]}>申し込みフォーム</h1>
    </div>
    <h2 className={styles["enshita-form-subtitle"]}>気軽に申し込みしてください！</h2>
  </div>
)

export { Title }
