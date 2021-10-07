import React, { ReactElement, useState } from 'react';
import { Alert, useWindowDimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking';
import { RFPercentage } from 'react-native-responsive-fontsize';

import WordsList from './WordsList';
import Header from '../../components/Header';
import CText from '../../components/CText';
import { StandarScreenSizes, theme } from '../../constants';
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

const InstructionText = styled(CText)`
  color: ${(props) => props.theme.colors.gray3};
  font-size: ${() => RFPercentage(2)};
  text-align: center;
`;

const ClickableText = styled(CText)`
  color: ${(props) => props.theme.colors.default};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.default};
  font-size: ${() => RFPercentage(2)};
`;

const PhassPhraseScreen = (): ReactElement => {
  const [copied, setCopied] = useState(false);
  const { width, height } = useWindowDimensions();

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
        <InstructionText>
          <CText style={{ fontWeight: 'bold' }}>
            please save your 12-word pass phrase
          </CText>
          {'\n'}
          and keep it in a secure location{'\n'} so you can recover your wallet
          anytime
        </InstructionText>
        <WordsList seedPhraseData={seedPhraseData} />
        <ClickableText onPress={CopySeedPhraseToClipboard}>
          Copy all to clipboard
          {copied && '*'}
        </ClickableText>
        <ClickableText onPress={SendPhraseToEmail}>
          Send me a backup email
        </ClickableText>
        <Button onPress={() => Alert.alert('Done!')} label={'DONE'} />
      </BodyContainerView>
    </MainContainerView>
  );
};

export default PhassPhraseScreen;
