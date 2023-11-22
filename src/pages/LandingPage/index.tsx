import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl">Welcome to the Car Inspection Portal</Text>
      <Button colorScheme="red" mt={4} as={Link} to="/register">
        Register
      </Button>
      <Button colorScheme="red" mt={4} ml={4} as={Link} to="/login">
        Login
      </Button>
    </Box>
  );
};

export default LandingPage;
