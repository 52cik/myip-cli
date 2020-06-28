const internal = require('./lib/internal');
const external = require('./lib/external');

internal().then(res => console.log('internal:', res));
external().then(res => console.log('external:', res));
