import React, { useState, Fragment } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// below are imported for additional FV icons
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import Fields from "../pages/Fields";
import Report from "../pages/Report";
import Setting from "../pages/Setting";
import Help from "../pages/Help";

const drawerWidth = 240;
const history = createBrowserHistory(); //added

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));




export default function FVApp() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = useState(false); //added
  const [title, setTitle] = useState("Home"); //added

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onItemClick = title => () => {
    setTitle(title);
    // setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Product / Application Name (FV2)
          </Typography>
        </Toolbar>
      </AppBar>
      <Router history={history}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/report"
            onClick={onItemClick("Reports")}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText>Reports</ListItemText>
          </ListItem>
          <ListItem 
            button
            component={Link}
            to="/Fields"
            onClick={onItemClick("My Fields")}
          >
            <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
            <ListItemText>My Fields</ListItemText>
          </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem
            button
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>Customers</ListItemText>
          </ListItem>
          <ListItem
            button
          >
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText>Programs</ListItemText>
          </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              component={Link}
              to="/Setting"
              onClick={onItemClick("Setting")}
            >
            <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
              <ListItemText>Setting</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/Help"
              onClick={onItemClick("Help")}
            >
            <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
              <ListItemText>Help</ListItemText>
            </ListItem>
            {/* {['Setting', 'Help'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <HelpIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Route exact path="/" component={Home} />
            <Route path="/fields" component={Fields} />
            <Route path="/report" component={Report} />
            <Route path="/setting" component={Setting} />
            <Route path="/help" component={Help} />
        </main>
      </Router>
      
    </div>
  );
}
