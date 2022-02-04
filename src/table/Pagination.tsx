import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
export interface PaginationType {
  page: number;
  setPage: (page: number) => void;
  numberOfPage: number;
}
const TablePagination: FC<PaginationType> = function TablePagination({
  page,
  setPage,
  numberOfPage,
}) {
  if (numberOfPage <= 1) return <></>;
  const [paginationData, setPaginationData] = useState<number[]>(
    Array.from(Array(numberOfPage < 5 ? numberOfPage : 5).keys())
  );
  const setPaginationList = (sliderValue: number): void => {
    setPaginationData((prevState) => prevState.map((i) => i + sliderValue));
  };
  useEffect(() => {
    setPaginationData(
      Array.from(Array(numberOfPage < 5 ? numberOfPage : 5).keys())
    );
  }, [numberOfPage]);
  useEffect(() => {
    // console.log('numberOfPage : ', numberOfPage);
    if (page < paginationData[0]) setPaginationList(page - paginationData[0]);
    else if (page > paginationData[paginationData.length - 1])
      setPaginationList(page - paginationData[paginationData.length - 1]);
  }, [setPaginationList, setPaginationData, page]);
  return (
    <div className={'d-flex'}>
      <Button
        variant="light"
        className={'border rounded-2 fw-bold px-3'}
        onClick={() => {
          page > 0 ? setPage(page - 1) : setPage(page);
        }}
      >
        <span className={'pb-2'}>-</span>
      </Button>
      <div className={'mx-2 d-flex'}>
        {paginationData.map((item, index) => (
          <div
            className={`border fw-bold py-2 px-3 ${
              index == 0 && 'rounded-start'
            } ${
              index == paginationData.length - 1
                ? 'rounded-end border-end-1'
                : 'border-end-0'
            }`}
            key={item}
            role={'button'}
            onClick={() => setPage(item)}
          >
            <span
              aria-label={`pageNumber${item}`}
              className={`pt-2 ${
                page === item ? 'text-primary' : 'text-black'
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="light"
        className={'border rounded-2'}
        onClick={() => {
          numberOfPage - 1 > page ? setPage(page + 1) : setPage(page);
        }}
      >
        <span className={'pb-2 fw-bold'}>+</span>
      </Button>
    </div>
  );
};

export default TablePagination;
