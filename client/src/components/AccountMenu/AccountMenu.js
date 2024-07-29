import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';

// import People from '@mui/icons-material/People';
// import PermMedia from '@mui/icons-material/PermMedia';
// import Dns from '@mui/icons-material/Dns';
// import Public from '@mui/icons-material/Public';

// const data = [
//   { icon: <People />, label: 'Marketplace' },
//   { icon: <PermMedia />, label: 'Wallet & NFT Collection' },
//   { icon: <Dns />, label: 'Create Berzen NFTs' },
//   { icon: <Public />, label: 'Publish Berzen NFTs' },
// ];

const data = [
    { label: 'My Berzen Wallet & NFTs' },
  ];

  const subData = [
    { label: 'Berzen NFT Sales' },
    { label: 'Berzen NFT Purchases' },
    { label: 'Berzen NFT Bids' },
    { label: 'Berzen NFT Offers' },
    { label: 'Berzen NFT Trades' },
    { label: 'Berzen NFT Transfers' },
    { label: 'Berzen NFT Rentals' },
    { label: 'Berzen NFT Leases' },
    { label: 'Berzen NFT Loans' },
    { label: 'Berzen NFT Auctions' },
    { label: 'Berzen NFT Sales' },
  ];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flow' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="My Account"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontSize: 12,
                    fontWeight: 'bold',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
              <Tooltip title="Account Settings">
                <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '1px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            
            
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >


              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: 1 | 0 } },
                }}
              >


                <ListItemText
                  secondary="Dashboard"
                  secondaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                />



                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />


              </ListItemButton>




              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}

                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
            </Box>
          </FireNav>


            {/* --------------------------------------------------- */}
            {/* --------------------------------------------------- */}
            {/* --------------------------------------------------- */}

          <FireNav component="nav">
            <Box sx={{ display: 'flow' }}>

                    <ListItemText
                    primary="Berzen Transactions"
                    primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                    }}
                    />

                    {open &&
                    subData.map((item) => (
                    <ListItemButton
                       component="div" disablePadding
                    >
     
                        <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />

                    </ListItemButton>
                    
                    ))}
                </Box>
            </FireNav>
        </Paper>


        {/* --------------------------------------------------- */}
        {/* --------------------------------------------------- */}
        {/* --------------------------------------------------- */}

      </ThemeProvider>

    </Box>
  );
};