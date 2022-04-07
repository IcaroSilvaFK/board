import { FC } from "react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoMdClose } from "react-icons/io";

import styles from "./styles.module.scss";

export const LoginButton: FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className={styles.containerLogged}>
        <img
          src={session.user?.image!}
          alt={session.user?.name!}
          width={40}
          height={40}
        />
        <span>Olá {session.user?.name?.split(" ")[0]}</span>
        <IoMdClose onClick={() => signOut()} size={20} />
      </button>
    );
  }

  return (
    <button className={styles.container} onClick={() => signIn("github")}>
      <FiGithub color="#ffb800" size={25} />
      Entrar com github
    </button>
  );
};
