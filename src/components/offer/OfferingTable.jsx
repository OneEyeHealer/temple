import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {BadgeStyle} from "../../utils/badgeStyle";
import Delete from "../common/delete";
import Table from "./Table";
import SearchBox from "./SearchBox";

const OfferingTable = ({searchQuery, handleSearch, totalQuantity, offerings, paginateOfferings, handleDelete, sortColumn, onSort }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const updateTableCols = () => {
        setIsDesktop(window.innerWidth > 768);
    };
    useEffect(()=>{
        window.addEventListener("resize", updateTableCols);
        return () => window.removeEventListener("resize", updateTableCols);
    },[]);
    const {length} = offerings;
    const tableColumns = [
        {key:'#', label: '#'},
        {path: 'nameBv', label: 'Bv Name',
            content: offering=> <Link to={`/offerings/${offering._id}`}>{offering.nameBv}</Link>},
        {path: 'noOfRounds', label: 'Rounds', sumColumn:BadgeStyle(totalQuantity.noOfRounds)},
        {path: 'bookDistribute', label: 'Book Distributed', sumColumn:BadgeStyle(totalQuantity.bookDistribute), isDesktop: isDesktop},
        {path: 'lectureHeard', label: 'Lecture Heard', sumColumn:BadgeStyle(totalQuantity.lectureHeard)},
        {path: 'slokasLearn', label: 'Slokas Learn', sumColumn:BadgeStyle(totalQuantity.slokasLearn)},
        {key: 'date', path:"submitDate", label: 'Date'},
        {key: 'time', path:'submitTime', label: 'Time'},
        {key: 'delete', content: offering => <Delete onTrash={() => handleDelete(offering)}/>},
    ];
    return (
        <Fragment>
            <div className="row">
                <div className="col my-auto">
                    <h1 className="text-left">#Total BV: {length}</h1>
                </div>
                <div className="col-4 m-auto">
                    <code>Offering / day</code>
                </div>
                <div className="col-4 m-auto">
                    <SearchBox value={searchQuery} onChange={handleSearch}/>
                </div>
            <Table
                tableColumns={tableColumns}
                sortColumn={sortColumn}
                onSort={onSort}
                paginateOfferings={paginateOfferings}/>
            </div>
        </Fragment>
    );
};

export default OfferingTable;
