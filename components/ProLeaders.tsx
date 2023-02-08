import { Card, CardBody, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Torgah from "../public/assets/torgah-vincent.jpeg";
import Olopade from "../public/assets/olopade.jpeg";
import Francis from "../public/assets/francis.jpeg";

export const ProLeaders = () => {
  const topLeaders = [
    { name: "Epe Francis", rank: "Pro winner", photo: Francis },
    { name: "Torgah Vincent", rank: "First runner-up", photo: Torgah },
    { name: "Olapade Sunday", rank: "Second runner-up", photo: Olopade },
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
              //align="center"
              justifyContent="space-evenly"
              w="27rem"
              height="30rem"
              bg="brand.deepbottle"
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <CardBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                textTransform="uppercase"
              >
                <Image
                  style={{
                    // position: "absolute",
                    // left: "10%",
                    // top: "-15%",

                    borderRadius: "50%",
                  }}
                  width="200"
                  height="200"
                  src={leader.photo.src}
                  alt={leader.name}
                />
                <Text
                  //pos="absolute"
                  //left="10%"
                  //bottom="-5%"
                  color="brand.deepbottle"
                  bg="#A6B14F"
                  py="0.5rem"
                  px="1.2rem"
                  fontWeight="bold"
                  rounded="2px"
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
