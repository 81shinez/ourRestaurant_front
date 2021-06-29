import axios from 'axios'; // 액시오스

export default function Client(url, method, callback) {
  axios(
    {
      url: '/api' + url,
      method: {method},
    }
  ).then(function (response) {
    callback(response.data);
  });
}