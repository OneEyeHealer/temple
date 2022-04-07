import React, {Fragment} from 'react';

const OfferingTableHeader = ({thColumns, sortColumn, onSort}) => {

    const raiseOnSort = path =>{
        const sortCol = {...sortColumn};
        if(sortCol.path === path)
            sortCol.order = (sortCol.order === 'asc') ? 'desc':'asc';
        else{
            sortCol.path = path;
            sortCol.order = 'asc';
        }
        onSort(sortCol);
    }
    const renderSortIcon=(column)=>{
        if(column.path !== sortColumn.path) return null;
        if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"/>
        else return <i className="fa fa-sort-desc"/>
    };
    return (
        <Fragment>
            <thead className='table-dark rounded'>
            <tr>
                {thColumns.map(column =>
                   <th key={column.path || column.key}
                        style={{cursor: "pointer"}}
                        className="App m-auto"
                        onClick={()=>
                        raiseOnSort(column.path)}>
                        {column.label} {renderSortIcon(column)}
                        &nbsp;<span>{column.sumColumn}</span>
                    </th>
                )}
            </tr>
            </thead>
        </Fragment>
    );
};

export default OfferingTableHeader;
