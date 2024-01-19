"use client";

import { ChakraProvider } from "@chakra-ui/react";
import TheNavbar from "@/components/TheNavbar";
import TheCarousel from "@/components/TheCarousel";

function Providers({ children }) {
  return (
    <ChakraProvider>
      <TheNavbar />
      {children}
      <TheCarousel />
    </ChakraProvider>
  );
}

export default Providers;
