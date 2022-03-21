import { FC } from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export const NavBar: FC = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/MeuBoard">
            <a>Meu board</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
