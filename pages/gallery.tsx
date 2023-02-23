import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { AdvancedImage } from "@cloudinary/react";

export default function Gallery() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzyvgflk9",
    },
  });
  const myImage = cld.image("pgdtour/meristem-open/lakowe");

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(300).height(300));
  return (
    <>
      <Head>
        <title>PGD Tour | Gallery</title>
        <meta
          name="description"
          content="a 3-Day golf Tournament which holds between the 26th -28th of January 2023 at Lakowe Lakes and Country Estate, Lagos."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="100%" pos="relative">
        <Navigation />
        <Box px={["1rem", "2rem", "8rem"]}>
          <Accordion w="full">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Meristem Open (Jan 14th-23rd)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Grid
                  gridTemplateColumns=" repeat(auto-fit, minmax(300px, 1fr))"
                  gridTemplateRows="auto"
                  gridAutoFlow="dense"
                  gridRowGap="1rem"
                >
                  {[5, 6, 7, 9, 10, 11, 12, 2, 4, 3, 1, 20].map((item, i) => (
                    <Box
                      key={item + i}
                      boxSize="300px"
                      bg="grey"
                      rounded="0.3rem"
                      objectFit="contain"
                    >
                      <AdvancedImage key={item + i} cldImg={myImage} />
                    </Box>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum quibusdam placeat delectus eligendi pariatur autem
                  iusto totam aut porro vero unde natus at fugit explicabo
                  laboriosam reiciendis quod, veniam nisi?
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
