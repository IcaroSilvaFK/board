import { FC } from "react";
import { FiCalendar, FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./styles.module.scss";

interface ITasksCardProps {
  task: string;
  date: string;
  onClick: () => void;
  editTask?: () => void;
}

export const TaskCard: FC<ITasksCardProps> = ({
  date,
  onClick,
  task,
  editTask,
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.containerTask}>
        <p>{task}</p>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.containerDate}>
          <FiCalendar size={20} color="#ffb800" />
          <span>{date}</span>
        </div>
        <button onClick={editTask}>
          <FiEdit2 />
          <span>Editar</span>
        </button>
        <button onClick={onClick}>
          <MdDeleteOutline size={20} color="#ff3636" />
          <span>Excluir</span>
        </button>
      </div>
    </article>
  );
};
