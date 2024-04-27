import axios from 'axios';

import Endpoints from './endpoints';

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

export default function createAxiosInstance() {
  return axios.create({
    baseURL: Endpoints.baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}
