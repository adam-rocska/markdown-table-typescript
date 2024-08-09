import {FixedLengthArray} from 'type-fest';
import {ExpressibleAsString} from './expressible-as-string';
import {greatestLengthPerColumn} from './greatest-length-per-column';
import {padCell} from './pad-cell';

export function markdownTable<
  Headers extends FixedLengthArray<ExpressibleAsString, number>
>(
  headers: Headers,
  ...rows: FixedLengthArray<ExpressibleAsString, Headers["length"]>[]
): string {
  if (rows.length === 0) rows = [headers.map(() => '') as any];

  const lengths = greatestLengthPerColumn(headers, ...rows);
  const pad = padCell(lengths);

  return [
    headers.map(pad).join(' | '),
    headers.map((_, i) => pad('', i).replace(/ /g, '-')).join(' | '),
    ...rows.map(row => row.map(pad).join(' | '))
  ]
    .map(r => `| ${r} |`)
    .join('\n');
}