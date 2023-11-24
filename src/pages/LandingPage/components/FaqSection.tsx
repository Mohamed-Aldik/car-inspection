import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Heading,
  Image,
  HStack,
  Box,
  VStack,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import image from "../../../assets/imgs/faq.png";

export const FaqSection = () => {
  return (
    <Container
      as={"section"}
      maxW={"6xl"}
      p={"30px"}
      minH={"70vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <HStack w={"full"} gap={"30px"}>
        <Box flex={1} display={{ base: "none", md: "flex" }}>
          <Image alt={"feature image"} src={image} />
        </Box>

        <VStack flex={1} align={"stretch"} boxShadow={"2xl"} rounded={"lg"}>
          <Heading
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign={"center"}
            my={5}
          >
            FAQ
          </Heading>
          <Accordion allowMultiple rounded="lg">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">This is the Question?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis incidunt ratione harum amet, consequuntur
                  exercitationem aspernatur aliquam unde repellendus nostrum
                  aperiam nam? Labore ipsam asperiores quia nobis, minima
                  laborum ullam.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">This is the Question?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  vitae consectetur necessitatibus vero maiores a quidem atque
                  mollitia, sapiente cum eveniet amet eum repudiandae
                  perferendis officia velit quod tempore facilis!
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">This is the Question?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  fuga ullam iure beatae delectus dolorum sit cumque, mollitia
                  nobis. Odit distinctio illo laborum dolorem provident
                  consectetur quibusdam quam at soluta!
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </HStack>
    </Container>
  );
};
