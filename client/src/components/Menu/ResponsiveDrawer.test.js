// ResponsiveDrawer.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResponsiveDrawer from './ResponsiveDrawer';
import * as mui from '@mui/material';

jest.mock('@mui/material/useMediaQuery', () => jest.fn());

describe('ResponsiveDrawer', () => {

    beforeEach(() => {
        // Mock the useMediaQuery to return true for mobile wiew
        mui.useMediaQuery.mockImplementation(() => true);
    });

    test('renders drawer content', () => {
        render(
            <MemoryRouter>
                <ResponsiveDrawer />
            </MemoryRouter>
        );

        // Check if the drawer content is rendered
        expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
    });

    test('toggles drawer on menu button click', () => {
        render(
            <MemoryRouter>
                <ResponsiveDrawer />
            </MemoryRouter>
        );

        // Check if the drawer is initially closed
        expect(screen.queryByTestId('drawer-content')).toBeNull();

        // Click the menu button to open the drawer
        fireEvent.click(screen.getByTestId('menu-button'));

        // Check if the drawer is now open
        expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
    });

    test('contains navigation links', () => {
        render(
            <MemoryRouter>
                <ResponsiveDrawer />
            </MemoryRouter>
        );

         // Click the menu button to open the drawer
        fireEvent.click(screen.getByTestId('menu-button'));


        // Check if the drawer contains the expected navigation links
        expect(screen.getByText('Coworking')).toBeInTheDocument();
        expect(screen.getByText('Aulas')).toBeInTheDocument();
        expect(screen.getByText('Oficina Digital')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
    });
});

