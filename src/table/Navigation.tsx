import React, { FC } from 'react';
import { PaginationType } from './Pagination';
const Navigation: FC<PaginationType> = function Navigation({
                                                               page,
                                                               setPage,
                                                               numberOfPage,
                                                           }) {
    if (numberOfPage <= 1) return <></>;
    // const [paginationSize] = useState<number>(numberOfPage);
    return (
        <div className={'d-flex flex-row'}>
            <div className={'mx-1'}>
                <div
                    role={'button'}
                    className={'btn btn-light border pb-2'}
                    onClick={() => {
                        page > 0 ? setPage(page - 1) : setPage(page);
                    }}
                >
                    previous
                </div>
            </div>
            <div className={'mx-1'}>
                <div
                    role={'button'}
                    className={'btn btn-light border pb-2 px-4'}
                    onClick={() => {
                        numberOfPage - 2 >= page ? setPage(page + 1) : setPage(page);
                    }}
                >
                    next
                </div>
            </div>
        </div>
    );
};

export default Navigation;
