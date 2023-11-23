import { ButtonGroup, HStack, IconButton, Text } from "@chakra-ui/react";
import { FacebookIcon } from "../../icons/facebookIcon";
import { LinkedinIcon } from "../../icons/linkedinIcon";
import { InstagramIcon } from "../../icons/instagramIcon";

export const Footer = () => {
  const social = {
    facebook: "https://www.facebook.com",
    linkedIn: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  };

  return (
    <HStack
      justify={"space-between"}
      align={"center"}
      px={4}
      h={"70px"}
      bg={"#272c34"}
    >
      <Text color={"white"} fontSize="sm">
        &copy; {new Date().getFullYear()} Footer Section
      </Text>
      <ButtonGroup variant="tertiary">
        <IconButton
          as={"a"}
          href={social.facebook}
          target="_blank"
          aria-label="Facebook"
          icon={<FacebookIcon boxSize={["15px", "20px"]} />}
        />

        <IconButton
          as={"a"}
          href={social.linkedIn}
          target="_blank"
          aria-label="LinkedIn"
          icon={<LinkedinIcon boxSize={["15px", "20px"]} />}
        />

        <IconButton
          as={"a"}
          href={social.instagram}
          target="_blank"
          aria-label="Instagram"
          icon={<InstagramIcon boxSize={["15px", "20px"]} />}
        />
      </ButtonGroup>
    </HStack>
  );
};
