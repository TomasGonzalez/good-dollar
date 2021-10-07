import React from 'react';
import styled from 'styled-components/native';

import { StandarScreenSizes } from '../constants';
import CText from './CText';

const PressableContainer = styled.Pressable`
  background-color: ${(props) => props.theme.colors.default};
  height: 55px;
  max-width: ${parseInt(StandarScreenSizes.tablet)}px;
  width: 100%;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(CText)`
  color: ${(props) => props.theme.colors.light};
`;

const Button = ({
  label,
  onPress,
}: {
  label?: string;
  onPress: () => void;
}) => (
  <PressableContainer
    style={({ pressed }) => [
      {
        opacity: pressed ? 0.5 : 1, //This will support hover in the future
      },
    ]}
    onPress={onPress}
  >
    <ButtonText>{label}</ButtonText>
  </PressableContainer>
);

export default Button;
