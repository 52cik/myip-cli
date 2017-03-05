const http = require('http');

const url = 'http://pv.sohu.com/cityjson?ie=utf-8';

function getIPAdress(cb) {
  http.get(url, (res) => {
    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', chunk => rawData += chunk);
    res.on('end', () => {
      const json = rawData.replace(/[^{]+/, '').replace(/;$/, '');
      try {
        const parsedData = JSON.parse(json);
        cb({
          ip: parsedData.cip,
          region: parsedData.cname,
        });
      } catch (e) {
        cb(rawData);
      }
    });
  });
}

module.exports = getIPAdress;
