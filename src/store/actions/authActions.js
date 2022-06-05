import axios from 'axios';
import { url } from '../../api/index';
import { toast } from 'react-toastify';

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}signup`, user)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'SIGN_UP',
          token: token.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data[0], {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (creds) => {
  return (dispatch) => {
    axios
      .post(`${url}signin`, creds)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'SIGN_IN',
          token: token.data,
        });
      })
      .catch((err) => {
        toast.error(err.response.data[0], {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token,
      });
    } else return null;
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: 'SIGN_OUT',
        token: null,
      });
    }
  };
};
