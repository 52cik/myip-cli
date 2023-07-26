const internal = require('./lib/internal');
const external = require('./lib/external');

internal().then(res => console.log('本机IP:', res));
external().then(res => console.log('外网IP:', res));
