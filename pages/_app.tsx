import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather/700.css";
import "@fontsource/roboto/400.css";

const colors = {
  brand: {
    white: "#FFFFFF",
    leafgreen: "#00743B",
    bottlegreen: "#023C11",
    deepbottle: "#033117",
    grey: "#E9E9E9",
    lime: "#FAFDE5",
  },
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Roboto', sans-serif`,
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
