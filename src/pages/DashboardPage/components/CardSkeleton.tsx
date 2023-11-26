import { Box, Card, CardBody, Skeleton, VStack } from '@chakra-ui/react';

const CardSkeletonComponent = () => {
  return (
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Skeleton w={{ base: '100%', md: '30%' }} h={{ base: '250px', md: '250px' }} />

      <CardBody>
        <Box position={'relative'}>
          <VStack align={'start'} spacing={'20px'}>
            <Skeleton w={'210px'} h={'30px'} />
            <Skeleton w={'100px'} h={'20px'} />
            <Skeleton w={'170px'} h={'20px'} />
            <Skeleton w={'120px'} h={'20px'} />
            <Skeleton w={'250px'} h={'20px'} />
          </VStack>
          <Skeleton position={'absolute'} top={'0'} right={'-10px'} w={'30px'} h={'30px'} />
        </Box>
      </CardBody>
    </Card>
  );
};

export const CardSkeleton = () => {
  return (
    <>
      <CardSkeletonComponent />
      <CardSkeletonComponent />
    </>
  );
};
