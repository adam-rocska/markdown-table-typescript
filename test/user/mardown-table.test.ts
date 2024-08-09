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
});