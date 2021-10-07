import React from 'react';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import SeedPhraseScreen from './screens/SeedPhrase/index';
import theme from './theme';
import useLoadFonts from './hooks/useLoadFonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
  }
}

const MainSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.light};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`;

export default function App() {
  const fontsLoaded = useLoadFonts();
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <MainSafeAreaView>
      <ThemeProvider theme={theme}>
        <SeedPhraseScreen />
      </ThemeProvider>
    </MainSafeAreaView>
  );
}
