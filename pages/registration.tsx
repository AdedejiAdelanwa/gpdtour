import React, { useState } from "react";
import Head from "next/head";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { usePaystackPayment } from "react-paystack";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setnarration] = useState("");
  const { isOpen, onOpen, onClose: onModalClose } = useDisclosure();

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: Number(amount),
    phone,
    name,
    publicKey: "pk_test_3bd1a6f51ba250c214ff525d89ef58af5a9c6a31",
  };
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    setName("");
    setEmail("");
    setPhone("");
    setAmount("");
    console.log("Hello succes");
    onOpen();
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <>
      <Head>
        <title>PGD Tour | Registration</title>
        <meta
          name="description"
          content="a 3-Day golf Tournament which holds between the 26th -28th of January 2023 at Lakowe Lakes and Country Estate, Lagos."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="100%" pos="relative" bg="white">
        <Navigation />
        <VStack w="100%" justifyContent="center" py="2rem">
          <Alert status="warning" w={["95%", "40%"]} rounded="2px">
            <AlertIcon />
            PGD Tours promoted by Meristem is granted irrevocable, nonexclusive,
            worldwide copyright license to download, copy, modify, distribute,
            perform, and use photos from Golfing events for free, including for
            commercial purposes, without permission from or attributing the
            subject.
          </Alert>
          {/* <Text fontSize="1rem" w="40%" bg="rgba(255,204,0,0.3)" p="0.5rem">
            <span>*</span>
           
          </Text> */}
          <VStack
            width={["100%", "30%"]}
            h={["auto", "80vh"]}
            bg="white"
            py={["1.5rem", "3rem"]}
            px="1rem"
          >
            <Heading>Registration </Heading>
            <form style={{ fontSize: "1.6rem", width: "100%" }}>
              <FormControl mb="1.5rem" isRequired>
                <FormLabel fontSize="1.6rem">Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  py="1.8rem"
                  type="text"
                />
                <FormHelperText fontSize="1.2rem">
                  Enter your official name
                </FormHelperText>
              </FormControl>
              <FormControl mb="1.5rem" isRequired>
                <FormLabel fontSize="1.6rem">Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  py="1.8rem"
                  type="email"
                />
                <FormHelperText fontSize="1.2rem">
                  Enter a valid email
                </FormHelperText>
              </FormControl>
              <FormControl mb="1.5rem" isRequired>
                <FormLabel fontSize="1.6rem">Phone Number</FormLabel>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  py="1.8rem"
                  type="tel"
                />
                <FormHelperText fontSize="1.2rem">
                  Enter a functional phone number
                </FormHelperText>
              </FormControl>
              <FormControl mb="1.5rem" isRequired>
                <FormLabel fontSize="1.6rem">Amount</FormLabel>
                <Select
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fontSize="1.6rem"
                  placeholder="Select amount"
                >
                  <option value="1000000">10,000 (Pro)</option>
                  <option value="1500000">15,000(Amateur 1)</option>
                </Select>
              </FormControl>
              <FormControl mb="1.5rem" isRequired>
                <FormLabel fontSize="1.6rem">Narration</FormLabel>
                <Textarea
                  value={narration}
                  onChange={(e) => setnarration(e.target.value)}
                  placeholder="Meristem Open"
                />
              </FormControl>
              <Button
                w="100%"
                py="2rem"
                bg="brand.leafgreen"
                color="white"
                fontSize="1.6rem"
                textTransform="uppercase"
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
              >
                Pay Now
              </Button>
            </form>
          </VStack>
        </VStack>

        <Footer />
        <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
          <ModalOverlay />
          <ModalContent fontSize="1.6rem">
            <ModalHeader fontSize="3xl" textAlign="center">
              Payment Successful
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p="2rem">
              <Text>Kindly save this reference : {config.reference}</Text>
              <Text mt="2rem">
                <Link
                  w="100%"
                  bg="brand.leafgreen"
                  py="1rem"
                  px="2rem"
                  color="white"
                  ml="1rem"
                  rounded="5px"
                  _hover={{
                    textDecoration: "none",
                  }}
                  href="https://forms.gle/ZDSVRUhJGcbpB3i19"
                  isExternal
                >
                  Complete Registration
                </Link>
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button bg="red" color="white" mr={3} onClick={onModalClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
export default Registration;
