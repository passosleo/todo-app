import * as React from "react";
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
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{done ? "Done" : "Not Done"}</p>
      <p>{createdAt.toLocaleString()}</p>
      <p>{updatedAt.toLocaleString()}</p>
    </div>
  );
};
