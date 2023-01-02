import React from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Prize() {
  const positionPrize = [
    { pos: "Winner", prize: "1,500,000.00" },
    { pos: "R/up", prize: "700,000.00" },
    { pos: "3rd", prize: "600,000.00" },
    { pos: "4th", prize: "	500,000.00" },
    { pos: "5th", prize: "	450,000.00" },
    { pos: "6th", prize: "	400,000.00" },
    { pos: "7th", prize: "	370,000.00" },
    { pos: "8th", prize: "	350,000.00" },
    { pos: "9th", prize: "	330,000.00" },
    { pos: "10th", prize: "	300,000.00" },
    { pos: "11th", prize: "	260,000.00" },
    { pos: "12th", prize: "	260,000.00" },
    { pos: "13th", prize: "	260,000.00" },
    { pos: "14th", prize: "	260,000.00" },
    { pos: "15th", prize: "	260,000.00" },
    { pos: "16th", prize: "	230,000.00" },
    { pos: "17th", prize: "	230,000.00" },
    { pos: "18th", prize: "	230,000.00" },
    { pos: "19th", prize: "	230,000.00" },
    { pos: "20th", prize: "	230,000.00" },
    { pos: "21st", prize: "210,000.00" },
    { pos: "22nd", prize: "210,000.00" },
    { pos: "23rd", prize: "	210,000.00" },
    { pos: "24th", prize: "210,000.00" },
    { pos: "25th", prize: "210,000.00" },
    { pos: "26th", prize: "200,000.00" },
    { pos: "27th", prize: "200,000.00" },
    { pos: "28th", prize: "200,000.00" },
    { pos: "29th", prize: "200,000.00" },
    { pos: "30th", prize: "200,000.00" },
  ];

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
        <Flex justifyContent="center" height="auto">
          <TableContainer my={["1rem", "3rem"]} width={["90%", "40%"]}>
            <Table variant="striped" size={["sm", "md", "lg"]}>
              <Thead bg="brand.leafgreen">
                <Tr>
                  <Th
                    style={{
                      fontSize: "1.8rem",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Position
                  </Th>
                  <Th
                    style={{
                      fontSize: "1.8rem",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Gross Winning
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {positionPrize.map((item) => (
                  <Tr key={item.pos} fontSize="1.5rem">
                    <Td style={{ textAlign: "center" }}>{item.pos}</Td>
                    <Td style={{ textAlign: "center" }}>₦{item.prize}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th
                    style={{
                      fontSize: "1.8rem",
                      textAlign: "center",
                    }}
                    textTransform="uppercase"
                  >
                    Total
                  </Th>
                  <Th
                    style={{
                      fontSize: "1.8rem",
                      textAlign: "center",
                    }}
                    isNumeric
                  >
                    ₦ 10,000,000
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
