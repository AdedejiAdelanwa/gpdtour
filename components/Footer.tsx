import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiCopyright } from "react-icons/bi";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import PGDMono from "../public/assets/PGD-mono-logo.svg";

export const Footer = () => {
  return (
    <VStack
      bg="brand.deepbottle"
      py="2rem"
      h={["auto", "40vh"]}
      justifyContent="space-between"
    >
      <Flex
        w="100%"
        justifyContent="space-around"
        direction={["column", "row"]}
        alignItems="center"
        gap="2.5rem"
      >
        <Box boxSize={["6rem", "8rem", "15rem"]}>
          <Image src={PGDMono} alt="PGD tour logo" />
        </Box>
        <Flex
          color="white"
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          fontSize="1.3rem"
          px="3rem"
        >
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="/"
          >
            HOME
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.deepbottle",
              borderRadius: "3px",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="/assets/meristem-open-draw.pdf"
          >
            SCHEDULE
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="https://forms.gle/ZDSVRUhJGcbpB3i19"
            //href="/registration"
          >
            REGISTRATION
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="/"
          >
            NEWS
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="/prize"
          >
            PRIZE
          </Link>
          <Link
            p="1rem"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="/contact"
          >
            STATS
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.leafgreen",
              borderRadius: "3px",
            }}
            href="/contact"
          >
            ACCOMODATION
          </Link>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        w="100%"
        justifyContent={["space-around", "space-between"]}
        direction={["column", "row"]}
        //alignItems="flex-s"

        gap="2rem"
        px={["1rem", "1rem"]}
        color="white"
      >
        <HStack>
          <BiCopyright />
          <small>
            PGD Tours promoted by Meristem is granted irrevocable, nonexclusive,
            worldwide copyright license to download, copy, modify, distribute,
            perform, and use photos from Golfing events for free, including for
            commercial purposes, without permission from or attributing the
            subject.
          </small>
        </HStack>

        <Flex fontSize="1.6rem" gap="1rem">
          <BsFacebook />
          <BsInstagram />
          <AiFillTwitterCircle />
          <FaTelegramPlane />
          <AiFillYoutube />
        </Flex>
      </Flex>
    </VStack>
  );
};
