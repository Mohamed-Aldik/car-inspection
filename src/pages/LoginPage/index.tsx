import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useLoginFormHandler } from './hooks/useLoginFormHandler';
import { Layout } from '../../layout';
import { URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { PasswordInput } from '../../components/passwordInput';

const LoginPage = () => {
  const { errors, handleSubmit, register, onSubmit } = useLoginFormHandler();

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
            <Heading>Sign In</Heading>

            <Text textAlign={'center'} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Meeting scheduling Made easy
            </Text>
          </VStack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'2xl'}
            p={'10px'}
            w={{ base: '100%', md: '50%' }}>
            <Stack as={'form'} p={4} onSubmit={handleSubmit(onSubmit)} spacing={4} noValidate>
              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' placeholder='Email' {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password} isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <PasswordInput id='password' {...register('password')} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
                  Login
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account?
                  <Button color={'blue.400'} as={Link} to={URL.REGISTER_PAGE} variant={'link'} ml={'5px'}>
                    Register
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

export default LoginPage;
