"use client";
import { Spinner, Center } from "@chakra-ui/react";
import { allColors } from "@/ads";
export default function TheSpinner() {
  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={allColors.navText}
        size="xl"
      />
    </Center>
  );
}
