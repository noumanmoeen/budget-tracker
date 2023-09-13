import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

axiosInstance.interceptors.request.use(
  function (req) {
    const token = localStorage.getItem('token')
    console.log("HERE 17", token)
    req.headers['Authorization'] =
      `Bearer ${token}`;

    return req;
  },
  function (err) {
    return Promise.reject(err);
  }
);
 
// axiosInstance.interceptors.response.use(
//   async (res) => {
//     let parsedRes;
//     if (Boolean(res)) {
//       parsedRes = await res.json();
//       const { data = {} } = parsedRes;
//       return data;
//     }
//     return res;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );
