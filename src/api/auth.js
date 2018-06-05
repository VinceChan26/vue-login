/* eslint-disable-line no-unused-vars */
import axios from 'axios';

export const login = ({ account, password }) =>
  axios.get('http://localhost:3000/login', { account, password });

export const logout = () => axios.get('http://localhost:3000/logout');

export const getAuthUser = () => axios.get('http://localhost:3000/profile');
