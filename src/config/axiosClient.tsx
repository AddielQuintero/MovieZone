import axios from "axios";
import { CONFIG } from '@config'

export const axiosClient = axios.create({
  baseURL: CONFIG.API_BASE,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: CONFIG.API_KEY,
  }
});

// axiosClient.interceptors.request.use(async (config) => config);

// axiosClient.interceptors.response.use((response) => {
//     if (response && response.data) {
//         return response.data;
//     }

//     return response;
// }, (error) => {
//     throw error;
// });

// export default axiosClient;