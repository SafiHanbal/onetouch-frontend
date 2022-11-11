import { Close } from '@mui/icons-material';
import { styled, Button, Typography } from '@mui/material';

export const UserBadgeContainer = styled(Button)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 5px 7px;
  cursor: default;
`;

export const Name = styled(Typography)`
  font-size: 14px;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  margin-left: 4px;
  height: 20px;
  width: 20px;
`;
