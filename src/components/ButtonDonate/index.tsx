import { FC } from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export const ButtonDontate: FC = () => {
  const route = useRouter();

  return (
    <button className={styles.container} onClick={() => route.push("/donate")}>
      <span>Apoiar</span>
    </button>
  );
};
