import { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { v4 as uuid } from "uuid";
import { getSession } from "next-auth/react";
import { collection, addDoc } from "firebase/firestore";

import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TasksCard";
import styles from "./styles.module.scss";
import { CardDonator } from "../../components/CardDonator";
import { ButtonDontate } from "../../components/ButtonDonate";
import { app, database } from "../../services/firebaseConection";

interface ITasksStateProps {
  task: string;
  date: string;
  id: string;
}

interface ITaskProp {
  task: string;
}

const MeuBoard = ({ user }: { user: { name: string; email: string } }) => {
  const [tasks, setTasks] = useState<ITasksStateProps[]>([]);

  const { register, handleSubmit, reset } = useForm<ITaskProp>({
    defaultValues: {
      task: "",
    },
  });

  const onSubmit: SubmitHandler<ITaskProp> = async ({ task }) => {
    const dbInstance = collection(database, "tasks");
    if (task) {
      const newTask = {
        user: user.name,
        email: user.email,
        task: task,
        id: uuid(),
        date: new Date().toLocaleDateString(),
      };

      addDoc(dbInstance, {
        content: JSON.stringify(newTask),
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      setTasks([...tasks, newTask]);
      reset();
    }
  };

  function handleRemoveTask(id: string) {
    const newArray = tasks.filter((element) => element.id !== id);

    setTasks(newArray);
  }

  function handleEditTask(id: string) {
    const editTask = tasks.filter((element) => element.id === id);
    const newTasks = tasks.filter((element) => element.id !== id);
    setTasks(newTasks);
    if (editTask[0].task) reset({ task: editTask[0].task });
  }

  return (
    <>
      <Head>
        <title>Meu Board</title>
      </Head>
      <main className={styles.container}>
        <Header />
        <div className={styles.containerContent}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("task")}
              placeholder="Adicione aqui uma nova tarefa"
            />
            <button type="submit">
              <GoPlus size={20} color="#17181f" />
            </button>
          </form>
          <section className={styles.containerTasks}>
            <h2>Você tem {tasks.length} tarefas</h2>
            {tasks?.map((element) => (
              <TaskCard
                key={element.id}
                date={element.date}
                task={element.task}
                onClick={() => handleRemoveTask(element.id)}
                editTask={() => handleEditTask(element.id)}
              />
            ))}
          </section>
        </div>
        <CardDonator />
      </main>
      <ButtonDontate />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.logged) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const user = {
    nome: session.user?.name,
    email: session.user?.email,
  };

  return {
    props: { user },
  };
};

export default MeuBoard;
