import {
  Box,
  HStack,
  IconButton,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Layout } from "../../layout";
import { usersDetails } from "./utils/usersDetails";
import { UsersDetailsComponent } from "./components/UsersDetailsComponent";
import { AddIcon } from "@chakra-ui/icons";
import { AddModalComponent } from "./components/AddModalComponent";

const DashboardPage = () => {
  return (
    <Layout>
      <Box
        textAlign={"center"}
        as={"section"}
        p={"30px"}
        w={"full"}
        minH={"calc(100vh - 140px)"}
      >
        <HStack
          p={"md"}
          align={"center"}
          justifyContent={"space-between"}
          mb={"30px"}
        >
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Dashboard
          </Text>
          <AddModalComponent
            trigger={
              <IconButton
                aria-label="add"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                bg={"red.500"}
                icon={<AddIcon color={"white"} width="25px" height="25px" />}
                _hover={{
                  bg: "red.400",
                }}
              />
            }
          />
        </HStack>

        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                alignContent={"center"}
                w={"full"}
                justifyContent={"center"}
                columns={{ base: 1, xl: 2 }}
                spacing={"20"}
              >
                {usersDetails.map((userDetails, index) => (
                  <UsersDetailsComponent key={index} {...userDetails} />
                ))}
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  );
};

export default DashboardPage;
