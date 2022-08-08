import React from "react";
import moment from "moment";
import { ITask } from "../interfaces";
import {
  HStack,
  Radio,
  RadioGroup,
  Tag,
  Text,
  WrapItem,
  Heading,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  EditIcon,
  RepeatClockIcon,
  TimeIcon,
} from "@chakra-ui/icons";

export const TaskCard: React.FC<ITask> = ({
  _id,
  name,
  done,
  createdAt,
  updatedAt,
}) => {
  return (
    <Box
      w="45%"
      bg="gray.100"
      m={3}
      _dark={{ background: "gray.700" }}
      p={3}
      borderRadius={12}
      flexDir="column"
      onClick={() => console.log(_id)}
    >
      <HStack fontSize="xl" spacing={2}>
        <Input fontSize="xl" value={name} />
        <EditIcon />
        <DeleteIcon />
      </HStack>
      <HStack
        opacity={0.3}
        p={1}
        mt={2}
        fontSize="xs"
        align="flex-start"
        alignItems="center"
      >
        <TimeIcon />
        <Text>{moment(createdAt).format("DD/MM/YY - HH:MM")}</Text>
        <RepeatClockIcon />
        <Text fontSize="xs">
          {moment(updatedAt).format("DD/MM/YY - HH:MM")}
        </Text>
      </HStack>
    </Box>
  );
};
