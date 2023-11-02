const express = require('express');

const router = express.Router();

router.get('/search/news', (req, res) => {
  const query = req.query.query;
  const { makeApiRequest } = require('./api'); // API 요청 모듈 가져오기
  makeApiRequest(query, (data) => {
    res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    res.end(data);
  });
});

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')// 루트 경로 처리 로직
});

module.exports = { handleSearchRequest: router.get('/search/news'), handleRootRequest: router.get('/') };