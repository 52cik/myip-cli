const internal = require('./lib/internal');
const external = require('./lib/external');

internal(data => console.log('internal:', data));
external(data => console.log('external:', data));
