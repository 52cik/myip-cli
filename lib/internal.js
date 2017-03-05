const os = require('os');

const hasOwn = Object.prototype.hasOwnProperty;

function getIPAdress() {
  const ips = [];
  try {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
      if (hasOwn.call(interfaces, devName)) {
        interfaces[devName].forEach((it) => {
          if (it.family === 'IPv4' && it.address !== '127.0.0.1' && !it.internal) {
            ips.push(it.address);
          }
        });
      }
    }
    return ips;
  } catch (e) {
    return 'No internal IP found';
  }
}

module.exports = getIPAdress;
