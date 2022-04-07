import React, {Fragment} from 'react';
import _ from 'lodash';
import LoadingGif from "../common/loadingGif";

const OfferSummary = (props) => {
    const {total} = props;
    const tableColumnsSummary =[
        {key:'#', label: "#"},
        {label: "Offerings", path: 'title'},
        {label: "Quantity", path: 'sumLabel'},
        ];
    const tableRows = [
        {key: 1, title: 'Rounds', sumLabel: total.noOfRounds},
        {key: 2, title: 'Book Distribute', sumLabel: total.bookDistribute},
        {key: 3, title: 'Lecture Heard', sumLabel: total.lectureHeard},
        {key: 4, title: 'Slokas Learn', sumLabel: total.slokasLearn},
    ];
    const renderCellSummary = (index, row, column)=>{
        if(column.key === '#') return index ;

        return _.get(row, column.path);
    };
    return(
        <Fragment>
            <div className="container App mt-3">
                <table className="table table-hover table-striped w-75 mx-auto">
                    <thead className='table-dark'>
                        <tr>
                            {tableColumnsSummary.map((item, index)=>
                                <th key={index}>{item.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="table-light">
                    {total.noOfRounds > 0 ? (tableRows.map((row, index)=>
                        <tr key={row.title}>
                            {tableColumnsSummary.map((column)=>
                            <td key={column.label}>{renderCellSummary(row.key, row, column)}</td>)}
                        </tr>
                    )) : <LoadingGif/>}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default OfferSummary;
