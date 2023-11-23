import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardComponent } from "./CardComponent";
import {
  CalendarIcon,
  CheckIcon,
  PhoneIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";

export const StepsSection = () => {
  return (
    <Box
      as={"section"}
      p={"30px"}
      minH={"70vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Short heading
          </Heading>

          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Whether you are buying, selling or underwriting Carantee makes your
            business better
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <CardComponent
              heading={"Heading"}
              icon={<Icon as={StarIcon} w={10} h={10} color={"red.400"} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />

            <CardComponent
              heading={"Heading"}
              icon={<Icon as={PhoneIcon} w={10} h={10} color={"red.400"} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />

            <CardComponent
              heading={"Heading"}
              icon={<Icon as={CalendarIcon} w={10} h={10} color={"red.400"} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />

            <CardComponent
              heading={"Heading"}
              icon={<Icon as={TimeIcon} w={10} h={10} color={"red.400"} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />

            <CardComponent
              heading={"Heading"}
              icon={<Icon as={CheckIcon} w={10} h={10} color={"red.400"} />}
              description={
                "Lorem ipsum dolor sit amet catetur, adipisicing elit."
              }
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
