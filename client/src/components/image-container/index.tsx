import type { FC } from "react";
import styles from "~/styles/components/image-container/image-container.module.scss";
import type { ImageContainerProperties } from "./type/model";

const ImageContainer: FC<ImageContainerProperties> = ({
  alt,
  children,
  src,
}) => (
  <div className={styles["enshita-image-container"]}>
    <div className={styles["enshita-image-container-image-wrapper"]}>
      <img
        src={src}
        alt={alt}
        className={styles["enshita-image-container-image"]}
      />
    </div>
    <p className={styles["enshita-image-container-content"]}>{children}</p>
  </div>
);

export default ImageContainer;
