import React from "react";
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

function CreateAccountModal({
  isCreateAccountModalOpen,
  onCreateAccountModalClose,
  isError,
  handleInputEmailChange,
  input,
}) {
  return (
    <Modal
      isOpen={isCreateAccountModalOpen}
      onClose={onCreateAccountModalClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isError} isRequired>
            <FormLabel>Email adress</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={handleInputEmailChange}
              width="400px"
            />
            {!isError ? (
              <FormHelperText>
                Enter the email address you would like to register an account
                with.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter p="10px">
          <Flex alignItems="center" justifyContent="space-around" width="422px">
            <Button width="185px" height="40px" colorScheme="blue">
              Save
            </Button>
            <Button
              width="185px"
              height="40px"
              onClick={onCreateAccountModalClose}
              colorScheme="blackAlpha"
            >
              Cancel
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateAccountModal;