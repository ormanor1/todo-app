import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { makeStyles } from '@mui/styles';

import { addTodo } from '../../store/actions/todoActions';

const useStyles = makeStyles({
  formStyle: {
    margin: '0px auto',
    padding: '15px',
    borderRadius: '9px',
    boxShadow: '0px 0px 12px -3px #000',
    display: 'flex',
    justifyContent: 'space-between',
  },
  submitButton: {
    marginLeft: '20px !important',
  },
});

const AddTodo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    name: '',
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(todo));

    setTodo({ name: '', isComplete: false });
  };

  return (
    <div>
      <form
        noValidate
        autoComplete='off'
        className={classes.formStyle}
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id='add-todo'
          label='Type somthing you have to do...'
          variant='outlined'
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) =>
            setTodo({
              ...todo,
              name: e.target.value,
              date: new Date(),
            })
          }
        />
        <Button
          className={classes.submitButton}
          color='primary'
          variant='contained'
          type='submit'
        >
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
