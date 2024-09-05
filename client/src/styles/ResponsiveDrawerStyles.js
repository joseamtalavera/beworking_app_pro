import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Box, ListItemText} from '@mui/material';

export const StyledAppBar = styled(AppBar)`
    background: white !important;
`;

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

export const LogoImage = styled.img`
    max-width: 125px;
    max-height: 75px;
    margin-left: 50px;
    margin-top: 0px;
`;

export const StyeledIconButton = styled(IconButton)`
    color: orange;
`;

export const DesktopMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`;

export const MenuItem = styled(Typography)`
    color: orange;
    margin-right: 30px;
`;

export const LoginButton = styled(Button)`
    margin-top: -5px;
    width: 100px;
    background-color: orange;
    text-transform: none;
    border-radius: 20px;
`;

export const LoginButtonText = styled(Typography)`
    color: white;
`;

export const DrawerPaper = styled(Drawer)`
    .MuiDrawer-paper {
        width: 30%;
        background: #FFA500;
        color: white;
    };
`;

export const StyledListItemText = styled(ListItemText)`
    color: white;
`;
