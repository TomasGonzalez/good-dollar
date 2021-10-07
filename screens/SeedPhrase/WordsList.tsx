import React from 'react';
import styled from 'styled-components/native';

import WordContainer from '../../components/WordContainer';
import { SeedPhraseDataType } from '../../types';

const MainContainerView = styled.View`
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;
`;

const WordsList = ({
  seedPhraseData,
}: {
  seedPhraseData: SeedPhraseDataType;
}) => (
  <MainContainerView>
    {seedPhraseData.map((word) => (
      <WordContainer key={word.id} {...word} />
    ))}
  </MainContainerView>
);

export default WordsList;
