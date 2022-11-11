import { Modal } from '@mui/material';

import {
  ModalContainer,
  Name,
  CustomizedAvatar,
  Email,
  CloseButton,
} from './user-modal.styles';

const UserModal = ({ isModalOpen, handleCloseModal, user }) => {
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <ModalContainer>
        <Name>{user?.name}</Name>
        <CustomizedAvatar src={user?.image} />
        <Email>email: {user?.email}</Email>
        <CloseButton variant="contained" onClick={handleCloseModal}>
          Close
        </CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserModal;
