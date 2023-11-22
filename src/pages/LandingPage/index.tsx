import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { URL } from "../../utils/constants";
import { Layout } from "../../layout";

const LandingPage = () => {
  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Text fontSize="xl">Welcome to the Car Inspection Portal</Text>
        <Button colorScheme="red" mt={4} as={Link} to={URL.REGISTER_PAGE}>
          Register
        </Button>
        <Button colorScheme="red" mt={4} ml={4} as={Link} to={URL.LOGIN_PAGE}>
          Login
        </Button>
      </Box>
    </Layout>
  );
};

export default LandingPage;
