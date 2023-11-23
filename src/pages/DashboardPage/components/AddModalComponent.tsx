import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "@chakra-ui/react";
import { cloneElement } from "react";

interface AddModalProps {
  trigger: JSX.Element;
}

export const AddModalComponent = ({ trigger }: AddModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip placement="left" label={"add"} closeOnClick={false} hasArrow>
        {cloneElement(trigger, { onClick: onOpen })}
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>

          <ModalCloseButton />

          <ModalBody>Body</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme="red">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
