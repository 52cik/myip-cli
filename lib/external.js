const http = require('http');

const fetch = (url, opts) => {
  return new Promise((resolve, reject) => {
    http.get(url, opts || {}, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const sohu = () => fetch('http://pv.sohu.com/cityjson?ie=utf-8').then((res) => {
  const json = res.replace(/[^{]+/, '').replace(/;$/, '');
  try {
    const data = JSON.parse(json);
    return { ip: data.cip, addr: data.cname };
  } catch (e) {
    return Promise.reject(e);
  }
});

const cip = () => fetch('http://cip.cc', { headers: { 'User-Agent': 'curl/7.64.1' } }).then((res) => {
  const m = res.match(/[^:]+:\s*([\d.]+)[^:]+:\s*([^\n]+)[^:]+:\s*([^\n]+)/);
  if (m) {
    return {
      ip: m[1],
      addr: m[2].replace(/\s+/g, ' ') + ' ' + m[3],
    };
  }
  return Promise.reject(Error(res));
});

function getIPAdress() {
  return new Promise((resolve) => {
    sohu().then(resolve).catch(e => e);
    cip().then(resolve).catch(e => e);
  })
}

module.exports = getIPAdress;
