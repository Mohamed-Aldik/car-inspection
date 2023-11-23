import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  Container,
} from "@chakra-ui/react";
import { useRegisterFormHandler } from "./hooks/use-register-form-handler";
import { Layout } from "../../layout";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const { errors, handleSubmit, register, onSubmit } = useRegisterFormHandler();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <Layout>
      <Container as={Flex} align={"center"} minH="calc(100vh - 140px)">
        <Stack flex={1} spacing={8} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>

            <Text fontSize={"lg"} color={"gray.600"}>
              Welcom to Sign up page
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
              <FormControl isInvalid={!!errors.name} isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" {...register("name")} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" {...register("email")} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.phoneNumber} isRequired>
                <FormLabel htmlFor="name">Phone Number</FormLabel>
                <Input id="name" {...register("phoneNumber")} />
                <FormErrorMessage>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
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

              <FormControl isInvalid={!!errors.confirmPassword} isRequired>
                <FormLabel htmlFor="ConfirmPassword">
                  Confirm Password
                </FormLabel>

                <InputGroup>
                  <Input
                    id="confirmPassword"
                    type={confirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setConfirmPassword(
                          (confirmPassword) => !confirmPassword
                        )
                      }
                    >
                      {confirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
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
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?
                  <Button
                    color={"blue.400"}
                    as={Link}
                    to={URL.LOGIN_PAGE}
                    variant={"link"}
                    ml={"5px"}
                  >
                    Login
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

export default RegistrationPage;
