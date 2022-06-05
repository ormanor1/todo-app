import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  linkStyle: {
    color: '#fff',
    textDecoration: 'none',
  },
  toolbar: {
    borderRadius: '0 0 10px 10px',
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <AppBar position='static' className={classes.toolbar}>
        <Toolbar>
          <Typography variant='h4' className={classes.root}>
            <Link className={classes.linkStyle} to='/'>
              toDoApp
            </Link>
          </Typography>
          {user.token ? (
            <Typography
              variant='subtitle2'
              className={classes.root}
            >
              logged in as {user.name}
            </Typography>
          ) : (
            ''
          )}

          {user.token ? (
            <Button
              color='inherit'
              onClick={() => handleSignOut()}
            >
              Sign out
            </Button>
          ) : (
            ''
          )}

          {user.token ? (
            ''
          ) : (
            <div>
              <Button color='inherit'>
                <Link className={classes.linkStyle} to='/signin'>
                  Sign in
                </Link>
              </Button>
              <Button color='inherit'>
                <Link className={classes.linkStyle} to='/signup'>
                  Sign up
                </Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
