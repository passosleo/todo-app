import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Spinner, Text, Wrap } from "@chakra-ui/react";
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
        console.log("Tasks: ", tasks);
      })
      .catch((error) => {
        console.log("error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {!loading ? (
        tasks.length ? (
          <>
            {tasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
            <Flex
              direction="column"
              w="45%"
              bg="gray.100"
              m={3}
              _dark={{ background: "gray.700" }}
              p={3}
              borderRadius={12}
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <AddIcon fontSize="3xl" opacity={0.2} />
            </Flex>
          </>
        ) : (
          <Flex
            direction="column"
            flex={1}
            py={10}
            alignItems="center"
            justifyContent="center"
            opacity={0.3}
          >
            <InfoOutlineIcon fontSize="5xl" mb={3} />
            <Text fontSize="2xl">Não há tarefas</Text>
          </Flex>
        )
      ) : (
        <Flex
          flex={1}
          py={10}
          alignItems="center"
          justifyContent="center"
          opacity={0.3}
        >
          <Spinner size="xl" />
        </Flex>
      )}
    </>
  );
};
