import React, { useState, useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { ITask } from "../interfaces";
import { getTasks } from "../services";

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("loading: ", loading);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    await getTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.log("error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      {!loading ? (
        tasks.length ? (
          tasks.map((task, index) => <TaskCard key={index} {...task} />)
        ) : (
          <p>Não há tarefas.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
