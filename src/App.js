import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from './store/actions/authActions';

import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import Navbar from './components/navbar/Navbar';
import Signin from './components/auth/signin/Signin';
import Signup from './components/auth/signup/Signup';
import Todos from './components/todos/Todos';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
  margin: {
    margin: '30px auto',
  },
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <Container maxWidth='md'>
          <Navbar />
          <Container className={classes.margin} maxWidth='sm'>
            <Routes>
              <Route path='/' element={<Todos />} />
              <Route exact path='/signin' element={<Signin />} />
              <Route exact path='/Signup' element={<Signup />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
