import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View``;

const WordContainer = ({
  name,
  id,
}: {
  name: string;
  id: number;
}): ReactElement => (
  <MainContainer>
    <Text>{id}</Text>
    <Text>{name}</Text>
  </MainContainer>
);

export default WordContainer;
