import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box className="w-[0] ml-10 mr-10">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Book" icon={<BookIcon />} component={Link} to="/book" />
        <BottomNavigationAction label="Visitor" icon={<AccountBoxIcon />} component={Link} to="/visitor" disabled />
        <BottomNavigationAction label="Cards" icon={<PaymentIcon />} component={Link} to="/cards" disabled />
      </BottomNavigation>
    </Box>
  );
}
