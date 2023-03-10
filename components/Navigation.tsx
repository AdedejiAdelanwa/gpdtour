import React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  VStack,
  Collapse,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import CompLogo from "../public/assets/pgdtour-golf-logo.svg";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="100%" bg={"brand.white"} pos="relative">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={["1rem", "2rem", "8rem"]}
        h={["5rem", "7rem", "10rem"]}
      >
        <Box boxSize={["6rem", "8rem", "15rem"]}>
          <Image src={CompLogo} alt="PGD tour logo" />
        </Box>
        <Flex
          display={["none", "none", "flex"]}
          w="15rem"
          fontSize="1.4rem"
          justifyContent="space-between"
        >
          <Link href="/faqs">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
        <IconButton
          onClick={onToggle}
          cursor="pointer"
          display={["block", "block", "none"]}
          aria-label="Toggle Navigation"
          w="2rem"
          h="2rem"
          fontSize="2rem"
          color="brand.bottlegreen"
          icon={isOpen ? <AiOutlineClose /> : <BiMenu />}
        ></IconButton>
      </Flex>
      <Flex
        h="7rem"
        bg="brand.leafgreen"
        color="white"
        display={["none", "none", "flex"]}
        alignItems="center"
        justifyContent="space-between"
        fontSize="1.6rem"
        px="8rem"
      >
        <Link
          p="1rem"
          alignItems="center"
          _hover={{
            textDecoration: "none",
            backgroundColor: "brand.deepbottle",
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
            backgroundColor: "brand.deepbottle",
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
            backgroundColor: "brand.deepbottle",
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
            backgroundColor: "brand.deepbottle",
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
            backgroundColor: "brand.deepbottle",
            borderRadius: "3px",
          }}
          href="/"
        >
          STATS
        </Link>
        <Link
          p="1rem"
          alignItems="center"
          _hover={{
            textDecoration: "none",
            backgroundColor: "brand.deepbottle",
            borderRadius: "3px",
          }}
          href="/"
        >
          ACCOMODATION
        </Link>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          w="100%"
          color="white"
          bg="brand.leafgreen"
          alignItems="flex-start"
          pos="absolute"
          right="0"
          top="5rem"
          zIndex="10"
        >
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.deepbottle",
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
              backgroundColor: "brand.deepbottle",
              borderRadius: "3px",
            }}
            href="https://forms.gle/ZDSVRUhJGcbpB3i19"
            //href="/registration"
          >
            REGRISTRATION
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.deepbottle",
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
              backgroundColor: "brand.deepbottle",
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
              backgroundColor: "brand.deepbottle",
              borderRadius: "3px",
            }}
            href="/"
          >
            STATS
          </Link>
          <Link
            p="1rem"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.deepbottle",
              borderRadius: "3px",
            }}
            href="/"
          >
            ACCOMODATION
          </Link>
        </VStack>
      </Collapse>
    </Box>
  );
};
