"use client";

import {
  Stack,
  Container,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { allColors } from "@/ads";

export default function TheThird({ lang }) {
  return (
    <Box
      py={"10"}
      position={"relative"}
      id="service"
      bg={allColors.backgroundWhite}
      minH="100vh"
    >
      <Container maxW={"7xl"} zIndex={1} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 40 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                mb={5}
                textAlign={"center"}
                color={allColors.mainTitleB}
                textTransform={"uppercase"}
                textShadow={allColors.shadowText}
              >
                {lang.third.title}
              </Heading>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {lang.third.content.map((elem, idx) => (
                <Box key={idx}>
                  <Image
                    alt={"Login Image"}
                    objectFit={"contain"}
                    src={"/icons/rem_clear.png"}
                    h={"100px"}
                    w={"200px"}
                  />
                  <Box fontSize={"xl"} color={allColors.mainTitleB}>
                    <Stack>
                      <StatsText>{elem.title}</StatsText>
                      <Text textShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                        {elem.subtitle}
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text
    textShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    as={"span"}
    fontWeight={700}
    color={allColors.mainTitleB}
  >
    {children}
  </Text>
);
