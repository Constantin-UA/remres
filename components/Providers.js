"use client";

import { ChakraProvider } from "@chakra-ui/react";
import TheCarousel from "@/components/TheCarousel";

function Providers({ children }) {
  return (
    <ChakraProvider>
      {children}
      <TheCarousel />
    </ChakraProvider>
  );
}

export default Providers;
