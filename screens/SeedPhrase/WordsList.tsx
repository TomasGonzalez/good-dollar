import React from 'react';
import styled from 'styled-components/native';
import WordContainer from '../../components/WordContainer';

import { seedPhraseData } from '../../constants';

const MainContainerView = styled.View``;

const WordsList = () => (
  <MainContainerView>
    {seedPhraseData.map((word) => (
      <WordContainer key={word.id} {...word} />
    ))}
  </MainContainerView>
);

export default WordsList;
