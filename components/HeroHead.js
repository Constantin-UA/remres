"use client";

import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { allColors } from "@/ads";

export default function HeroHead({ lang }) {
  return (
    <Container
      minH={{ base: "calc(100vh - 60px)", md: "calc(100vh - 96px)" }}
      direction={{ base: "column", md: "row" }}
      className="hero-section"
      position={"reletive"}
      display={"flex"}
      mt={{ base: "60px", md: "96px" }}
      width={"100%"}
    >
      <Flex
        align={"flex-end"}
        justify={"center"}
        className="animate__animated animate__fadeInUp"
        width={"100%"}
      >
        <Stack
          spacing={6}
          background={allColors.backgroundMain}
          p={{ base: "4", sm: "2", md: "6", lg: "8" }}
          borderRadius={"16px 16px 0  0"}
          boxShadow={`${allColors.navText} 0px -5px 10px 0px,
          ${allColors.navText} 2px -5px 0px 0px,
          ${allColors.navText} -2px -5px 0px 0px`}
        >
          <Heading
            textAlign={"center"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            <Box
              as={"span"}
              position={"relative"}
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Text
                as={"span"}
                color={allColors.mainTitleW}
                textShadow={allColors.shadowText}
              >
                {lang.hero.title}
              </Text>
            </Box>
            <Text
              fontSize={"1.4rem"}
              lineHeight="100%"
              color={allColors.mainTitleW}
              as={"span"}
              className="newFont"
            >
              {lang.hero.subtitle}
            </Text>
            <br />{" "}
            <Text
              fontSize={{ base: "1rem", md: "1rem", lg: "1.5rem" }}
              lineHeight="100%"
              color={allColors.navText}
              as={"span"}
            ></Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={allColors.subTitle}
            textAlign={"center"}
          >
            {lang.hero.description}
          </Text>
          <Flex justify={"center"}>
            <Button
              rounded={"full"}
              bg={allColors.buttonCol}
              color={allColors.buttonText}
              _hover={{
                bg: allColors.gradientBg,
                boxShadow: allColors.shadowBox,
              }}
              as={"a"}
              href="#section_contacts"
              boxShadow="xl"
            >
              {lang.hero.btn}
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}
