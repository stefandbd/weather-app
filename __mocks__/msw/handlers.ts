import {http} from 'msw';
import {setupServer} from 'msw/node';
import {GET_ALL_USERS, GET_USER_BY_ID} from './mock-data';

const getAllUsersUrl = 'https://jsonplaceholder.typicode.com/users';
const getUserByIdUrl = `https://jsonplaceholder.typicode.com/users/:id`;

const getAllUsersHandler = http.get(getAllUsersUrl, (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json(GET_ALL_USERS));
});

const getUserByIdHandler = http.get(getUserByIdUrl, (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json(GET_USER_BY_ID));
});

const handlers = [getAllUsersHandler, getUserByIdHandler];

export const mswServer = setupServer(...handlers);

const getAllProductsFailedHandler = http.get(
  getAllUsersUrl,
  (_req, res, ctx) => {
    return res(ctx.status(500));
  },
);

const getProductByIdFailedHandler = http.get(
  getUserByIdUrl,
  (_req, res, ctx) => {
    return res(ctx.status(500));
  },
);

export const setupGetAllUsersFailedHandler = () =>
  mswServer.use(getAllProductsFailedHandler);

export const setupGetUserByIdFailedHandler = () =>
  mswServer.use(getProductByIdFailedHandler);
