import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        zIndex={-1}
        position="fixed"
        top={0}
        width="100vw"
        height="25vh"
        bg="blue.300"
        _dark={{ background: "gray.700" }}
      />

      <Box
        maxWidth={1200}
        margin="30px auto"
        alignItems="center"
        justifyContent="center"
        padding={5}
        bg="gray.50"
        color="gray.800"
        _dark={{
          background: "gray.600",
          color: "gray.50",
        }}
        borderRadius={24}
        boxShadow="rgba(17, 17, 26, 0.1) 0px 0px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
      >
        <Flex
          borderBottom="1px solid #e5e5e5"
          paddingBottom={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            fontSize="2xl"
            color="blue.300"
            padding={1}
            borderRadius={12}
            border="2px solid"
            borderColor="blue.300"
            boxShadow="rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;"
            transition="all 0.2s ease-in-out"
            _dark={{ color: "gray.50", borderColor: "gray.50" }}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            toDO!
          </Heading>

          <IconButton
            aria-label="Dark mode"
            icon={
              colorMode === "light" ? (
                <MoonIcon color="blue.500" />
              ) : (
                <SunIcon color="orange.400" />
              )
            }
            onClick={toggleColorMode}
          />
        </Flex>
        <Flex flexWrap="wrap">{children}</Flex>
      </Box>
    </>
  );
};
