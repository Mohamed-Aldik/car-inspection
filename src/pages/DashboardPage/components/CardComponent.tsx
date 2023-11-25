import {
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  HStack,
  Tag,
  Box,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { ThreeDotsVerticalIcon } from '../icons/threeDotsVerticalIcon';
import { LazyLoadedImage } from '../../../components/LazyLoadedImage';

interface CardComponentProps {
  image: string;
  date: string;
  make: string;
  model: string;
  plate: string;
  color: string;
  vinNumber: string;
  year: string;
  status?: 'passed' | 'failed' | 'pending';
}

export const CardComponent = (props: CardComponentProps) => {
  const { image, date, make, model, plate, color, vinNumber, year, status } = props;

  return (
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Box alignSelf={'center'} position={'relative'} w={{ base: '100%', md: '30%' }} h={{ base: '100%', md: '250px' }}>
        <LazyLoadedImage objectFit='cover' w={'100%'} h={'100%'} src={image} alt='car inspection' />

        <Tag
          position={'absolute'}
          bottom={'10px'}
          left={'50%'}
          transform={'translateX(-50%)'}
          justifyContent={'center'}
          alignItems={'center'}
          w={'150px'}
          h={'40px'}
          border={'2px'}
          zIndex={'999'}>
          {plate}
        </Tag>
      </Box>

      <CardBody>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} align={'start'} justify={'space-between'}>
          <VStack align={'start'}>
            <Heading fontWeight={'semibold'} size='md'>
              <Text textTransform={'uppercase'} display={'inline'}>
                {make}
              </Text>
              {model}
            </Heading>

            <HStack>
              <Text fontWeight={'semibold'}>Color:</Text>
              <Text>{color}</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>Year:</Text>
              <Text>{year}</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>Date:</Text>
              <Text>{date}</Text>
            </HStack>

            <HStack>
              <Text fontWeight={'semibold'}>VIN number:</Text>
              <Text>{vinNumber}</Text>
            </HStack>
          </VStack>

          <HStack alignSelf={{ base: 'end', md: 'start' }} spacing={'10px'}>
            {status === 'passed' && (
              <Badge variant='solid' p={'5px 20px'} colorScheme='green'>
                PASSED
              </Badge>
            )}

            {status === 'failed' && (
              <Badge variant='solid' p={'5px 20px'} colorScheme='red'>
                FAILED
              </Badge>
            )}

            <Menu>
              <MenuButton as={IconButton} aria-label='Options' icon={<ThreeDotsVerticalIcon />} variant='ghost' />
              <MenuList>
                <MenuItem icon={<EditIcon />} command='soon'>
                  Edit
                </MenuItem>
                <MenuItem icon={<DeleteIcon />} command='soon'>
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
