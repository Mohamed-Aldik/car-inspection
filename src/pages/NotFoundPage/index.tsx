import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Layout } from "../../layout";
import { Link } from "react-router-dom";
import { URL } from "../../utils/constants";

const NotFoundPage = () => {
  return (
    <Layout>
      <Container
        as={VStack}
        align={"center"}
        justify={"center"}
        minH="calc(100vh - 140px)"
      >
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, red.400, red.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <Button
          w={"sm"}
          as={Link}
          to={URL.LANDING_PAGE}
          colorScheme="red"
          bgGradient="linear(to-r, red.400, red.500, red.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
