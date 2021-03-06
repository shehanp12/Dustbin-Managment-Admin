import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import RoomIcon from '@material-ui/icons/Room';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from "../../Layouts/Home/Home";
import GoogleMaps from "../../Layouts/Map/GoogleMaps";
import Notification from "../../Layouts/Notification/Notification";



const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontWeight:'bolder',


  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

}))

function Navbar() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Details"} />
              </ListItem>
            </Link>
            <Link to="/maps" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <RoomIcon/>
                </ListItemIcon>
                <ListItemText primary={"GoogleMap"} />
              </ListItem>
            </Link>
            <Link to="/notification" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsIcon/>
                </ListItemIcon>
                <ListItemText primary={"Notification"} />
              </ListItem>
            </Link>


          </List>
        </Drawer>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/maps" component={GoogleMaps}>
          </Route>
          <Route exact path="/notification" component={Notification}>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
