import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import custodianMobile from "../public/assets/custodian-mobile.png";
import custodianBg from "../public/assets/custodian-large.png";

import Link from "next/link";
// import { ImageUpload } from "../components/ImageUpload";
// import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// import { Cloudinary } from "@cloudinary/url-gen";

export const Hero = () => {
  // const [imagesUploadedList, setImagesUploadedList] = useState([]);
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloud_name: "dzyvgflk9", //Your cloud name
  //     upload_preset: "xwbi9gtw", //Create an unsigned upload preset and update this
  //   },
  // });
  // const onImageUploadHandler = (publicId: any) => {
  //   setImagesUploadedList((prevState) => {
  //     return [...prevState, publicId];
  //   });
  // };
  const [isMobile] = useMediaQuery("(max-width: 478px)");
  return (
    <Flex
      w={"full"}
      h={["50vh", "80vh"]}
      alignItems="center"
      backgroundImage={
        isMobile ? `url(${custodianMobile.src})` : `url(${custodianBg.src})`
      }
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={["right center", "center center"]}
      px={["1rem", "2rem", "8rem"]}
    >
      <VStack
        w="full"
        h={["100%", "50%"]}
        //spacing="2rem"
        alignItems="flex-start"
        justifyContent={["flex-end", "flex-end"]}
        color="black"
        //bg={["rgba(255,255,255,0.48)", "none"]}
        p="1.5rem"
        rounded={"0.5rem"}
      >
        {/* <Box mb="1rem" fontFamily="Merriweather">
            <Heading fontSize={["3xl", "6xl"]}>Let’s take</Heading>
            <Heading fontSize={["4xl", "8xl"]}>Golf farther</Heading>
          </Box>

          <Text w="35rem" fontSize="1.5rem">
            Custodian Classic Coming Soon.
          </Text> */}

        <Button
          w={["100%", "40%"]}
          bg="#9D1D32"
          fontSize="1.5rem"
          py="3rem"
          px="2.5rem"
          mt="2rem"
          color="white"
          _hover={{ bg: "white", color: "#9D1D32" }}
          textTransform="uppercase"
        >
          <Link href="https://forms.gle/ZDSVRUhJGcbpB3i19">Register Here</Link>
        </Button>
      </VStack>
    </Flex>
  );
};
