import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import GolfMeristem from "../public/assets/blank-ball.png";

export const Upcoming = () => {
  const events = [
    { name: "other tournaments", date: "Coming soon" },
    //{ name: "etranzact open", date: "Coming soon" },
  ];
  return (
    <VStack
      w={"full"}
      h={["auto", "60vh"]}
      backgroundImage={`url(${GolfMeristem.src})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      py={["2.5rem", 0]}
      justifyContent="center"
      spacing="3rem"
    >
      <Text fontSize="2rem" textAlign="left" color="black">
        UPCOMING EVENTS
      </Text>
      <Flex
        w="80%"
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-around"
        gap="2.5rem"
        overflowX="auto"
      >
        {events.map((event) => (
          <Card
            align="center"
            w="30rem"
            height="32rem"
            key={event.name}
            borderRadius="1.8rem"
            bg="brand.deepbottle"
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            fontSize="1.6rem"
          >
            <CardHeader></CardHeader>
            <CardBody>
              <VStack
                justifyContent="center"
                alignItems="center"
                textTransform="uppercase"
              >
                <Text color="white">{event.name}</Text>
                <Text color="#A6B14F">{event.date}</Text>
              </VStack>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </Flex>
    </VStack>
  );
};
