import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { URL } from "../../../utils/constants";
import carImage from "../../../assets/imgs/inspection-car.png";
import { FacebookIcon } from "../../../icons/facebookIcon";
import { InstagramIcon } from "../../../icons/instagramIcon";
import { LinkedinIcon } from "../../../icons/linkedinIcon";

export const HeroSection = () => {
  return (
    <Box as="main" position={"relative"} p={"30px"}>
      <Stack
        display={{ base: "none", md: "flex" }}
        position={"absolute"}
        top={"50%"}
        right={"1%"}
        transform={"translateY(-100%)"}
        direction="column"
      >
        <Tooltip label={"Facebook"} closeOnClick={false} hasArrow>
          <IconButton
            aria-label="Facebook"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<FacebookIcon fill={"red.500"} width="30px" height="30px" />}
            _hover={{
              bg: "gray.300",
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
          />
        </Tooltip>

        <Tooltip label={"LinkedIn"} closeOnClick={false} hasArrow>
          <IconButton
            aria-label="Linkedin"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<LinkedinIcon fill={"red.500"} width="30px" height="30px" />}
            _hover={{
              bg: "gray.300",
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
          />
        </Tooltip>

        <Tooltip label={"Instagram"} closeOnClick={false} hasArrow>
          <IconButton
            aria-label="Instagram"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={<InstagramIcon fill={"red.500"} width="30px" height="30px" />}
            _hover={{
              bg: "gray.300",
              color: useColorModeValue("white", "gray.700"),
            }}
            isRound
          />
        </Tooltip>
      </Stack>

      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text> Meeting scheduling</Text>

          <Text as={"span"} color={"red.500"}>
            made easy
          </Text>
        </Heading>

        <Text color={"gray.500"} maxW={"3xl"} px={"30px"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel neque
          doloremque facilis rem commodi aut dolorum velit, labore nam
          distinctio assumenda explicabo. Quos aliquam aspernatur laboriosam
          quisquam accusantium. Nisi, minus.
        </Text>

        <Stack spacing={6} direction={"row"}>
          <Button
            as={Link}
            to={URL.REGISTER_PAGE}
            px={6}
            colorScheme={"red"}
            bg={"red.500"}
            _hover={{ bg: "red.400" }}
          >
            Get started
          </Button>

          <Button px={6}>Learn more</Button>
        </Stack>

        <Flex w={"full"} justify={"center"}>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={carImage}
            fit={"cover"}
            align={"center"}
          />
        </Flex>
      </Stack>
    </Box>
  );
};
