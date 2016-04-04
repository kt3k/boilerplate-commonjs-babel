import yourModuleName from '../src';
import assert from 'power-assert';

describe('your-module-name', () => {
  it('spec1', () => {
    assert.deepStrictEqual(
      yourModuleName(),
      [
        { type: 'short', name: 'f', value: null },
        { type: 'short', name: 'o', value: undefined },
        { type: 'short', name: 'o', value: 'bar' },
      ]
    );
  });
});
