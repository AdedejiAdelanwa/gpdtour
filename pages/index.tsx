import Head from "next/head";

import styles from "../styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Open } from "../components/Open";
import { News } from "../components/News";
import { Upcoming } from "../components/Upcoming";

export default function Home() {
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
        <Hero />
        <Open />
        <News />
        <Upcoming />
      </Box>
    </>
  );
}
