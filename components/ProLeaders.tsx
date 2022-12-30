import { Card, CardBody, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Leader from "../public/assets/leader.svg";

export const ProLeaders = () => {
  const topLeaders = [
    { name: "John Doe", rank: 1, photo: Leader },
    { name: "John Doe", rank: 2, photo: Leader },
    { name: "John Doe", rank: 3, photo: Leader },
  ];
  return (
    <VStack
      w={"full"}
      h={["auto", "70vh"]}
      bg="brand.grey"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      py={["2.5rem", 0]}
      justifyContent="space-around"
      spacing="3rem"
    >
      <Text fontSize="2rem" textAlign="left" color="black" mb="3rem">
        LEADERBOARD
      </Text>
      <Flex
        w="80%"
        gap="2rem"
        justifyContent="center"
        alignItems="center"
        direction={["column", "row"]}
      >
        {topLeaders.map((leader) => (
          <VStack
            key={leader.name}
            fontSize="1.6rem"
            textTransform="uppercase"
            height="35rem"
            spacing="3rem"
          >
            <Card
              pos="relative"
              align="center"
              w="25rem"
              height="25rem"
              bg="brand.deepbottle"
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <CardBody textTransform="uppercase">
                <Image
                  style={{ position: "absolute", left: "10%", top: "-15%" }}
                  width="200"
                  height="200"
                  src={leader.photo}
                  alt={leader.name}
                />
                <Text
                  pos="absolute"
                  left="44%"
                  bottom="-5%"
                  color="brand.deepbottle"
                  bg="#A6B14F"
                  py="0.5rem"
                  px="1.2rem"
                  rounded="50%"
                  fontWeight="bold"
                >
                  {leader.rank}
                </Text>
              </CardBody>
            </Card>
            <Text
              color="white"
              bg="brand.deepbottle"
              py="0.3rem"
              px="0.8rem"
              rounded="0.3rem"
            >
              {leader.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
};
