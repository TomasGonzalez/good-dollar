import React, { ReactElement, useState } from 'react';
import { Alert, useWindowDimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';

import WordsList from './WordsList';
import Header from '../../components/Header';
import CText from '../../components/CText';
import { StandarScreenSizes } from '../../constants';
import Button from '../../components/Button';
import { seedPhraseData } from '../../constants';

const MainContainerView = styled.View`
  flex: 1;
`;

const BodyContainerView = styled.View<{ screenWidth: number }>`
  flex: 1;
  padding: 16px;
  justify-content: space-between;
  align-items: center;

  ${({ screenWidth }) =>
    screenWidth > parseInt(StandarScreenSizes.laptop) &&
    css`
      justify-content: space-around;
    `}
`;

const InstructionText = styled(CText)<{ screenWidth: number }>`
  color: ${(props) => props.theme.colors.gray3};
  font-size: 16px;
  text-align: center;

  ${({ screenWidth }) =>
    screenWidth > parseInt(StandarScreenSizes.laptop) &&
    css`
      font-size: 20px;
    `}
`;

const ClickableText = styled(CText)<{ screenWidth: number }>`
  color: ${(props) => props.theme.colors.default};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.default};
  font-size: 15px;

  ${({ screenWidth }) =>
    screenWidth > parseInt(StandarScreenSizes.laptop) &&
    css`
      font-size: 18px;
    `}
`;

const PhassPhraseScreen = (): ReactElement => {
  const [copied, setCopied] = useState(false);
  const { width } = useWindowDimensions();

  const CopySeedPhraseToClipboard = () => {
    Clipboard?.setString(
      seedPhraseData.map((wordObject) => wordObject.name).join(', ')
    );
    setCopied(true);
  };

  const SendPhraseToEmail = () => {
    Linking.openURL(
      `mailto:?subject=SeedPhrase&body=${seedPhraseData
        .map((wordObject) => wordObject.name)
        .join(', ')}`
    );
  };

  return (
    <MainContainerView>
      <Header headerText={'BACKUP MY WALLET'} />
      <BodyContainerView screenWidth={width}>
        <InstructionText screenWidth={width}>
          <CText style={{ fontWeight: 'bold' }}>
            please save your 12-word pass phrase
          </CText>
          {'\n'}
          and keep it in a secure location{'\n'} so you can recover your wallet
          anytime
        </InstructionText>
        <WordsList seedPhraseData={seedPhraseData} />
        <ClickableText screenWidth={width} onPress={CopySeedPhraseToClipboard}>
          Copy all to clipboard
          {copied && '*'}
        </ClickableText>
        <ClickableText screenWidth={width} onPress={SendPhraseToEmail}>
          Send me a backup email
        </ClickableText>
        <Button onPress={() => Alert.alert('Done!')} label={'DONE'} />
      </BodyContainerView>
    </MainContainerView>
  );
};

export default PhassPhraseScreen;
