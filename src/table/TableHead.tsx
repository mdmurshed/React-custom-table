import React, { FC } from 'react';
// import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

export const TableHead: FC<any> = function (props) {
    const { tableHeadData, update, sortCategory, sorterChecking, headClassName = '', thClassName = '', sortOption = false } = props
    // const [columnWidth] = useState(100/tableHeadData.length)
    return <tr className={`${headClassName}`}>
        {tableHeadData.map((item: any, index: React.Key | null | undefined) => (
            <th
                className={`${thClassName} py-3`}
                key={index}
                // style={{width: `${columnWidth}%`}}
                onClick={() => sortOption && sorterChecking(item.toLowerCase(), sortCategory)}
            >
                <div className={'d-flex'} style={{
                    width: 'fit-content'
                }}>
                    <div>
                        <span className={'me-2'}>{item}</span>
                    </div>
                    {
                        sortOption && <div>
                            {sortCategory != item.toLowerCase() ? (
                                // <FontAwesomeIcon icon={faAngleUp} /> 
                                <div>🔼</div>
                            ) : !update ? (
                                // <FontAwesomeIcon icon={faAngleDown} />
                                <div>🔽</div>
                            ) : (
                                // <FontAwesomeIcon icon={faAngleUp} />
                                <div>🔼</div>
                            )}
                        </div>
                    }
                </div>
            </th>
        ))}
    </tr>
};
