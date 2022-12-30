import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export const News = () => {
  const headings = ["news", "ranking", "leadership"];
  return (
    <VStack
      w={"full"}
      h={["auto", "60vh"]}
      bg="brand.lime"
      py={["2.5rem", 0]}
      justifyContent="center"
      spacing="3rem"
    >
      <Text fontSize="2rem" textAlign="left">
        TOP STORIES
      </Text>
      <Flex
        w="80%"
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-around"
        gap="2.5rem"
      >
        {headings.map((heading) => (
          <Card
            w="30rem"
            height="32rem"
            key={heading}
            borderRadius="1.8rem"
            backgroundImage={
              "url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1350&q=60)"
            }
            boxShadow="inset 0 0 40rem 1rem #000"
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
          >
            <CardHeader
              textTransform="uppercase"
              color="#CBD97C"
              textAlign="right"
              fontSize="1.5rem"
            >
              {heading}
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter px="3rem">
              <Flex
                bg="white"
                alignItems="center"
                gap="1rem"
                p="1rem"
                rounded="5px"
              >
                <Text>Coming soon</Text>

                <AiOutlineArrowRight
                  fontSize="2rem"
                  fontWeight="bold"
                  color="black"
                />
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </VStack>
  );
};
