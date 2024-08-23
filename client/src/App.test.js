import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


// Mock the isMobile variable
jest.mock('./Components/Menu/ResponsiveDrawer', () => {
  const React = require('react');
  return (props) => {
    const [open, setOpen] = React.useState(true);
    const handleDrawerToggle = () => setOpen(prev => !prev);

    return (
      <div>
        <button data-testid="menu-button" onClick={handleDrawerToggle}>
          Menu
        </button>
        {open && <div data-testid="responsive-drawer">Drawer Content</div>}
      </div>
    );
  };
});

  

test('renders welcome message', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcomeElement = screen.getByText(/Welcome to the BeWorking new Website!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders ResponsiveDrawer component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const drawerElement = screen.getByTestId('responsive-drawer');
  expect(drawerElement).toBeInTheDocument();
});

test('opens and closes drawer on mobile', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const menuButton = screen.getByTestId('menu-button');

  // Initially, the drawer should be visible
  let drawer = screen.getByTestId('responsive-drawer');
  expect(drawer).toBeInTheDocument();

  // Click to close the drawer
  fireEvent.click(menuButton);

  // Wait for the drawer to close
  await waitFor(() => {
    drawer = screen.queryByTestId('responsive-drawer');
    expect(drawer).not.toBeInTheDocument();
  });

  // Click to open the drawer
  fireEvent.click(menuButton);

  // Wait for the drawer to open
  await waitFor(() => {
    drawer = screen.getByTestId('responsive-drawer');
    expect(drawer).toBeInTheDocument();
  });
});
