
import React from 'react';
import { Typography} from '@mui/material';
import ResponsiveDrawer from './Components/Menu/ResponsiveDrawer';

function App() {
  return (
    <div>
      <ResponsiveDrawer /> 
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h4">
          Welcome to the BeWorking new Website!
        </Typography>
      </div>
    </div>
  );
}

export default App;
