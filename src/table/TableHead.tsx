import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const TableHead:FC<any> = function (props) {
    const {tableHeadData,update,sortCategory,sorterChecking,headClassName='',thClassName=''} = props
    // const [columnWidth] = useState(100/tableHeadData.length)
    return <tr className={`${headClassName}`}>
        {tableHeadData.map((item: any, index: React.Key | null | undefined) => (
            <th
                className={`${thClassName} py-3`}
                key={index}
                // style={{width: `${columnWidth}%`}}
                onClick={() => sorterChecking(item.toLowerCase(), sortCategory)}
            >
                <div className={'d-flex'} style={{
                    width:'fit-content'
                }}>
                    <div>
                        <span className={'me-2'}>{item}</span>
                    </div>
                    <div>
                        {sortCategory != item.toLowerCase() ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : !update ? (
                            <FontAwesomeIcon icon={faAngleDown} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleUp} />
                        )}
                    </div>
                </div>
            </th>
        ))}
    </tr>
    };

export default TableHead;