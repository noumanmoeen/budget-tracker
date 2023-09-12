import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});



axiosInstance.interceptors.request.use(
  function (req) {
    console.log('HERE 3',req)
    req.headers['Authorization'] = 'Bearer tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDA1OTMyMWYyNDA4Y2I0M2YzZGU1NiIsImlhdCI6MTY5NDUyMTY1MSwiZXhwIjoxNjk3MTEzNjUxfQ.GO7YwUahB31p4pUV0xo8rQ0PnF2gYFvukBbPqhpGT9M'

    return req
  },
  function(err) {
    console.log('HERE 4',err)
    // return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(function(res) {
  console.log('HERE 2',res)
  return res;
},
function (err) {
  console.log('HERE 1',err)
  // return Promise.reject(err);
});


