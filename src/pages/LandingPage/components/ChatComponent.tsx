import { IconButton, Tooltip } from "@chakra-ui/react";
import { ChatIcon } from "../icons/chatIcon";

export const ChatComponent = () => {
  return (
    <Tooltip label={"chat"} closeOnClick={false} hasArrow>
      <IconButton
        position={"fixed"}
        right={{ base: "20px", md: "30px" }}
        bottom={{ base: "20px", md: "30px" }}
        zIndex={"9999"}
        aria-label="chat"
        variant="ghost"
        size="lg"
        fontSize="3xl"
        bg={"red.500"}
        icon={<ChatIcon />}
        _hover={{
          bg: "red.300",
        }}
        isRound
      />
    </Tooltip>
  );
};
