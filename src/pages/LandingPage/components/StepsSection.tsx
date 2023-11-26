import { Container, Heading, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { CardComponent } from './CardComponent';
import { CalendarIcon, CheckIcon, PhoneIcon, RepeatClockIcon, StarIcon, TimeIcon } from '@chakra-ui/icons';

export const StepsSection = () => {
  return (
    <Container as={'section'} py={'48px'} maxW={'6xl'} mt={{ base: '-100px', md: '-140px' }}>
      <VStack spacing={'30px'}>
        <VStack spacing={'10px'}>
          <Heading>Short heading</Heading>

          <Text textAlign={'center'} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Whether you are buying, selling or underwriting Carantee makes your business better
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing='30px' w={'full'}>
          <CardComponent
            heading={'Heading'}
            icon={<Icon as={StarIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />

          <CardComponent
            heading={'Heading'}
            icon={<Icon as={PhoneIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />

          <CardComponent
            heading={'Heading'}
            icon={<Icon as={CalendarIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />

          <CardComponent
            heading={'Heading'}
            icon={<Icon as={TimeIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />

          <CardComponent
            heading={'Heading'}
            icon={<Icon as={CheckIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />

          <CardComponent
            heading={'Heading'}
            icon={<Icon as={RepeatClockIcon} w={'35px'} h={'35px'} color={'red.500'} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
