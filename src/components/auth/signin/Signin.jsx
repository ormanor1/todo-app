import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { signIn } from '../../../store/actions/authActions';

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

const Signin = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (auth.token) return navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
  };
  return (
    <div>
      <form
        noValidate
        className={classes.formStyle}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant='h5'>Sign In</Typography>
        <TextField
          autoFocus
          className={classes.spacing}
          id='enter-email'
          label='Email'
          type='email'
          variant='outlined'
          value={creds.email}
          onChange={(e) =>
            setCreds({ ...creds, email: e.target.value })
          }
          autoComplete='email'
          fullWidth
        ></TextField>
        <TextField
          className={classes.spacing}
          id='enter-password'
          type='password'
          label='Password'
          variant='outlined'
          value={creds.password}
          onChange={(e) =>
            setCreds({ ...creds, password: e.target.value })
          }
          autoComplete='new-password'
          fullWidth
        ></TextField>
        <Button
          className={classes.spacing}
          variant='outlined'
          type='submit'
          color='primary'
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Signin;
