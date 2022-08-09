import { AddIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { ITask } from "../interfaces";
import { getTasks } from "../services";

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  console.log("loading: ", loading);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              w="25%"
              bg="gray.100"
              m={3}
              _dark={{ background: "gray.700" }}
              p={3}
              borderRadius={12}
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={onOpen}
            >
              <AddIcon fontSize="3xl" opacity={0.2} />
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Nova Tarefa</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack alignItems="flex-start" spacing={5}>
                    <Input placeholder="Nome da Tarefa" />
                    <Checkbox
                      colorScheme="blue"
                      onClick={() => setChecked(!checked)}
                    >
                      Tarefa concluída
                    </Checkbox>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="red" mr={3} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Salvar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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
