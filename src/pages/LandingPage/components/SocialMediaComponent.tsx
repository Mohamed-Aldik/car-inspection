import { IconButton, Stack, Tooltip } from '@chakra-ui/react';
import { ChatIcon } from '../icons/chatIcon';
import { FacebookIcon } from '../../../icons/facebookIcon';
import { InstagramIcon } from '../../../icons/instagramIcon';
import { LinkedinIcon } from '../../../icons/linkedinIcon';

export const SocialMediaComponent = () => {
  return (
    <>
      <Stack
        display={{ base: 'none', md: 'flex' }}
        position={'fixed'}
        top={'50%'}
        right='10px'
        transform={'translateY(-50%)'}
        direction='column'>
        <Tooltip placement='left' label={'Facebook'} closeOnClick={false} hasArrow>
          <IconButton
            aria-label='Facebook'
            variant='ghost'
            size='lg'
            fontSize='3xl'
            icon={<FacebookIcon fill={'red.500'} width='30px' height='30px' />}
            _hover={{
              bg: 'gray.200',
            }}
            isRound
          />
        </Tooltip>

        <Tooltip placement='left' label={'LinkedIn'} closeOnClick={false} hasArrow>
          <IconButton
            aria-label='Linkedin'
            variant='ghost'
            size='lg'
            fontSize='3xl'
            icon={<LinkedinIcon fill={'red.500'} width='30px' height='30px' />}
            _hover={{
              bg: 'gray.200',
            }}
            isRound
          />
        </Tooltip>

        <Tooltip placement='left' label={'Instagram'} closeOnClick={false} hasArrow>
          <IconButton
            aria-label='Instagram'
            variant='ghost'
            size='lg'
            fontSize='3xl'
            icon={<InstagramIcon fill={'red.500'} width='30px' height='30px' />}
            _hover={{
              bg: 'gray.200',
            }}
            isRound
          />
        </Tooltip>
      </Stack>

      <Tooltip label={'chat with us'} closeOnClick={false} hasArrow>
        <IconButton
          position={'fixed'}
          right='10px'
          bottom={{ base: '20px', md: '30px' }}
          zIndex={'9999'}
          aria-label='chat'
          variant='ghost'
          size='lg'
          fontSize='3xl'
          bg={'red.500'}
          icon={<ChatIcon />}
          _hover={{
            bg: 'red.300',
          }}
          isRound
        />
      </Tooltip>
    </>
  );
};
