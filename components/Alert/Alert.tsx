import React from 'react';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonGroup,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Text,
} from '@gluestack-ui/themed';

type AlertProps = {
  title: string;
  message: string;
  buttonActionTitle: string;
  showDialog: boolean;
  onAction: () => void;
  onClose: () => void;
};

export const Alert = ({
  title,
  message,
  buttonActionTitle,
  showDialog = false,
  onClose,
  onAction,
}: AlertProps) => {
  return (
    <AlertDialog isOpen={showDialog} onClose={onClose}>
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">{title}</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">{message}</Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button variant="outline" action="secondary" onPress={onClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button bg="$error600" action="negative" onPress={onAction}>
              <ButtonText>{buttonActionTitle}</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
