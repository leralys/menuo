import axios from 'axios';

export default axios.create({
  baseURL: 'https://moveomenu.herokuapp.com/api',
});

// export default axios.create({
//   baseURL: 'http://localhost:5000/api',
// });
