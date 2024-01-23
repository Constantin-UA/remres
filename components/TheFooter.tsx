"use client";
import { allColors, texts } from "@/ads";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
const Logo = (props: any) => {
  return (
    <Image
      maxW="400px"
      maxH={{ base: "60px", md: "80px" }}
      alt={"news image"}
      objectFit="cover"
      src={"/icons/rem_clear.png"}
    />
  );
};

export default function TheFooter() {
  return (
    <Box bg={allColors.gradientBg} p={"0"}>
      <Container
        as={Stack}
        maxW={"7xl"}
        p={"0"}
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "0px", md: "md" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Stack textAlign={"center"} spacing={{ base: "0px", md: "md" }}>
          <Text
            fontSize={{ base: "12px", md: "md", lg: "xl" }}
            color={allColors.navText}
          >
            {texts.ukr.footers.rights}
          </Text>
          <Text
            fontSize={{ base: "12px", md: "md", lg: "xl" }}
            color={allColors.navText}
          >
            {texts.ukr.footers.erdp}
          </Text>
        </Stack>
        <Stack direction={"row"} spacing={6}></Stack>
      </Container>
    </Box>
  );
}
