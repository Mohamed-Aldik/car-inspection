import { Container, Button, VStack, Heading, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { URL } from '../../../utils/constants';
import carImage from '../../../assets/imgs/inspection-car.png';
import { LazyLoadedImage } from '../../../components/LazyLoadedImage';

export const HeroSection = () => {
  return (
    <Container
      as={'section'}
      p={'70px'}
      maxW={'6xl'}
      minH='calc(100vh - 70px)'
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}>
      <VStack spacing={'30px'}>
        <VStack spacing={'30px'}>
          <Heading
            textAlign={'center'}
            fontWeight={'semibold'}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text> Meeting scheduling</Text>

            <Text as={'span'} color={'red.500'}>
              Made easy
            </Text>
          </Heading>

          <Text textAlign={'center'} fontSize={{ base: 'sm', sm: 'lg' }} color={'gray.500'} maxW={'3xl'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel neque doloremque facilis rem commodi aut
            dolorum velit, labore nam distinctio assumenda explicabo. Quos aliquam aspernatur laboriosam quisquam
            accusantium. Nisi, minus.
          </Text>
        </VStack>

        <HStack spacing={'20px'}>
          <Button as={Link} to={URL.REGISTER_PAGE} px={'30px'} colorScheme={'red'}>
            Get started
          </Button>

          <Button as={'a'} href='#story' px={'30px'}>
            Learn more
          </Button>
        </HStack>

        <LazyLoadedImage alt={'main image'} src={carImage} />
      </VStack>
    </Container>
  );
};
