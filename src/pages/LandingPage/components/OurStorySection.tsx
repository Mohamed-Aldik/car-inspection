import { SimpleGrid, Image, Heading, StackDivider, Text, Container, VStack } from '@chakra-ui/react';
import { FeatureComponent } from './FeatureComponent';
import { IoAnalyticsSharpIcon } from '../icons/IoAnalyticsSharpIcon';
import { IoLogoBitcoinIcon } from '../icons/IoLogoBitcoinIcon';
import { IoSearchSharpIcon } from '../icons/IoSearchSharpIcon';
import image01 from '../../../assets/imgs/our-story.png';

export const OurStorySection = () => {
  return (
    <Container id='story' as={'section'} py={'48px'} maxW={'6xl'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={'30px'}>
        <VStack spacing={'30px'} align={'stretch'} justify={'center'}>
          <VStack align={{ base: 'center', md: 'stretch' }} spacing={'10px'}>
            <Heading>Our Story</Heading>

            <Text textAlign={{ base: 'center', md: 'left' }} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </Text>
          </VStack>

          <VStack spacing={'20px'} align={'stretch'} divider={<StackDivider borderColor={'gray.300'} />}>
            <FeatureComponent icon={<IoAnalyticsSharpIcon />} iconBg={'yellow.400'} text={'Business Planning'} />

            <FeatureComponent icon={<IoLogoBitcoinIcon />} iconBg={'green.400'} text={'Financial Planning'} />

            <FeatureComponent icon={<IoSearchSharpIcon />} iconBg={'purple.400'} text={'Market Analysis'} />
          </VStack>
        </VStack>

        <Image rounded={'md'} alt={'feature image'} src={image01} objectFit={'cover'} />
      </SimpleGrid>
    </Container>
  );
};
