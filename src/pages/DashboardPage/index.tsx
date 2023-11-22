import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logOut } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { LocalStorageKeys, URL } from "../../utils/constants";
import { Layout } from "../../layout";

const DashboardPage = () => {
  const userName = useSelector((state: RootState) => state.user.user?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem(LocalStorageKeys.logged_in_user);
    navigate(URL.LANDING_PAGE);
  };

  return (
    <Layout>
      <Box p={4}>
        <Text fontSize="xl">Welcome to your Dashboard, {userName}</Text>
        {/* Dashboard content goes here */}
        <Button colorScheme="red" mt={4} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Layout>
  );
};

export default DashboardPage;
