// import React, {Fragment, useEffect, useState} from 'react';
// import OfferFullView from "./offer/OfferFullView";
// import OfferSummary from "./offer/OfferSummary";
// import {getOfferings} from "../services/fakeOfferingService";
// import {paginateData} from "../utils/paginateData";
// import _ from 'lodash';
//
// function Iyfrohini() {
//     const [offerings, setOfferings] = useState(getOfferings());
//     const[sumData, setSumData] = useState({});
//     const[pageSize, setPageSize] = useState(offerings.length);
//     const[currentPage, setCurrenPage] = useState(1);
//     const[sortColumn, setSortColumn] = useState({
//         path: 'nameBv',
//         order:'asc'
//     })
//
//     useEffect(()=> {
//         setSumData(handleTotalQuantity);
//         }, []
//     );
//
//     const handleDelete = (data) =>{
//         const offers = offerings.filter(offer =>
//                 offer._id !== data._id
//             );
//         setOfferings(offers);
//     };
//
//     const handleTotalQuantity = () =>{
//         const totalQuantity = {};
//         // count numbers
//         paginateOfferings.map((item)=> Object
//                 .entries(item)
//                 .map(([key, val])=>{
//                     if (typeof (val) === 'number') totalQuantity[key] = totalQuantity[key] ? (totalQuantity[key] + val) : val;
//                 })
//             );
//         return totalQuantity;
//     };
//     const handlePageChange = (page)=>{
//         setCurrenPage(page);
//     };
//     const handlePageSize = (pageLength) =>{
//         if(pageLength <= 0)
//             setPageSize(1)
//         else
//             setPageSize(pageLength >= offerings.length ? offerings.length : pageLength);
//     };
//     const handleSort = sortCol =>{
//         setSortColumn(sortCol);
//     }
//     const getPageData =()=>{
//         const sortedData = _.orderBy(offerings, [sortColumn.path], [sortColumn.order]);
//         const paginateOfferings = paginateData(sortedData, currentPage, pageSize);
//         return {paginateOfferings}
//
//     };
//     const{paginateOfferings} = getPageData();
//     return (
//         <Fragment>
//              <OfferFullView
//                  handleDelete={handleDelete}
//                  offerings={offerings}
//                  setOfferings={setOfferings}
//                  totalQuantity={handleTotalQuantity()}
//                  pageSize={pageSize}
//                  handlePageSize={handlePageSize}
//                  currentPage={currentPage}
//                  paginateOfferings={paginateOfferings}
//                  handlePageChange={handlePageChange}
//                  sortColumn={sortColumn}
//                  onSort={handleSort}
//              />
//              <OfferSummary
//                  total={handleTotalQuantity()}
//              />
//         </Fragment>
//     );
// }
//
// export default Iyfrohini;
