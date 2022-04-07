import React, {Fragment} from 'react';
import _ from 'lodash';
import EmptyTable from "../common/emptyTable";
import {submitOfferingTime} from "../../services/offeringService";

const OfferingTableBody = ({data, tdColumns}) => {
    const renderCell = (index, row, column) => {
        if(column.content) return column.content(row);
        if (column.key === '#') return index + 1;
        if (column.path === "submitDate") return submitOfferingTime(row.submitDate).toLocaleDateString();
        if (column.path === "submitTime") return submitOfferingTime(row.submitDate).toLocaleTimeString();

        return _.get(row, column.path);

    };
    const createKey = (row, column) => { return row._id + (column.key || column.path) };
    return (
        <Fragment>
            <tbody>
                {data.length > 0 ? (data.map((row, index) => <tr key={row._id}>
                        {tdColumns.map(column=> <td key={createKey(row, column)}>{renderCell(index, row, column) }</td>)}
                </tr>
                )) : <EmptyTable columns={9}/>}
            </tbody>
        </Fragment>
    );
};

export default OfferingTableBody;
