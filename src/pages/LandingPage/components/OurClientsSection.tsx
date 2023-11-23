import { Text, Stack, Heading, VStack } from "@chakra-ui/react";
import { AvatarComponent } from "./AvatarComponent";
import { usersInfo } from "../utils/user-info";

export const OurClientsSection = () => {
  return (
    <VStack
      spacing={"50px"}
      p={"30px"}
      as={"section"}
      minH={"70vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack spacing={0} align={"center"}>
        <Heading>Our Clients</Heading>

        <Text color={"gray.500"}>Lorem ipsum dolor sit, ipsum dolor sit</Text>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 4, lg: 10 }}
        justifyContent={"center"}
        maxW={"6xl"}
      >
        {usersInfo.map((user) => (
          <AvatarComponent
            name={user.name}
            subName={user.subName}
            title={user.title}
            subTitle={user.subTitle}
          />
        ))}
      </Stack>
    </VStack>
  );
};
