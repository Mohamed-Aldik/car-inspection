import { Box, Stack, Text, Heading, Flex, Avatar } from "@chakra-ui/react";

interface AvatarComponentProps {
  name?: string;
  subName?: string;
  title?: string;
  subTitle?: string;
}

export const AvatarComponent = ({
  name,
  subName,
  title,
  subTitle,
}: AvatarComponentProps) => {
  return (
    <Box>
      <Stack
        flex={1}
        bg={"white"}
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: "white",
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Heading as={"h3"} fontSize={"xl"}>
          {title}
        </Heading>

        <Text textAlign={"center"} color={"gray.500"} fontSize={"sm"}>
          {subTitle}
        </Text>
      </Stack>

      <Flex align={"center"} mt={8} direction={"column"}>
        <Avatar mb={2} />

        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>

          <Text fontSize={"sm"} color={"gray.500"}>
            {subName}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};
