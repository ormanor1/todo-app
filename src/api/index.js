export const url = 'http://localhost:5000/api/v1/';

export const setHeaders = () => {
  const header = {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  };
  return header;
};
