import animationData from '../../assets/typing-animation.json';

import {
  AnimationContainer,
  CustomizedLottie,
} from './typing-animation.styles';

const options = {
  animationData,
};

const TypingAnimation = () => {
  return (
    <AnimationContainer>
      <CustomizedLottie options={options} />
    </AnimationContainer>
  );
};

export default TypingAnimation;
