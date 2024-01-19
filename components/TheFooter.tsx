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
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Stack textAlign={"center"}>
          <Text color={allColors.navText}>{texts.ukr.footers.rights}</Text>
          <Text
            color={allColors.navText}
            transition={"all 0.5s ease"}
            _hover={{
              color: allColors.buttonText,
              transform: "scale(1.1)",
            }}
          >
            {texts.ukr.footers.erdp}
          </Text>
        </Stack>
        <Stack direction={"row"} spacing={6}></Stack>
      </Container>
    </Box>
  );
}
