// dependencies
import test from 'ava';

// target
import yourModuleName from '../src';

// specs
test('spec1', (t) => {
  t.ok(yourModuleName() === 'bar');
});
