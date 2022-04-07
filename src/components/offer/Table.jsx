import React, {Fragment} from 'react';
import OfferingTableHeader from "./OfferingTableHeader";
import OfferingTableBody from "./OfferingTableBody";

const Table = ({tableColumns, sortColumn, onSort, paginateOfferings}) => {
    return (
        <Fragment>
            <table className="table table-info table-hover table-striped rounded">
                <OfferingTableHeader
                    thColumns={tableColumns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                <OfferingTableBody
                    data={paginateOfferings}
                    tdColumns={tableColumns}
                />
            </table>
        </Fragment>
    );
};

export default Table;
