
import React from 'react';
import { Typography} from '@mui/material';
import ResponsiveDrawer from './components/Menu/ResponsiveDrawer';
import {AppContainer} from './styles/AppStyles';

function App() {
  return (
    <div>
      <ResponsiveDrawer /> 
      <AppContainer>
        <Typography variant='h4' >
          Welcome to the BeWorking new Website!
        </Typography>
      </AppContainer>
    </div>
  );
}

export default App;
