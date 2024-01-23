"use client";
import {
  Container,
  Flex,
  Image,
  Heading,
  Center,
  SimpleGrid,
  HStack,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import { allColors, texts } from "@/ads";

import { ThePartnersLogoCarousel } from "@/components/ThePartnersLogoCarousel";

const ThePartners = () => {
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
          textAlign={"center"}
        >
          {texts.ukr.partners.title}
        </Heading>
      </Center>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1 }} spacing={10}>
          {texts.ukr.partners.partnersList.map((partner, idx) => (
            <HStack key={idx} align={"top"}>
              <Box px={{ base: 2, sm: 0 }}></Box>
              <VStack align={"start"}>
                <Text
                  as={"a"}
                  fontSize="1.5rem"
                  color={allColors.navText}
                  fontWeight={600}
                  href={partner.link}
                  target="_blank"
                >
                  {partner.title}
                </Text>
                <Text
                  textShadow={allColors.shadowText}
                  color={allColors.subTitle}
                >
                  {partner.description}
                </Text>
              </VStack>
            </HStack>
          ))}
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ThePartnersLogoCarousel
              partners={texts.ukr.partners.partnersList}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ThePartners;
