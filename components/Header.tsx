import React from 'react';
import styled from 'styled-components/native';

import CText from './CText';

const HeaderContainerView = styled.View`
  height: 55px;
  background-color: ${(props) => props.theme.colors.default};
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(CText)`
  color: ${(props) => props.theme.colors.light};
`;

const Header = ({ headerText }: { headerText: string }) => (
  <HeaderContainerView>
    <HeaderText>{headerText}</HeaderText>
  </HeaderContainerView>
);

export default Header;
