import axios from 'axios';

const getResource = async api => {
  try {
    return axios.get(`${api}`);
  } catch (err) {
    return err;
  }
};

export {getResource};
