import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskCard } from "./components/TaskCard";
import { ITask } from "./interfaces";
import { getTasks } from "./services/tasks";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </div>
  );
};

export default App;
