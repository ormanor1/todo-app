import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Typography,
  IconButton,
  ButtonGroup,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  Create,
  Delete,
  CheckCircle,
} from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import moment from 'moment';

import {
  updateTodo,
  deleteTodo,
  toggleTodo,
} from '../../store/actions/todoActions';

const useStyles = makeStyles({
  todoStyle: {
    margin: '20px auto',
    padding: '20px',
    border: '2px solid #dbdbdb',
    borderRadius: '9px',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'start',
    wordBreak: 'keep-all',
    wordWrap: 'break-word',
  },
  grayStyle: {
    color: '#8f8f8f',
  },
  isComplete: {
    color: 'green !important',
  },
  checked: {
    textDecoration: 'line-through',
  },
});

const Todo = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(todo.name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName(todo.name);
  };

  const handleSubmit = (todo) => {
    dispatch(updateTodo({ name }, todo._id));
    handleClose();
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleOnToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={classes.todoStyle}>
      <div>
        {todo.isComplete ? (
          <Typography variant='h6' className={classes.checked}>
            {todo.name}
          </Typography>
        ) : (
          <Typography variant='h6'>{todo.name}</Typography>
        )}

        <Typography
          className={classes.grayStyle}
          variant='body2'
        >
          Author: Mano
        </Typography>
        <Typography
          className={classes.grayStyle}
          variant='body2'
        >
          Added: {moment(todo.date).fromNow()}
        </Typography>
      </div>
      <div>
        <ButtonGroup
          size='small'
          variant='contained'
          aria-label='outlined primary button group'
        >
          <IconButton
            onClick={(e) => {
              handleOnToggle(todo._id);
            }}
          >
            {todo.isComplete ? (
              <CheckCircle
                color='action'
                className={classes.isComplete}
              />
            ) : (
              <CheckCircle color='action' />
            )}
          </IconButton>

          <IconButton onClick={handleClickOpen}>
            <Create color='primary' />
          </IconButton>
          <IconButton onClick={(e) => handleOnDelete(todo._id)}>
            <Delete color='warning' />
          </IconButton>
        </ButtonGroup>
        <Dialog fullWidth open={open} onClose={handleClose}>
          <DialogTitle>Mano</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              autoFocus
              margin='dense'
              id='name'
              type='text'
              defaultValue={name}
              onChange={(e) => handleOnChange(e)}
              fullWidth
              variant='standard'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleSubmit(todo)}>
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Todo;
