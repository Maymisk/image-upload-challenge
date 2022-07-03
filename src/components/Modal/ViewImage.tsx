import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  ModalHeader,
  ModalCloseButton,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalBody bg="pGray.800" p={0}>
          <Image
            w="100%"
            src={imgUrl}
            maxW={[300, 500, 900]}
            maxH={[350, 450, 600]}
          />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          justifyContent={'flex-start'}
          borderBottomRadius="5px"
        >
          <Link color="pGray.50" fontSize="0.875rem" isExternal href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
