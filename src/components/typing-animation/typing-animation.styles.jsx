import { styled, Box } from '@mui/material';
import Lottie from 'react-lottie';

export const AnimationContainer = styled(Box)`
  background-color: #a7e0af;
  width: fit-content;
  height: 34px;
  width: 50px;
  margin-top: 4px;
  border-radius: 5px;
  /* overflow: hidden; */
  position: relative;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 150px !important ;
    width: 120px !important;
  }
`;

export const CustomizedLottie = styled(Lottie)`
  position: absolute;
  height: 400px;
`;
