const port = 8000;
let host = 'http://localhost';

if (process.env.REACT_APP_CI) {
  host = 'http://glamping-ci.ddns.net';
}

export default {
  apiUrl: host + ':' + port,
};
