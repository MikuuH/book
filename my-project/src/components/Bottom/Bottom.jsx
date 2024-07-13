import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// Контейнер для нижней кнопки "Home"
const HomeButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 49%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const Bottom = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/book':
        setValue(1);
        break;
      case '/visitor':
        setValue(2);
        break;
      case '/cards':
        setValue(3);
        break;
      case '/stats':
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <Box className="w-[0] ml-10 mr-10" style={{ zIndex: 100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <HomeButtonContainer>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" size='large' />
        </HomeButtonContainer>

        <BottomNavigationAction label={t('book')}icon={<BookIcon />} component={Link} to="/book" />
        <BottomNavigationAction label={t('visitor')} icon={<AccountBoxIcon />} component={Link} to="/visitor" />
        <BottomNavigationAction label={t('cards')} icon={<PaymentIcon />} component={Link} to="/cards" />
        <BottomNavigationAction label={t('stats')} icon={<QueryStatsIcon />} component={Link} to="/stats" />
      </BottomNavigation>
    </Box>
  );
};

export default Bottom;
