import { FC } from "react";
import { FiClock } from "react-icons/fi";

import styles from "./styles.module.scss";

export const CardDonator: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Obrigado por apoiar este projeto.</h1>
      <div>
        <FiClock />
        <span>Última doação foi a 3 dias.</span>
      </div>
    </div>
  );
};
