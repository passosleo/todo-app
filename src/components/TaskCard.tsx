import React from "react";
import { ITask } from "../interfaces";

export const TaskCard: React.FC<ITask> = ({
  id,
  name,
  done,
  createdAt,
  updatedAt,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{id}</p>
      <p>{done ? "Done" : "Not Done"}</p>
      <p>{createdAt.toLocaleString()}</p>
      <p>{updatedAt.toLocaleString()}</p>
    </div>
  );
};
