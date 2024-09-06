
import React from 'react';
import ResponsiveDrawer from './components/Menu/ResponsiveDrawer';
import {AppContainer, StyledTypography, Overlay, DrawerContainer} from './styles/AppStyles';


function App() {
  return (
    <AppContainer>
      <Overlay />
      <DrawerContainer>
        <ResponsiveDrawer />
      </DrawerContainer>
      <StyledTypography variant='h1' >
        Trabaja desde donde quieras
        y cuando quieras!
        </StyledTypography> 
    </AppContainer>
  );
}

export default App;
