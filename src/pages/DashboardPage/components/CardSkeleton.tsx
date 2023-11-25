import { Card, CardBody, HStack, Skeleton, VStack } from '@chakra-ui/react';

const CardSkeletonComponent = () => {
  return (
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Skeleton w={{ base: '100%', md: '30%' }} h={{ base: '250px', md: '250px' }} />

      <CardBody>
        <HStack justify={'space-between'}>
          <VStack align={'start'} spacing={'20px'}>
            <Skeleton w={'250px'} h={'30px'} />
            <Skeleton w={'100px'} h={'20px'} />
            <Skeleton w={'200px'} h={'20px'} />
            <Skeleton w={'120px'} h={'20px'} />
            <Skeleton w={'300px'} h={'20px'} />
          </VStack>
          <Skeleton alignSelf={'start'} w={'40px'} h={'40px'} />
        </HStack>
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
