import { SimpleGrid, Stack, useColorModeValue, Heading, StackDivider, Flex, Text, Container } from '@chakra-ui/react';
import { FeatureComponent } from './FeatureComponent';
import { IoAnalyticsSharpIcon } from '../icons/IoAnalyticsSharpIcon';
import { IoLogoBitcoinIcon } from '../icons/IoLogoBitcoinIcon';
import { IoSearchSharpIcon } from '../icons/IoSearchSharpIcon';
import image from '../../../assets/imgs/our-story.png';
import { LazyLoadedImage } from '../../../components/LazyLoadedImage';

export const OurStorySection = () => {
  return (
    <Container
      id='story'
      as={'section'}
      maxW={'6xl'}
      p={'30px'}
      minH={'70vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} justifyContent={'center'}>
          <Heading> Our Story</Heading>

          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </Text>

          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
            <FeatureComponent
              icon={<IoAnalyticsSharpIcon />}
              iconBg={useColorModeValue('yellow.400', 'yellow.900')}
              text={'Business Planning'}
            />

            <FeatureComponent
              icon={<IoLogoBitcoinIcon />}
              iconBg={useColorModeValue('green.400', 'green.900')}
              text={'Financial Planning'}
            />

            <FeatureComponent
              icon={<IoSearchSharpIcon />}
              iconBg={useColorModeValue('purple.400', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>

        <Flex>
          <LazyLoadedImage rounded={'md'} alt={'feature image'} src={image} objectFit={'cover'} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
