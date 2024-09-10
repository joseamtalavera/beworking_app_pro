import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, ListItemText} from '@mui/material';

export const StyledAppBar = styled(AppBar)`
    background: transparent !important;
`;

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

export const LogoImage = styled.img`
    max-width: 125px;
    max-height: 75px;
    margin-left: 50px;
    margin-top: 15px;
`;

export const StyledIconButton = styled(IconButton)`
    color: orange;
`;

export const DesktopMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`;

export const MenuItem = styled(Typography)`
    color: white;
    margin-right: 30px !important;
    margin-top: 10px !important;
`;

export const LoginButton = styled(Button)`
    margin-top: -5px;
    width: 100px;
    background-color: orange;
    text-transform: none;
    border-radius: 20px !important;
    &.MuiButton-root {
    text-transform: none;
  }
`;

export const LoginButtonText = styled(Typography)`
    color: white;
`;

export const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        width: 30%;
        background: #FFA500;
        color: white;
    };
`;

export const StyledListItemText = styled(ListItemText)`
    color: white;
`;
