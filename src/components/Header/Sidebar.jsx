import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Sidebar.css';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor:"black",color:"white" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       <ListItem button key="goBack"><ArrowBackIcon sx={{color: 'white'}} fontSize="large"/></ListItem>
        {['Home', 'About', 'Team', 'Events','Contact Us'].map((text, index) => (
          <div> 
          <a href={text.split(" ")[0].toLowerCase()} style={{color: 'white',textDecoration: 'none'}}>
          <ListItem button key={text}>
          <ListItemText primary={text} />
          </ListItem>
          </a>
          <Divider />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor} style={{backgroundColor:'black'}}>
          <Button onClick={toggleDrawer(anchor, true)}><ReorderIcon style={{color: 'white'}} fontSize="large"/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
