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

export const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={["50vh", "80vh"]}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1350&q=60)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      px={["1rem", "2rem", "8rem"]}
    >
      <VStack
        w={"full"}
        justify={"center"}
        alignItems={["center", "flex-start"]}
      >
        <VStack
          spacing="2rem"
          alignItems="flex-start"
          color="black"
          bg={"rgba(255,255,255,0.48)"}
          p="1.5rem"
          rounded={"0.5rem"}
        >
          <Box mb="1rem" fontFamily="Merriweather">
            <Heading fontSize={["3xl", "6xl"]}>Let’s take</Heading>
            <Heading fontSize={["4xl", "8xl"]}>Golf farther</Heading>
          </Box>

          <Text w="35rem" fontSize="1.5rem">
            a 3-Day golf Tournament which holds between the 26th -28th of
            January 2023 at Lakowe Lakes and Country Estate, Lagos.
          </Text>

          <Button
            bg={"brand.leafgreen"}
            fontSize="1.5rem"
            py="2rem"
            px="2.5rem"
            color={"white"}
            _hover={{ bg: "brand.bottlegreen" }}
            textTransform="uppercase"
          >
            Learn more
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};