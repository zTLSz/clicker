import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AboutPage from './about'
import GameMain from './gamemain'
import Shop from './shop'
import { store } from '../store/configureStore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {clickerRef} from '../firebase'


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
      marginRight: 50,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };


        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }
    
    handleClose() {
        this.setState({ anchorEl: null });
    }

    handleSave() {
        const storeState = store.getState();
        localStorage.setItem('gameStore', JSON.stringify(storeState));
        this.setState({ anchorEl: null });
        clickerRef.push().set(storeState);

        clickerRef.on("value", snapshot => {
            console.log(snapshot.val())
          });
    }
    
    
    render() {
      const { classes } = this.props;
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);
      return (
        <div className={classes.root}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit"
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            aria-label="Menu">
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <Link to="/">
                                <MenuItem onClick={this.handleClose}>Главная страница</MenuItem>
                            </Link>
                            <Link to="/about">
                                <MenuItem onClick={this.handleClose}>Об игре</MenuItem>
                            </Link>
                            <Link to="/shop">
                                <MenuItem onClick={this.handleClose}>Магазин ускорителей</MenuItem>
                            </Link>
                                <MenuItem onClick={this.handleClose}>Статистика</MenuItem>
                                <MenuItem onClick={this.handleSave}>Сохранить игру</MenuItem>
                        </Menu>
                        <Typography variant="h5" color="inherit" className={classes.grow}>
                            Coins Game
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Route exact path="/" component={GameMain} />
                <Route path="/about" component={AboutPage} />
                <Route path="/shop" component={Shop} />
            </Router>
        </div>
      );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
  
