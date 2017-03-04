'use strict';

const internal = require('./lib/internal');
const external = require('./lib/external');

console.log('internal:', internal());

external((data) => {
  console.log('external:', data);
});
