import styled from 'styled-components';
import { Typography} from '@mui/material';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    background: url('/back.jpg') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    
    `;

    export const StyledTypography = styled(Typography)`
        color: white;
        z-index: 2; 
        position: relative;
        text-align: center;
    `;

    export const Overlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
    `;

    export const DrawerContainer = styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 3;
    `;