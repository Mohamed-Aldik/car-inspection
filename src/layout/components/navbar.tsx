import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Text,
  Image,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { logOut } from '../../redux/slices/userSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LocalStorageKeys, URL } from '../../utils/constants';
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';

export const Navbar = () => {
  const userName = useSelector((state: RootState) => state.user.user?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useIsLoggedIn();
  const isLoginOrRegesterPage =
    location.pathname.startsWith(URL.LOGIN_PAGE) || location.pathname.startsWith(URL.REGISTER_PAGE);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem(LocalStorageKeys.logged_in_user);
    navigate(URL.LANDING_PAGE);
  };

  return (
    <>
      <Box as={'nav'} bg={'#272c34'} px={4}>
        <Flex h={'70px'} alignItems={'center'} justifyContent={'space-between'}>
          <Box as={Link} to={URL.LANDING_PAGE}>
            <Image
              src='https://www.emiratesauction.com/assets/latestHome/header/EnglishLogo.svg'
              alt='EA-logo'
              loading='lazy'
              rel='preload'
            />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {isLoggedIn && location.pathname == '/' && (
                <Button as={Link} to={URL.DASHBOARD_PAGE} fontWeight={400} color={'white'} variant={'link'}>
                  Dashboard
                </Button>
              )}

              {isLoggedIn && (
                <Menu>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <Avatar size={'sm'} bg='red.500' />
                  </MenuButton>

                  <MenuList>
                    <Center>
                      <Avatar size={'xl'} bg='red.500' />
                    </Center>

                    <Center>
                      <Text textTransform={'capitalize'} p={'10px'}>
                        {userName}
                      </Text>
                    </Center>

                    <MenuDivider />

                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}

              {!isLoggedIn && !isLoginOrRegesterPage && (
                <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                  <Button as={Link} to={URL.LOGIN_PAGE} fontWeight={400} color={'white'} variant={'link'}>
                    Login
                  </Button>

                  <Button
                    as={Link}
                    to={URL.REGISTER_PAGE}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    colorScheme='red'
                    _hover={{
                      bg: 'red.400',
                    }}>
                    Register
                  </Button>
                </Stack>
              )}

              {isLoginOrRegesterPage && (
                <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                  <Button as={Link} to={URL.LANDING_PAGE} fontWeight={400} variant={'link'} color={'white'}>
                    Home
                  </Button>
                </Stack>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
