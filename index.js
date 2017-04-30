const util = require('util');
const internal = require('./lib/internal');
const external = require('./lib/external');

function inspect(data) {
  const str = util.inspect(data);
  const nolf = str.replace(/[\s\r\n]+/g, ' ');
  return nolf.length > 80 ? str : nolf;
}

internal(data => console.log('internal:', inspect(data)));
external(data => console.log('external:', inspect(data)));
