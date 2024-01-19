"use client";
import { Box, Container, Heading, Text, Center } from "@chakra-ui/react";

import { allColors, texts } from "@/ads";

export default function TheSecond() {
  return (
    <Box
      px={{ base: "2", sm: "10" }}
      py={"10"}
      pt={{ base: "10", sm: "10", md: "20" }}
      bg={allColors.backgroundMain}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-evenly"
    >
      <Center>
        <Heading
          color={allColors.mainTitleW}
          textShadow={allColors.shadowText}
          textTransform={"uppercase"}
        >
          {texts.ukr.second.title}
        </Heading>
      </Center>
      <Container maxW={"6xl"} mt={10}>
        <Text
          fontSize="1.5rem"
          textShadow={allColors.shadowText}
          color={allColors.subTitle}
          textAlign={"center"}
        >
          {texts.ukr.second.subTitle}
        </Text>
      </Container>
    </Box>
  );
}
