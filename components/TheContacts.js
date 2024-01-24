"use client";
import { allColors } from "@/ads";
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

export default function TheContacts({ lang }) {
  const remresurs = [48.36587927491042, 35.081880468142174];

  return (
    <Stack
      minH={{ base: "calc(100vh - 160px)", md: "calc(100vh - 96px)" }}
      direction={{ base: "column", md: "row" }}
      backgroundColor={allColors.backgroundMain}
      position={"relative"}
      paddingTop={{ base: "60px", md: "0" }}
    >
      <Flex flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            className="section_title_white"
            textAlign={"center"}
            color={allColors.navText}
          >
            {lang.contacts.title}
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
                {lang.contacts.teltext}
              </Text>
              <Box>
                <Text
                  color={allColors.subTitle}
                  fontSize={{ base: "1.5em", md: "2em" }}
                >
                  {lang.contacts.tel}
                </Text>
                <Text
                  color={allColors.subTitle}
                  fontSize={{ base: "1.5em", md: "2em" }}
                >
                  {lang.contacts.tel1}
                </Text>
              </Box>
              <Text color={allColors.navText} fontSize={"1.5em"}>
                {lang.contacts.subtitle}
              </Text>
              <Box>
                <Text
                  color={allColors.subTitle}
                  fontSize={{ base: "1.5em", md: "2em" }}
                >
                  {lang.contacts.mail}
                </Text>
              </Box>
              <Text color={allColors.navText} fontSize={"1.5em"}>
                {lang.contacts.description}
              </Text>
              <Text color={allColors.subTitle} textAlign={"center"}>
                {lang.contacts.adres}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <Grid flex={1}>
        <TheMap position={remresurs} title={lang.contacts.adres} />
      </Grid>
    </Stack>
  );
}
