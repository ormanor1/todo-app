import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';

import { getTodos } from '../../store/actions/todoActions';

import Todo from './Todo';

const useStyles = makeStyles({
  todoStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '30px',
    paddingTop: '20px',
    paddingBottom: '20px',
    boxShadow: '0px 0px 12px -3px #000',
    borderRadius: '9px',
  },
});

const ListTodos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth='sm' className={classes.todoStyle}>
        <Typography variant='h4'>
          {todos.length > 0 ? 'Todos' : 'No Todos yet'}
        </Typography>
        {todos &&
          todos.map((todo) => {
            return <Todo todo={todo} key={todo._id} />;
          })}
      </Container>
    </div>
  );
};

export default ListTodos;
