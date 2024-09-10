// App.js

import React from 'react';
import ResponsiveDrawer from './components/Menu/ResponsiveDrawer';
import { 
  AppContainer, 
  StyledTypography, 
  StyledSecondaryTypography, 
  Overlay, DrawerContainer, 
  GlobalStyle, 
  StyledButton 
} from './styles/AppStyles';

const App = () => {
  const handleCtaClick = () => {
    console.log ('CTA clicked');
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Overlay />
        
        <DrawerContainer>
          <ResponsiveDrawer />
        </DrawerContainer>
        
        <StyledTypography variant='h1'>
          BeWorking!
        </StyledTypography>

        <StyledSecondaryTypography variant='h2'>
          Espacios de trabajo flexibles 
        </StyledSecondaryTypography>
        <StyledButton 
          variant='contained' 
          color='primary' 
          size='large' 
          onClick={handleCtaClick}
        >
          ¡Empieza ahora!
        </StyledButton>
      </AppContainer>
    </>
  );
}

export default App;
