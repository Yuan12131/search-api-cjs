const https = require('https');
const { client_id, client_secret } = require('./utils'); // 유틸리티 모듈에서 client_id 및 client_secret 가져오기

const makeApiRequest = (query, callback) => {
  const { createApiUrl } = require('./utils'); // 유틸리티 모듈 가져오기
  const api_url = createApiUrl(query);
  const options = {
    headers: {
      'X-Naver-Client-Id': client_id, // 유틸리티 모듈에서 가져온 값 사용
      'X-Naver-Client-Secret': client_secret // 유틸리티 모듈에서 가져온 값 사용
    }
  };

  https.get(api_url, options, response => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      callback(data);
    });
  });
};

module.exports = { makeApiRequest };
