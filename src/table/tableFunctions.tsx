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
export const search = (data: string,tableData:tableDataType[],searchBy:string) => {
  return(
      tableData.filter((item) =>
          data == '' ? true : item[searchBy].match(data) != null
      )
  );
};

export const sorter = (category: string, value: -1 | 1,searchData:tableDataType[]) => {
      searchData.sort((a, b) => {
          if(category.toLowerCase() === 'id' || category.toLowerCase() === 'phone'){
              return parseInt(a[category.toLowerCase()]) < parseInt(b[category.toLowerCase()]) ? -1 * value : 1 * value;
          }
        return a[category] < b[category] ? -1 * value : 1 * value;
      })
  // forceUpdate();
};