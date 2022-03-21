import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ImagePc from "../assets/pc.svg";
import Logo from "../assets/logomaior.svg";

import { Header } from "../components/Header";

import styles from "./styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <main>
        <Image
          src={ImagePc}
          alt="Imagen pc"
          width={540}
          height={360}
          className={styles.image}
        />
        <div className={styles.subcontainer}>
          <h3>
            Uma ferramenta para seu dia a dia Escreva, <br />
            pjaneje e organize-se ..
          </h3>
          <p>
            <span>100% Gratuita</span> e online
          </p>
        </div>
        <footer>
          <strong>Apoiadores:</strong>
          <div>
            <img src="./assets/haruo.jpg" alt="Haruo" />
            <img src="./assets/akira.jpg" alt="Akira" />
            <img src="./assets/bunnygirl.jpg" alt="Bunny" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
