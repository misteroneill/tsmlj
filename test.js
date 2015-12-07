var assert = require('assert');
var tsmlj = require('.');

assert.equal(tsmlj`I am a one line string!`, 'I am a one line string!');

assert.equal(
  tsmlj`All \t whitespace \r\n is normalized to spaces.`,
  'All whitespace is normalized to spaces.'
);

assert.equal(
  tsmlj`
    I am a multi-line
    string!
  `,
  'I am a multi-line string!'
);

assert.equal(
  tsmlj`
    Better make sure
    ${'  expressions'} work!
  `,
  'Better make sure expressions work!'
);

assert.equal(
  tsmlj`
    It does not

    preserve empty

    lines.
  `,
  'It does not preserve empty lines.'
);
