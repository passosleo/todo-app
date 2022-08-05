import React from "react";
import moment from "moment";
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
      <p>Criado em: {moment(createdAt).format("DD/MM/YYYY HH:MM")}</p>
      <p>Atualizado em: {moment(updatedAt).format("DD/MM/YYYY HH:MM")}</p>
    </div>
  );
};
