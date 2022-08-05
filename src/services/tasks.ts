import axios from "axios";
import { ITask } from "../interfaces";

const request = axios.create({
  baseURL:  process.env.API_URL ?? "http://localhost:4000/",
});

export const getTasks = async () => {
  return new Promise<ITask[]>((resolve, reject) => {
    request
      .get("tasks")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}