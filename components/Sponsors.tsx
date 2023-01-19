import { Card, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Farmfresh from "../public/assets/farmfresh.jpeg";
import UAC from "../public/assets/uac.png";
// import Pepsi from "../public/assets/Pepsi-Logo.svg";
// import Polaris from "../public/assets/Polaris-Bank.svg";
import Meristem from "../public/assets/msl-logo.svg";
import Lakowe from "../public/assets/lakowe-logo.svg";

export const Sponsors = () => {
  const sponsors = [Meristem, Lakowe, Farmfresh, UAC];
  return (
    <VStack
      w={"full"}
      h={["auto", "60vh"]}
      bg="white"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      py={["2.5rem", 0]}
      justifyContent="center"
      spacing="3rem"
    >
      <Text fontSize="2rem" textAlign="left" color="black">
        SPONSORS
      </Text>
      <Flex
        w="50%"
        gap="2rem"
        justifyContent="center"
        alignItems="center"
        direction={["column", "row"]}
      >
        {sponsors.map((sponsor, i) => (
          <Image height={100} key={i} src={sponsor} alt="sponsor" />
        ))}
      </Flex>
    </VStack>
  );
};
