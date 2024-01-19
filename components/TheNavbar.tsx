"use client";

import { allColors } from "@/ads";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Container,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  chakra,
  useDisclosure,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

export default function TheNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      w="100%"
      zIndex={200000}
      borderBottomColor={allColors.navText}
      position={"fixed"}
      id="main_nav"
      className="animate__animated animate__fadeInDown"
      bg={allColors.gradientBg}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={allColors.navText}
    >
      <Container maxW={"container.xl"}>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          className="custom-1"
          justify={"center"}
          width={"100%"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} color={allColors.navText} />
                ) : (
                  <HamburgerIcon w={5} h={5} color={allColors.navText} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Box
            display={"grid"}
            gridTemplateColumns="repeat(3, 1fr)"
            width={"100%"}
          >
            <Flex
              display={{ base: "none", md: "flex" }}
              justifyContent={"center"}
            >
              <DesktopNav />
            </Flex>
            <Image
              display={{ base: "none", md: "block" }}
              maxW="400px"
              maxH={"80px"}
              alt={"news image"}
              objectFit="cover"
              src={"/icons/rem_clear.png"}
              justifySelf={"center"}
            />
          </Box>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={allColors.navText}
                _hover={{
                  textDecoration: "none",
                  color: allColors.buttonText,
                }}
                whiteSpace={"nowrap"}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={allColors.gradientBg}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              ></PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={allColors.gradientBg}
      p={4}
      display={{ base: "flex", md: "none" }}
    >
      <Image
        display="block"
        margin={"0 auto"}
        maxW="400px"
        maxH={"80px"}
        alt={"news image"}
        objectFit="cover"
        src={"/icons/rem_clear.png"}
        mb={"10px"}
      />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} textAlign={"center"}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} fontSize="1.5rem" color={allColors.navText}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={allColors.navText}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                whiteSpace={"nowrap"}
                as="a"
                key={child.label}
                py={2}
                href={child.href}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Главная",
    href: "#",
  },
  {
    label: "О нас",
    href: "#section_about",
  },
  {
    label: "Преимущества",
    href: "#section_prime",
  },
  {
    label: "Контакты",
    href: "#section_contacts",
  },
];
