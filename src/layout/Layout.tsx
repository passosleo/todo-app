import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  background,
  Box,
  Button,
  Flex,
  Heading,
  useColorMode,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        justifyContent="center"
        padding={4}
        bg="blue.300"
        _dark={{ background: "gray.700" }}
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          maxWidth={1200}
        >
          <Heading
            bg="blue.300"
            _dark={{
              background: "gray.700",
            }}
            color="white"
            p={1.5}
            borderRadius={12}
            outline="2px solid white"
            boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;"
            transition="all 0.2s ease-in-out"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            toDO!
          </Heading>

          <Button
            width={5}
            height={10}
            children={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>

      <Flex
        flexWrap="wrap"
        maxWidth={860}
        margin="0 auto"
        justifyContent="space-between"
        p={5}
        bg="gray.50"
        color="gray.800"
        _dark={{
          background: "gray.600",
          color: "gray.50",
        }}
        borderRadius={24}
        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
        marginTop={-12}
      >
        {children}
      </Flex>
    </>
  );
};
