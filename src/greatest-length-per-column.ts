import {FixedLengthArray} from 'type-fest';
import {ExpressibleAsString} from './expressible-as-string';

export const greatestLengthPerColumn = <
  ColumnCount extends number
>(
  ...rows: FixedLengthArray<ExpressibleAsString, ColumnCount>[]
) => rows.reduce(
  (t, r) => t.map((v, i) => Math.max(v, r[i].toString().length)),
  rows[0].map(() => 0)
) as any as GreatestLengths<ColumnCount>; // This shameful typecasting is necessary for now :(

export type GreatestLengths<
  ColumnCount extends number
> = FixedLengthArray<
  number,
  ColumnCount
>;