import {ExpressibleAsString} from "./expressible-as-string";
import {GreatestLengths} from "./greatest-length-per-column";

export const padCell = <Count extends number>(lengths: GreatestLengths<Count>) => (
  content: ExpressibleAsString,
  columnIndex: number
): string => content
  .toString()
  .trim()
  .padEnd(lengths[columnIndex]);