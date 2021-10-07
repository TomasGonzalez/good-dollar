import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import WordsList from './WordsList';
import Header from '../../components/Header';
import CText from '../../components/CText';

const MainContainerView = styled.View`
  flex: 1;
`;

const BodyContainerView = styled.View`
  flex: 1;
  padding: 16px;
`;

const InstructionText = styled(CText)`
  color: ${(props) => props.theme.colors.gray3};
  font-size: 16px;
  text-align: center;
`;

const InfoContainerView = styled.View`
  flex: 2;
  justify-content: space-between;
`;

const ButtonsContainerView = styled.View`
  flex: 1;
  justify-content: space-around;
`;

const PhassPhraseScreen = (): ReactElement => (
  <MainContainerView>
    <Header headerText={'BACKUP MY WALLET'} />
    <BodyContainerView>
      <InfoContainerView>
        <InstructionText>
          <CText style={{ fontWeight: 'bold' }}>
            please save your 12-word pass phrase
          </CText>
          {'\n'}
          and keep it in a secure location{'\n'} so you can recover your wallet
          anytime
        </InstructionText>
        <WordsList />
      </InfoContainerView>
      <ButtonsContainerView>
        <Text>buttons</Text>
        <Text>buttons</Text>
        <Text>buttons</Text>
      </ButtonsContainerView>
    </BodyContainerView>
  </MainContainerView>
);

export default PhassPhraseScreen;
