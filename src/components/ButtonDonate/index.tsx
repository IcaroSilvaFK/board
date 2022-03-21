import { FC } from "react";

import styles from "./styles.module.scss";

export const ButtonDontate: FC = () => {
  return (
    <button className={styles.container}>
      <span>Apoiar</span>
    </button>
  );
};
