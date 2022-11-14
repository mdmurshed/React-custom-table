import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
export interface PaginationType {
  page: number;
  setPage: (page: number) => void;
  numberOfPage: number;
}
export const TablePaginationV2: FC<PaginationType> = function TablePaginationV2({
  page,
  setPage,
  numberOfPage,
}) {
  const [paginationData, setPaginationData] = useState<number[]>(
    Array.from(Array(numberOfPage < 3 ? numberOfPage : 3).keys())
  );
  const setPaginationList = (sliderValue: number): void => {
    setPaginationData((prevState) => prevState.map((i) => i + sliderValue));
  };
  useEffect(() => {
    if (page < paginationData[0]) setPaginationList(page - paginationData[0]);
    else if (page > paginationData[paginationData.length - 1])
      setPaginationList(page - paginationData[paginationData.length - 1]);
  }, [paginationData, setPaginationList, setPaginationData, page]);
  return (
    <div className={'d-flex'}>
      <Button
        variant="light"
        className={'border rounded-2 fw-bold px-3'}
        onClick={() => {
          page > 0 && setPage(page - 1);
        }}
      >
        <span className={'pb-2'}>-</span>
      </Button>
      <div
        className={`border fw-bold py-2 px-3 `}
        key={0}
        onClick={() => setPage(0)}
      >
        <span className={`pt-2 ${page === 0 ? 'text-primary' : 'text-black'}`}>
          0
        </span>
      </div>
      <div
        className={`border fw-bold py-2 px-3 `}
        key={1}
        onClick={() => setPage(1)}
      >
        <span className={`pt-2 ${page === 1 ? 'text-primary' : 'text-black'}`}>
          1
        </span>
      </div>

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
            onClick={() => setPage(item + 2)}
          >
            <span
              className={`pt-2 ${
                page === item + (page > numberOfPage - 2 ? 0 : 2)
                  ? 'text-primary'
                  : 'text-black'
              }`}
            >
              {item + (page > numberOfPage - 2 ? 0 : 2)}
            </span>
          </div>
        ))}
      </div>
      <div
        className={`border fw-bold py-2 px-3 `}
        key={numberOfPage - 2}
        onClick={() => setPage(numberOfPage - 2)}
      >
        <span
          className={`pt-2 ${
            page === numberOfPage - 2 ? 'text-primary' : 'text-black'
          }`}
        >
          {numberOfPage - 2}
        </span>
      </div>
      <div
        className={`border fw-bold py-2 px-3 `}
        onClick={() => setPage(numberOfPage - 1)}
      >
        <span
          className={`pt-2 ${
            page === numberOfPage - 1 ? 'text-primary' : 'text-black'
          }`}
        >
          {numberOfPage - 1}
        </span>
      </div>
      <Button
        variant="light"
        className={'border rounded-2'}
        onClick={() => {
          numberOfPage - 1 > page && setPage(page + 1);
        }}
      >
        <span className={'pb-2 fw-bold'}>+</span>
      </Button>
    </div>
  );
};

// {index == 0
//  ? 0
//  : index == 6
//   ? numberOfPage - 1
//   : index == 1
//    ? page < 5 && paginationData[2] === 2
//     ? 1
//     : '...'
//    : index == 5
//     ? page >= numberOfPage - 5 &&
//     paginationData[5] === numberOfPage - 2
//      ? numberOfPage - 2
//      : '...'
//     : item}
