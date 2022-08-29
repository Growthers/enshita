import React from "react";
import styles from "~/styles/components/apply-form/title.module.scss"
import type { TitleProperties } from "./type/model";

const Title: React.FC<TitleProperties> = ({ title }) => (
  <div className={styles["enshita-apply-form-title-box"]}>
    <div className={styles["enshita-apply-form-title-wrapper"]}>
      <h1 className={styles["enshita-apply-form-title"]}>
        {title}
      </h1>
      <h1 className={styles["enshita-apply-form-title"]}>申し込みフォーム</h1>
    </div>
    <h2 className={styles["enshita-apply-form-subtitle"]}>気軽に申し込みしてください！</h2>
  </div>
)

export { Title }
