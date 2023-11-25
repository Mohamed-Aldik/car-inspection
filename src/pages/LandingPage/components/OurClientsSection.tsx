import { Text, SimpleGrid, Heading, VStack, Container } from '@chakra-ui/react';
import { AvatarComponent } from './AvatarComponent';
import { usersInfo } from '../utils/user-info';

export const OurClientsSection = () => {
  return (
    <Container as={'section'} p={'70px'} maxW={'6xl'}>
      <VStack spacing={'30px'}>
        <VStack spacing={'10px'}>
          <Heading>Our Clients</Heading>

          <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit, ipsum dolor sit
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing='30px'>
          {usersInfo.map((user, index) => (
            <AvatarComponent
              key={index}
              name={user.name}
              subName={user.subName}
              title={user.title}
              subTitle={user.subTitle}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
