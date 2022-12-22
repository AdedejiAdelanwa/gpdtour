import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Upcoming = () => {
  const events = [
    { name: "custodian classic", date: "MARCH 20TH -23RD, 2023" },
    { name: "etranzact open", date: "APRIL 20TH - 23RD, 2023" },
  ];
  return (
    <VStack
      w={"full"}
      h={["auto", "60vh"]}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1576555928619-03d62a29e4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=1350&q=60)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      py={["2.5rem", 0]}
      justifyContent="center"
      spacing="3rem"
    >
      <Text fontSize="2rem" textAlign="left" color={["black", "white"]}>
        UPCOMING EVENTS
      </Text>
      <Flex
        w="80%"
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="space-around"
        gap="2.5rem"
        overflowX="scroll"
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
