import axios from  'axios'
const BASE_URL =
  "https://testnets-api.opensea.io/api/v1/assets?owner=0x6e4AE7C8d14F93382A92543aa2113c6F18C9F9aa";
const config = {
  method: "get",
  url: BASE_URL,
  headers: {
    Cookie:
      "__cf_bm=2J0AQb4NHejLLytHsjZ7HOQWA2Ht8A1ND_YOPomPpmA-1668022809-0-AZAZYtt7gbzQBhnOb8lj0/qChrfxEgfKILQK8Yd1Bv+QIYkxWdweBPXt7R6bm1uYf+FQKt0xX0zpiBeKXRgugXo=",
  },
};

export const getImages = () => {
  const data = axios(config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
  return data
};
