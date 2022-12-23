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
import CompLogo from "../public/assets/golf_tour_logo.svg";

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
        h={["5rem", "7rem", "15rem"]}
      >
        <Box boxSize={["4rem", "6rem", "15rem"]}>
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
          href="/faqs"
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
          href="/contact"
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
          href="/faqs"
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
          href="/contact"
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
          href="/contact"
        >
          PLAYERS
        </Link>
        <Link
          p="1rem"
          _hover={{
            textDecoration: "none",
            backgroundColor: "brand.deepbottle",
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
            backgroundColor: "brand.deepbottle",
            borderRadius: "3px",
          }}
          href="/contact"
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
            href="/faqs"
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
            href="/contact"
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
            href="/faqs"
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
            href="/contact"
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
            href="/contact"
          >
            PLAYERS
          </Link>
          <Link
            p="1rem"
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.deepbottle",
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
              backgroundColor: "brand.deepbottle",
              borderRadius: "3px",
            }}
            href="/contact"
          >
            ACCOMODATION
          </Link>
        </VStack>
      </Collapse>
    </Box>
  );
};
