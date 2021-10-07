import React, { ReactElement, memo } from 'react';
import { useWindowDimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

import { StandarScreenSizes, theme } from '../constants';
import CText from './CText';

const MainContainer = styled.View`
  flex-direction: row;
  margin: 4px;
  flex-basis: 45%;
  flex-shrink: 1;
  border: 1px solid ${(props) => props.theme.colors.default};
  border-radius: 80px;
`;

const NumberContainerView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.default};
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  align-items: center;
  justify-content: center;
`;

const TextContainerView = styled.View`
  flex: 5;
  justify-content: center;
  padding: 8px;
`;

const WordText = styled(CText)<{ screenWidth: number }>`
  ${({ screenWidth }) =>
    screenWidth > parseInt(StandarScreenSizes.laptop) &&
    css`
      font-size: 20px;
    `}
`;

const WordContainer = ({
  name,
  id,
}: {
  name: string;
  id: number;
}): ReactElement => {
  const { width } = useWindowDimensions();
  return (
    <MainContainer>
      <NumberContainerView>
        <CText style={{ color: theme.colors.light }}>{id}</CText>
      </NumberContainerView>
      <TextContainerView>
        <WordText screenWidth={width}>{name}</WordText>
      </TextContainerView>
    </MainContainer>
  );
};

export default memo(WordContainer);
