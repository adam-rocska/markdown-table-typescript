import {markdownTable} from '@adam-rocska/markdown-table';

describe('markdownTable', () => {
  describe('when given only a header and a row', () => {
    it('returns a markdown table with empty cells.', () => {
      const actual = markdownTable(['a', 'b']);
      const expected = [
        '| a | b |',
        '| - | - |',
        '|   |   |',
      ].join('\n');
      expect(actual).toBe(expected);
    });
  });

  describe('when given a header and a row with values', () => {
    it('returns a markdown table with the values.', () => {
      const actual = markdownTable(['a', 'b'], ['1', '2']);
      const expected = [
        '| a | b |',
        '| - | - |',
        '| 1 | 2 |',
      ].join('\n');
      expect(actual).toBe(expected);
    });
  });

  describe('when given a header and multiple rows with values', () => {
    it('returns a markdown table with the values.', () => {
      const actual = markdownTable(['a', 'b'], ['1', '2'], ['3', '4']);
      const expected = [
        '| a | b |',
        '| - | - |',
        '| 1 | 2 |',
        '| 3 | 4 |',
      ].join('\n');
      expect(actual).toBe(expected);
    });
  });

  describe('when given a lot of columns with varying length values', () => {
    it('returns a markdown table with the values.', () => {
      const actual = markdownTable(
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11', '12'],
      );
      const expected = [
        '| a | b  | c  | d  |',
        '| - | -- | -- | -- |',
        '| 1 | 2  | 3  | 4  |',
        '| 5 | 6  | 7  | 8  |',
        '| 9 | 10 | 11 | 12 |',
      ].join('\n');
      expect(actual).toBe(expected);
    });
  });
});