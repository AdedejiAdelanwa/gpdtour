import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import axios from "axios";

const Registration = () => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [email, setEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  //const { isOpen, onOpen, onClose: onModalClose } = useDisclosure();
  const [isChecked, setIsChecked] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [isRequesting, setIsRequesting] = useState(false);

  const payCredo = async () => {
    setIsRequesting(true);
    const generateRandomNumber = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min) + min);

    const reference = `pgdtour${generateRandomNumber(
      10,
      60
    )}cus${generateRandomNumber(10, 90)}`;

    const parsedAmount = Number(amount);

    try {
      const {
        data: { data },
      } = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_CREDO_BASE_URL}/transaction/initialize`,

        headers: {
          ContentType: "application/JSON",
          Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        data: {
          amount: parsedAmount,
          bearer: 0,
          callbackUrl: "https://pgdtour.org/success-page",
          channels: ["card", "bank"],
          currency,
          customerFirstName,
          customerLastName,
          customerPhoneNumber,
          email,
          reference,
        },
      });
      setIsRequesting(false);
      window.open(data.authorizationUrl);
    } catch (error) {
      alert(error);
      setIsRequesting(false);
    }
  };
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
            overflowY="auto"
          >
            <Heading>Registration </Heading>
            {isRegistrationOpen ? (
              <form style={{ fontSize: "1.6rem", width: "100%" }}>
                <FormControl mb="1.5rem" isRequired>
                  <FormLabel fontSize="1.6rem">First Name</FormLabel>
                  <Input
                    fontSize="16px"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    py="1.8rem"
                    type="text"
                  />
                  <FormHelperText fontSize="1.2rem">
                    Enter your first name
                  </FormHelperText>
                </FormControl>
                <FormControl mb="1.5rem" isRequired>
                  <FormLabel fontSize="1.6rem">Last Name</FormLabel>
                  <Input
                    fontSize="16px"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    py="1.8rem"
                    type="text"
                  />
                  <FormHelperText fontSize="1.2rem">
                    Enter your surname
                  </FormHelperText>
                </FormControl>
                <FormControl mb="1.5rem" isRequired>
                  <FormLabel fontSize="1.6rem">Email</FormLabel>
                  <Input
                    fontSize="16px"
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
                    fontSize="16px"
                    value={customerPhoneNumber}
                    onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                    py="1.8rem"
                    type="tel"
                  />
                  <FormHelperText fontSize="1.2rem">
                    Enter a functional phone number
                  </FormHelperText>
                </FormControl>
                <FormControl mb="1.5rem" isRequired>
                  <FormLabel fontSize="1.6rem">Currency</FormLabel>
                  <Select
                    value={currency}
                    onChange={(e) => {
                      setCurrency(e.target.value);
                      currency === "USD"
                        ? setAmount("1500")
                        : setAmount("100000");
                    }}
                    fontSize="1.6rem"
                    placeholder="choose currency"
                  >
                    <option value="NGN">Naira</option>
                    <option value="USD">Dollar</option>
                  </Select>
                </FormControl>
                <FormControl mb="1.5rem" isRequired>
                  <FormLabel fontSize="1.6rem">Amount</FormLabel>
                  <Input
                    fontSize="16px"
                    value={currency === "USD" ? "15" : "1000"}
                    py="1.8rem"
                    type="number"
                    disabled
                  />
                </FormControl>
                <Checkbox
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                >
                  I have read and agreed to the PGD Tour
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
                  onClick={payCredo}
                >
                  {isRequesting ? "Processing..." : "Pay Now"}
                </Button>
              </form>
            ) : (
              <Text>We are sorry registration for the tour is closed.</Text>
            )}
          </VStack>
        </VStack>
        <Footer />
      </Box>
    </>
  );
};
export default Registration;
