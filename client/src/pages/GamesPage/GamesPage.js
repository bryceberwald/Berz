import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './GamesPage.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='games-container'>
      <Navigation />
      <Header />
      <br></br>

      <div className="top-games-container">
        <h1>Games Page</h1>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '70%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Browser-based games" {...a11yProps(0)} sx={{ fontSize: '0.5em', color: '#ffffff' }} />
            <Tab label="Downloadable games" {...a11yProps(1)} sx={{ fontSize: '0.5em', color: '#ffffff' }} />
            <Tab label="Extra Information" {...a11yProps(2)} sx={{ fontSize: '0.5em', color: '#ffffff' }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className='games-tab-1'>
            <h1>Browser-based Games</h1>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className='games-tab-2'>
            <h1>Downloadable Games</h1>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className='games-tab-3'>
            <h1>Extra Information</h1>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
};