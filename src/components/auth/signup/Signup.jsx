import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';

import { signUp } from '../../../store/actions/authActions';

const useStyles = makeStyles({
  formStyle: {
    margin: '0px auto',
    padding: '30px',
    borderRadius: '9px',
    boxShadow: '0px 0px 7px -2px #000',
    display: 'flex ',
    flexDirection: 'column',
    alignItems: 'center ',
  },
  spacing: {
    marginTop: '10px !important',
  },
});

const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp({ ...user, name: nameForamt(user.name) }));

    setUser({ name: '', email: '', password: '' });
  };

  const nameForamt = (name) => {
    const aName = name.split(' ');

    for (var i = 0; i < aName.length; i++) {
      aName[i] =
        aName[i].charAt(0).toUpperCase() + aName[i].slice(1);
    }
    return aName.join(' ');
  };
  useEffect(() => {
    if (auth._id) return navigate('/');
  });

  return (
    <div>
      <form
        noValidate
        className={classes.formStyle}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant='h5'>Sign up</Typography>
        <TextField
          autoFocus
          className={classes.spacing}
          id='enter-name'
          label='Full Name'
          type='text'
          variant='outlined'
          fullWidth
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></TextField>
        <TextField
          className={classes.spacing}
          id='enter-email'
          label='Email'
          type='email'
          variant='outlined'
          fullWidth
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
          autoComplete='email'
        ></TextField>

        <TextField
          className={classes.spacing}
          id='enter-password'
          type='password'
          label='Password'
          variant='outlined'
          fullWidth
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
          autoComplete='new-password'
        ></TextField>
        {/* <TextField
          className={classes.spacing}
          id='enter-confirmpassword'
          type='password'
          label='Confirm Password'
          variant='outlined'
          fullWidth
        ></TextField> */}
        <Button
          className={classes.spacing}
          variant='outlined'
          type='submit'
          color='primary'
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
