import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { useRegisterFormHandler } from './hooks/use-register-form-handler';
import { Layout } from '../../layout';
import { URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/passwordInput';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const RegistrationPage = () => {
  useDocumentTitle('Car Inspection | Sign Up');

  const { errors, handleSubmit, register, onSubmit } = useRegisterFormHandler();

  return (
    <Layout>
      <Container
        as={'section'}
        py={'70px'}
        maxW={'6xl'}
        minH='calc(100vh - 140px)'
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <VStack align={{ base: 'stretch', md: 'center' }} w={'full'} spacing={'30px'}>
          <VStack spacing={'10px'}>
            <Heading>Sign Up</Heading>

            <Text textAlign={'center'} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Meeting scheduling Made easy
            </Text>
          </VStack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'2xl'}
            p={'10px'}
            w={{ base: '100%', md: '40%' }}>
            <Stack as={'form'} p={4} onSubmit={handleSubmit(onSubmit)} spacing={4} noValidate>
              <FormControl isInvalid={!!errors.name} isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' placeholder='Name' {...register('name')} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' placeholder='Email' {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.phoneNumber} isRequired>
                <FormLabel htmlFor='name'>Phone Number</FormLabel>
                <Input id='name' placeholder='Phone Number ' {...register('phoneNumber')} />
                <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password} isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <PasswordInput {...register('password')} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.confirmPassword} isRequired>
                <FormLabel htmlFor='ConfirmPassword'>Confirm Password</FormLabel>

                <PasswordInput {...register('confirmPassword')} />
                <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  type='submit'
                  bg={'red.500'}
                  color={'white'}
                  _hover={{
                    bg: 'red.400',
                  }}>
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?
                  <Button color={'blue.400'} as={Link} to={URL.LOGIN_PAGE} variant={'link'} ml={'5px'}>
                    Login
                  </Button>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </VStack>
      </Container>
    </Layout>
  );
};

export default RegistrationPage;
