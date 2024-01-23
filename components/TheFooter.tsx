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
      maxH={"80px"}
      alt={"news image"}
      objectFit="cover"
      src={"/icons/rem_clear.png"}
    />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function TheFooter() {
  return (
    <Box bg={allColors.gradientBg} className="the_footer">
      <Container
        as={Stack}
        maxW={"7xl"}
        py={{ base: "0", md: "4" }}
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "2px", md: "md" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Stack textAlign={"center"}>
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
