'use strict';

const http = require('http');
const url = 'http://pv.sohu.com/cityjson?ie=utf-8';

function getIPAdress(cb) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    let rawData = '';

    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      let json = rawData.replace(/[^{]+/, '').replace(/;$/, '');

      try {
        let parsedData = JSON.parse(json);
        cb({
          ip: parsedData.cip,
          name: parsedData.cname,
        });
      } catch (e) {
        cb(rawData);
      }
    });
  });
}

module.exports = getIPAdress;
