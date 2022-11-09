import axios from  'axios'
const BASE_URL =
  "https://testnets-api.opensea.io/api/v1/assets?owner=0x6e4AE7C8d14F93382A92543aa2113c6F18C9F9aa";

export const getImages = async () => {
  axios.get(BASE_URL)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
  return data
};
