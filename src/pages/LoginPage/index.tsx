import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useLoginFormHandler } from "./hooks/useLoginFormHandler";
import { Layout } from "../../layout";
import { URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = () => {
  const { errors, handleSubmit, register, onSubmit } = useLoginFormHandler();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <Container as={Flex} align={"center"} minH="calc(100vh - 140px)">
        <Stack flex={1} spacing={8} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign in
            </Heading>

            <Text fontSize={"lg"} color={"gray.600"}>
              Log in to your account
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack
              as={"form"}
              p={4}
              onSubmit={handleSubmit(onSubmit)}
              spacing={4}
            >
              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" {...register("email")} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password} isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>

                <InputGroup>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  bg={"red.500"}
                  color={"white"}
                  _hover={{
                    bg: "red.400",
                  }}
                >
                  Login
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?
                  <Button
                    color={"blue.400"}
                    as={Link}
                    to={URL.REGISTER_PAGE}
                    variant={"link"}
                    ml={"5px"}
                  >
                    Register
                  </Button>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default LoginPage;
