import {padCell} from '!src/pad-cell';

describe('padCell', () => {
  it('returns a function that pads the content to the length of the column.', () => {
    const pad = padCell([1, 2, 3, 4]);
    expect(pad('a', 0)).toBe('a');
    expect(pad('a', 1)).toBe('a ');
    expect(pad('a', 2)).toBe('a  ');
    expect(pad('a', 3)).toBe('a   ');
  });

  it('trims the content before padding.', () => {
    const pad = padCell([1, 2, 3, 4]);
    expect(pad(' a ', 0)).toBe('a');
    expect(pad(' a ', 1)).toBe('a ');
    expect(pad(' a ', 2)).toBe('a  ');
    expect(pad(' a ', 3)).toBe('a   ');
  });

  it('does not pad the content if it is longer than the column.', () => {
    const pad = padCell([1, 2, 3, 4]);
    expect(pad('abc', 0)).toBe('abc');
    expect(pad('abc', 1)).toBe('abc');
    expect(pad('abc', 2)).toBe('abc');
    expect(pad('abc', 3)).toBe('abc ');
  });

});