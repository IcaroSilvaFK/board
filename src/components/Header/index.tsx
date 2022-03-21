import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavBar } from "./NavBar";

import styles from "./styles.module.scss";
import { LoginButton } from "../LoginButton";

import Logo from "../../assets/logomaior.svg";

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.subcontainer}>
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={80}
            height={79}
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <div>
        <LoginButton />
      </div>
    </header>
  );
};
