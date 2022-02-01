import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';

function Header() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#232F3D' }} position='sticky'>
        <Toolbar>
          <Typography>
            <NavLink to='/'>
              <LibraryBooksOutlinedIcon />
            </NavLink>
          </Typography>
          <div className='ml-auto'>
            <Tabs
              textColor='inherit'
              indicatorColor='secondary'
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab LinkComponent={NavLink} to='/add' label='Add Product' />
              <Tab LinkComponent={NavLink} to='/books' label='Books' />
              <Tab LinkComponent={NavLink} to='/about' label='About Us' />
              
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
