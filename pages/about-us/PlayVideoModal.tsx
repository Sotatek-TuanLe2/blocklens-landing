import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

type PlayVideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PlayVideoModal = (props: PlayVideoModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent w={'100%'} height={'100%'} bg={'transparent'}>
        <ModalCloseButton color={'#fff'} />
        <ModalBody w={'100%'} h={'100%'} padding={0}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ld-B9DK7Mlc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PlayVideoModal;
