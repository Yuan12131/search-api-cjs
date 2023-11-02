const client_id = '9e_Z7STmxYIcQkv6gSSD';
const client_secret = 'WFiNunUoAn';

const createApiUrl = (query) => {
  return `https://openapi.naver.com/v1/search/news?query=${encodeURI(query)}`;
};

module.exports = { client_id, client_secret, createApiUrl };
