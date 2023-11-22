import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useLoginFormHandler } from "./hooks/useLoginFormHandler";
import { Layout } from "../../layout";

const LoginPage = () => {
  const { errors, handleSubmit, register, onSubmit } = useLoginFormHandler();

  return (
    <Layout>
      <Box p={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" {...register("password")} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button mt={4} colorScheme="red" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default LoginPage;
