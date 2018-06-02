/* eslint-disable-line no-unused-vars */
import axios from 'axios';

export const login = ({ account, password }) =>
  // axios.post('/uri/login', { account, password });
  ({
    data: {
      code: 200,
      result: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user: {
          account,
          name: account,
          active: 1,
        },
      },
    },
  });

export const logout = () => ({ data: { code: 200 } });
