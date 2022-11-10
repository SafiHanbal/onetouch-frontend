import { Modal } from '@mui/material';

import {
  ModalContainer,
  Name,
  CustomizedAvatar,
  Email,
  CloseButton,
} from './user-modal.styles';

const UserModal = ({ isModalOpen, handleCloseModal, user }) => {
  const { name, image, email } = user;
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <ModalContainer>
        <Name>{name}</Name>
        <CustomizedAvatar src={image} />
        <Email>email: {email}</Email>
        <CloseButton variant="contained" onClick={handleCloseModal}>
          Close
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserModal;
