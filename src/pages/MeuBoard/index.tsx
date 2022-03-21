import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { v4 as uuid } from "uuid";

import { Header } from "../../components/Header";
import { TaskCard } from "../../components/TasksCard";
import styles from "./styles.module.scss";
import { CardDonator } from "../../components/CardDonator";
import { ButtonDontate } from "../../components/ButtonDonate";

interface ITasksStateProps {
  task: string;
  date: string;
  id: string;
}

interface ITaskProp {
  task: string;
}

const MeuBoard: NextPage = () => {
  const [tasks, setTasks] = useState<ITasksStateProps[]>([]);

  const { register, handleSubmit, reset } = useForm<ITaskProp>();

  const onSubmit: SubmitHandler<ITaskProp> = ({ task }) => {
    if (task) {
      const newTask = {
        task: task,
        id: uuid(),
        date: new Date().toLocaleDateString(),
      };

      setTasks([...tasks, newTask]);
      reset();
    }
  };

  console.log(tasks);

  function handleRemoveTask(id: string) {
    const newArray = tasks.filter((element) => element.id !== id);

    setTasks(newArray);
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
              <GoPlus size={20} />
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

export default MeuBoard;
