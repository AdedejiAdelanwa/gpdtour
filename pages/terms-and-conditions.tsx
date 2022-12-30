import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { GiGolfFlag } from "react-icons/gi";

export default function Terms() {
  return (
    <>
      <Head>
        <title>PGD Tour</title>
        <meta
          name="description"
          content="a 3-Day golf Tournament which holds between the 26th -28th of January 2023 at Lakowe Lakes and Country Estate, Lagos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="100%" pos="relative">
        <Navigation />
        <Flex justifyContent="center" py={["1.5rem", "3rem"]}>
          <VStack
            h={"80vh"}
            w={["100%", "40%"]}
            border="1px solid grey"
            rounded="2px"
            p="10px"
          >
            <Heading>Terms and Conditions</Heading>
            <List spacing={10} fontSize="1.4rem">
              <ListItem>
                <ListIcon as={GiGolfFlag} color="green.500" />
                Prize Money. The total prize money been Ten million naira less
                10% Administrative and PGAN Levies.
              </ListItem>
              <ListItem>
                <ListIcon as={GiGolfFlag} color="green.500" />
                Top 30 without ties will make the cut after 36 holes.
              </ListItem>
              <ListItem>
                <ListIcon as={GiGolfFlag} color="green.500" />
                PGD Tours promoted by Meristem is granted irrevocable,
                nonexclusive, worldwide copyright license to download, copy,
                modify, distribute, perform, and use photos from Golfing events
                for free, including for commercial purposes, without permission
                from or attributing the subject.
              </ListItem>
            </List>
          </VStack>
        </Flex>

        <Footer />
      </Box>
    </>
  );
}
