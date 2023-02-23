import Head from "next/head";

import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import Ahole from "../public/assets/success-swing.svg";
import Check from "../public/assets/check.svg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CheckIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="60" height="60" rx="30" fill="#CEE5D9" fillOpacity="0.3" />
    <path
      d="M52.9684 30.0001C52.9684 17.3148 42.6849 7.03131 29.9996 7.03131C17.3143 7.03131 7.03088 17.3148 7.03088 30.0001C7.03088 42.6853 17.3143 52.9688 29.9996 52.9688C42.6849 52.9688 52.9684 42.6853 52.9684 30.0001Z"
      fill="#00743B"
      fillOpacity="0.1"
    />
    <path
      d="M38.4476 24.4757L27.399 35.5243L21.8748 30"
      stroke="#00743B"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  const [redirectSeconds, setRedirectSeconds] = useState(15);
  const router = useRouter();
  const query = router.query;
  useEffect(() => {
    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
      console.log(redirectSeconds);
      if (redirectSeconds == 1) {
        router.push("/");
      }
      return;
    }, 1000);
  }, [redirectSeconds, router]);
  return (
    <>
      <Head>
        <title>PGD Tour| Success Page</title>
        <meta
          name="description"
          content="a 3-Day golf Tournament which holds between the 26th -28th of January 2023 at Lakowe Lakes and Country Estate, Lagos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100vh"
        //pos="relative"
        bg="#F9F9F9"
      >
        <Card
          w={["90%", "850px"]}
          h={["auto", "41rem"]}
          direction={["column", "row"]}
          justifyContent="space-between"
          overflow="hidden"
          variant="outline"
          p="10px"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src={Ahole.src}
            alt="A hole in one"
          />

          <CardBody w="100%" bg="inherit">
            <Grid
              w={{ base: "100%", sm: "300px" }}
              h={["auto", "100%"]}
              column="1fr"
              gap="1.5rem"

              //   justifyContent="space-around"
            >
              <VStack justifyContent="center">
                <CheckIcon />
                <Heading fontSize="2.1rem" color="#00743B">
                  Payment Successful
                </Heading>
              </VStack>
              <VStack justifyContent="start" spacing="1rem">
                <Link href="/">
                  <Button
                    bg="#00743B"
                    color="#FFFFFF"
                    //w="80%"
                    py="2rem"
                    fontSize="1.4rem"
                  >
                    Back to Home
                    <Icon as={BsArrowRight} ml="2rem" />
                  </Button>
                </Link>
                <Text color="#B1B1B1" fontSize="1.2rem">
                  Redirecting to Home in {redirectSeconds}s
                </Text>
              </VStack>
            </Grid>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
}

{
  /* <Box>Svg</Box>
<VStack>
  <Heading>Payment Successful</Heading>
  <Button>Bnack to Home</Button>
  <Text>Redirecting to Home in 10s</Text>
</VStack> */
}
