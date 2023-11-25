import { AddIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Input, Box, VStack, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { LazyLoadedImage } from '../../../components/LazyLoadedImage';

interface ImageUploaderProps {
  setValue: any;
  errMsg?: string;
}

export const ImageUploader = ({ setValue, errMsg }: ImageUploaderProps) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();

    reader.onload = (e: any) => {
      // Get the base64-encoded string
      const base64String = e.target.result;

      setValue('image', base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <VStack>
      <FormControl isInvalid={!!errMsg} isRequired>
        <VStack mb={'10px'}>
          <FormLabel>Car picture</FormLabel>

          <Input type='file' id='image' accept='image/*' display='none' onChange={handleImageChange} />

          <Box
            as='label'
            htmlFor='image'
            p={'10px'}
            cursor='pointer'
            display='inline-block'
            borderRadius={'base'}
            bg={'red.500'}
            _hover={{ bg: 'red.400' }}>
            <AddIcon color={'white'} w={'25px'} h={'25px'} />
          </Box>

          <FormErrorMessage>{errMsg}</FormErrorMessage>
        </VStack>
      </FormControl>

      {selectedImage && (
        <Box mt={4}>
          <LazyLoadedImage src={URL.createObjectURL(selectedImage)} alt='car' maxW={'350px'} />
        </Box>
      )}
    </VStack>
  );
};
