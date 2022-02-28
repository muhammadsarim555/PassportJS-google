const BASE_URL = 'http://192.168.1.112:8080/api/';

const verifyToken = token =>
  `${BASE_URL}auth/google/verifyToken?access_token=${token}`;

export {verifyToken};
