import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

const Todos = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.token) return navigate('/signin');
  });

  return (
    <div>
      <AddTodo />
      <ListTodos />
    </div>
  );
};

export default Todos;
