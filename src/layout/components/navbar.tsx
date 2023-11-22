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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logOut } from "../../redux/slices/userSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { URL } from "../../utils/constants";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const userName = useSelector((state: RootState) => state.user.user?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = false;
  const isLoginOrRegesterPage =
    location.pathname.startsWith(URL.LOGIN_PAGE) ||
    location.pathname.startsWith(URL.REGISTER_PAGE);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("loggedInUser");
    navigate(URL.LANDING_PAGE);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text
            as={Link}
            to={URL.LANDING_PAGE}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {isLogin && (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>

                  <MenuList>
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>

                    <Center>
                      <Text p={"10px"}>{userName}</Text>
                    </Center>

                    <MenuDivider />

                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}

              {!isLogin && !isLoginOrRegesterPage && (
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={"flex-end"}
                  direction={"row"}
                  spacing={6}
                >
                  <Button
                    as={Link}
                    to={URL.LOGIN_PAGE}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                  >
                    Sign In
                  </Button>

                  <Button
                    as={Link}
                    to={URL.REGISTER_PAGE}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    colorScheme="red"
                    _hover={{
                      bg: "red.400",
                    }}
                  >
                    Sign Up
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
