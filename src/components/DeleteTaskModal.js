import React from "react";
import {
  Text,
  Image,
  Heading,
  Button,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Modal,
  Container,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteTaskModal({
  isClickDeleteTaskButton,
  deleteTask,
  closeModal,
  isDeletedTask,
}) {
  function handleTaskDelete(id) {
    deleteTask(id);
    closeModal(false);
  }

  return (
    <Modal
      variant='deleteTaskModal'
      isOpen={isClickDeleteTaskButton}
      onClose={() => closeModal(false)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="modalHeaderContentHeading">Delete task</Heading>
        </ModalHeader>
        <ModalBody>
          <Container variant="deleteTaskModalContentContainer">
            <Text variant="deleteTaskModalContentContainerText">
              Are you sure about deleting this task?
            </Text>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<DeleteIcon fontSize="larger" />}
              onClick={() => handleTaskDelete(isDeletedTask.id)}
              variant="deleteTaskButton"
            >
              Delete
            </Button>
            <Button
              variant="closeModalButton"
              onClick={() => closeModal(false)}
            >
              <Image src="/assets/Vector_s.svg" alt="close-button" mr="10px" />
              Close
            </Button>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteTaskModal;
