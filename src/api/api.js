import * as axios from 'axios';

export const tariffsAPI = {
  getTariffs() {
    return axios.post(`https://api.sweb.ru/notAuthorized/`, '{"jsonrpc":"2.0","method":"vpsOsConfig","params":{}}')
      .then(response => {
        return response.data.result;
      })
  },
};
