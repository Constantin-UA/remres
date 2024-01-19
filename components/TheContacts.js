"use client";
import { allColors, texts } from "@/ads";
import {
  Box,
  Image,
  Flex,
  Grid,
  Heading,
  Text,
  Stack,
  HStack,
} from "@chakra-ui/react";

import TheMap from "@/components/TheMap";

export default function SplitWithImage() {
  const remresurs = [48.36587927491042, 35.081880468142174];

  return (
    <Stack
      minH={{ base: "calc(100vh - 160px)", md: "calc(100vh - 96px)" }}
      direction={{ base: "column", md: "row" }}
      backgroundColor={allColors.backgroundMain}
      position={"relative"}
      paddingTop={{ base: "60px", md: "0" }}
      /*       _before={{
        content: "''",
        width: "full",
        height: "50px",
        position: "absolute",
        top: -50,
        left: 0,
        bg: `linear-gradient(0deg, ${allColors.backgroundMain} 0%, rgba(0,0,0,0) 100%)`,
        zIndex: 10,
      }} */
    >
      <Flex flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            className="section_title_white"
            textAlign={"center"}
            color={allColors.navText}
          >
            {texts.ukr.contacts.title}
          </Heading>
          <Flex direction={{ base: "column", md: "row" }}>
            <Flex
              flex={1}
              direction={"column"}
              gap={2}
              p={{ base: "8", md: "2" }}
              px={{ base: "60px", sm: "120px", md: "2" }}
              alignItems={"center"}
            >
              <Flex flex={1} direction={"column"} gap={2}></Flex>
              <Text color={allColors.navText} fontSize={"1.5em"}>
                {texts.ukr.contacts.teltext}
              </Text>
              <Box>
                <Text
                  color={allColors.subTitle}
                  fontSize={{ base: "1.5em", md: "2em" }}
                >
                  {texts.ukr.contacts.tel}
                </Text>
              </Box>
              <Text color={allColors.navText} fontSize={"1.5em"}>
                {texts.ukr.contacts.subtitle}
              </Text>
              <Box>
                <Text
                  color={allColors.subTitle}
                  fontSize={{ base: "1.5em", md: "2em" }}
                >
                  {texts.ukr.contacts.mail}
                </Text>
              </Box>
              <Text color={allColors.navText} fontSize={"1.5em"}>
                {texts.ukr.contacts.description}
              </Text>
              <Text color={allColors.subTitle} textAlign={"center"}>
                {texts.ukr.contacts.adres}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <Grid flex={1}>
        <TheMap position={remresurs} title={texts.ukr.contacts.adres} />
      </Grid>
    </Stack>
  );
}
