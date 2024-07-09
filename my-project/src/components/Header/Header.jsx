import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Bottom from '../Bottom/Bottom';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className="flex justify-center items-center">
          <Bottom />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
export default Header;