import { ReactNode } from "react";
import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const FooterSection = () => {
  return (
    <Box as="section" bg={"#272c34"} color={"white"}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} p={"30px"}>
        <Stack align={"flex-start"}>
          <ListHeader>Company</ListHeader>
          <Box as="a" href={"#"}>
            About Us
          </Box>
          <Box as="a" href={"#"}>
            Blog
          </Box>
          <Box as="a" href={"#"}>
            Careers
          </Box>
          <Box as="a" href={"#"}>
            Contact Us
          </Box>
        </Stack>

        <Stack align={"flex-start"}>
          <ListHeader>Support</ListHeader>
          <Box as="a" href={"#"}>
            Help Center
          </Box>
          <Box as="a" href={"#"}>
            Safety Center
          </Box>
          <Box as="a" href={"#"}>
            Community Guidelines
          </Box>
        </Stack>

        <Stack align={"flex-start"}>
          <ListHeader>Legal</ListHeader>
          <Box as="a" href={"#"}>
            Cookies Policy
          </Box>
          <Box as="a" href={"#"}>
            Privacy Policy
          </Box>
          <Box as="a" href={"#"}>
            Terms of Service
          </Box>
          <Box as="a" href={"#"}>
            Law Enforcement
          </Box>
        </Stack>

        <Stack align={"flex-start"}>
          <ListHeader>Stay up to date</ListHeader>
          <Stack direction={"row"}>
            <Input
              placeholder={"Your email address"}
              bg={"white"}
              color={"black"}
              border={0}
              _focus={{
                bg: "white",
              }}
            />

            <IconButton
              bg={useColorModeValue("red.500", "red.800")}
              color={useColorModeValue("white", "gray.800")}
              _hover={{
                bg: "red.400",
              }}
              aria-label="Subscribe"
              icon={<EmailIcon />}
            />
          </Stack>
        </Stack>
      </SimpleGrid>

      <Flex
        color={"red.500"}
        fontSize={"lg"}
        fontWeight={"semibold"}
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        Logo
      </Flex>
    </Box>
  );
};
