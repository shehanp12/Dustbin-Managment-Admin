import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import Home from "../../Layouts/Home/Home";
import GoogleMaps from "../../Layouts/Map/GoogleMaps";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
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
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"GoogleMap"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/maps" component={GoogleMaps}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
