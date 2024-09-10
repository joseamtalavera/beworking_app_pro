// ResponsiveDrawer.js

import React, { useState } from 'react';
import { List, ListItem, useMediaQuery, useTheme, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
    StyledAppBar,
    StyledToolbar,
    LogoImage,
    StyledIconButton,
    DesktopMenu,
    MenuItem,
    LoginButton,
    LoginButtonText,
    StyledDrawer,
    StyledListItemText
} from '../../styles/ResponsiveDrawerStyles';

const menuItems = ['Coworking', 'Aulas', 'Oficina Digital'];

const ResponsiveDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = (() => {
        setMobileOpen(!mobileOpen);
    },[]);

    const drawer = (
        <div data-testid="drawer-content"> 
            <List>
                {menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <StyledListItemText primary={text}/>
                    </ListItem>
                ))}
                <ListItem button key="Login" component={Link} to="/login">
                    <StyledListItemText primary="Login"/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div data-testid="responsive-drawer">
            <StyledAppBar position="static" elevation={0}>
                <StyledToolbar >
                <Box>
                    <Link to="/">
                        <LogoImage src="logo_aula_cowork_blanco-e1647607454934.png" alt="Logo"/>
                    </Link>
                </Box>
                    {isMobile ? (
                        <StyledIconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            style={{ color: 'orange' }}
                            data-testid="menu-button"
                        >
                        <MenuIcon />
                        </StyledIconButton>
                    ) : (
                        <DesktopMenu >
                            {menuItems.map((text, index) => (
                                <MenuItem key={index} >
                                    {text}
                                </MenuItem>
                            ))}
                           <LoginButton 
                                variant="contained" 
                                component={Link} 
                                to="/login"    
                            >
                                <LoginButtonText >
                                    Login
                                </LoginButtonText>  
                            </LoginButton>
                        </DesktopMenu>
                    )}
                </StyledToolbar>
                {isMobile && ( 
                    <StyledDrawer
                        variant="temporary"
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }} 
                    >
                        {drawer}
                    </StyledDrawer>
                )}
            </StyledAppBar>
        </div>
    );
}

export default ResponsiveDrawer;