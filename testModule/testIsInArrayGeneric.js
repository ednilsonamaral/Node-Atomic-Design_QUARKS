'use strict';

const describes = [
  { list: ['suissa', 'itacir'] }
, { type: true
  , message: 'está array'
  , values: ['suissa', 'itacir']
  }
, { type: false
  , message: 'não está array'
  , values: ['vai corintia!', null, undefined, 1, true, {}, ()=>{}]
  }
];
require('./testModuleGeneric')('isInArray', describes);