import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRegisterFormHandler } from "./hooks/use-register-form-handler";

const RegistrationPage = () => {
  const { errors, handleSubmit, register, onSubmit } = useRegisterFormHandler();

  return (
    <Box as={"form"} p={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email} mt={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" {...register("email")} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.phoneNumber} mt={4}>
        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
        <Input id="phoneNumber" {...register("phoneNumber")} />
        <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password} mt={4}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" {...register("password")} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword} mt={4}>
        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="red" type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegistrationPage;
