import React, { useState } from "react";
import Head from "next/head";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  LinkBox,
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
  const [isChecked, setIsChecked] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: Number(amount),
    phone,
    name,
    publicKey: "pk_live_41dbc3d07d93bcf0dcbd29bcebfbdce746ba1669",
  };
  const onSuccess = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAmount("");
    console.log("Hello succes");
    onOpen();
  };
  const onClose = () => {
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
          <VStack
            width={["100%", "30%"]}
            h={["auto", "80vh"]}
            bg="white"
            py={["1.5rem", "3rem"]}
            px="1rem"
          >
            <Heading>Registration </Heading>
            {isRegistrationOpen ? (
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
                    <option value="1015000">10,000 (Pro)</option>
                    <option value="1015000">10,000(Amateur CAT 1)</option>
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
                <Checkbox
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                >
                  I have read and agreed to the PGD Tour{" "}
                  <Link
                    href="/terms-and-conditions"
                    color={"blue"}
                    target="_blank"
                  >
                    Terms and Conditions
                  </Link>
                </Checkbox>
                <Button
                  w="100%"
                  py="2rem"
                  bg="brand.leafgreen"
                  color="white"
                  fontSize="1.6rem"
                  textTransform="uppercase"
                  disabled={isChecked}
                  onClick={() => {
                    initializePayment(onSuccess, onClose);
                  }}
                >
                  Pay Now
                </Button>
              </form>
            ) : (
              <Text>We are sorry registration for the tour is closed.</Text>
            )}
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
