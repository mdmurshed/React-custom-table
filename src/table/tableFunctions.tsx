import { tableDataType } from './tableData';

export const numberOfPage = (length: number, numberOfRow: number): number => {
  return (
    length / numberOfRow -
    (length % numberOfRow) / numberOfRow +
    (length % numberOfRow == 0 ? 0 : 1)
  );
};
export const arrayGenerate = (numberOfPage: number): number[] => {
  return Array.from(Array(numberOfPage).keys());
};
export const filterTheTable = (
  data: tableDataType[],
  lengthOfTData: number,
  page: number,
  numberOfRow: number
) => {
  return data.slice(
    page * numberOfRow,
    lengthOfTData - 1 >= page * numberOfRow + numberOfRow
      ? page * numberOfRow + numberOfRow
      : lengthOfTData
  );
};
