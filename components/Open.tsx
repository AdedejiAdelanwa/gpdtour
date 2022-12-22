import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import MSLLogo from "../public/assets/msl-logo.svg";
import Lakowe from "../public/assets/lakowe-logo.svg";

export const Open = () => {
  return (
    <Flex
      w={"full"}
      h={["50vh", "80vh"]}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=1350&q=60)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      px={["1rem", "2rem", "8rem"]}
    >
      <VStack w={"full"} justify={"center"} alignItems={["center", "center"]}>
        <VStack
          width={["full", "40%"]}
          spacing="2rem"
          alignItems="center"
          color="white"
          bg={"rgba(255,255,255,0.2)"}
          py="1.5rem"
          px="2.5rem"
          rounded={"0.5rem"}
        >
          <VStack mb="1rem" justifyContent="center" spacing="1rem">
            <Text fontSize={["3xl", "6xl"]} color={["black", "white"]}>
              Experience
            </Text>
            <Image width="200" src={MSLLogo} alt="host brand" />
            <Text fontSize={["2xl", "4xl"]} letterSpacing="1rem">
              OPEN
            </Text>
            <span
              style={{
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
                paddingRight: "1rem",
                paddingLeft: "1rem",
                backgroundColor: "green",
                fontSize: "1.4rem",
                borderRadius: "1.6rem",
                textAlign: "center",
              }}
            >
              Live at
            </span>
          </VStack>

          <Image width="200" src={Lakowe} alt="host brand" />

          <span
            style={{
              paddingTop: "0.3rem",
              paddingBottom: "0.3rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              backgroundColor: "green",
              fontSize: "1.4rem",
              borderRadius: "1.6rem",
              textAlign: "center",
            }}
          >
            26th-28th January, 2023
          </span>
        </VStack>
      </VStack>
    </Flex>
  );
};
