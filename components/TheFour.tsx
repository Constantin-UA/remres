"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import { IoMdContacts, IoMdBusiness, IoMdLaptop } from "react-icons/io";
import { allColors } from "@/ads";

export default function TheFour({ lang }: any) {
  const features = [
    {
      title: lang.four.content[0].title,
      text: lang.four.content[0].subtitle,
      icon: IoMdLaptop,
    },
    {
      title: lang.four.content[1].title,
      text: lang.four.content[1].subtitle,
      icon: IoMdBusiness,
    },
    {
      title: lang.four.content[2].title,
      text: lang.four.content[2].subtitle,
      icon: IoMdContacts,
    },
  ];
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
          {lang.four.title}
        </Heading>
      </Center>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature, idx) => (
            <HStack key={idx} align={"top"}>
              <Box px={{ base: 2, sm: 0 }}>
                <VStack>
                  <Icon
                    boxSize={10}
                    color={allColors.navText}
                    as={feature.icon}
                  />
                </VStack>
              </Box>
              <VStack align={"start"}>
                <Text
                  fontSize="1.5rem"
                  color={allColors.navText}
                  fontWeight={600}
                >
                  {feature.title}
                </Text>
                <Text
                  textShadow={allColors.shadowText}
                  color={allColors.subTitle}
                >
                  {feature.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
