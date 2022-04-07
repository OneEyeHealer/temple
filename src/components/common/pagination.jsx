import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
// import _ from "lodash";
import {hasNext, hasPrevious} from "../../utils/paginateData";
import { minusBtn, plusBtn } from "../../utils/buttonDisable";
const Pagination = (props) => {
    const{itemCount, pageSize, onPageChange, currentPage, handlePageSize} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    // if (pageCount === 1) return null;
    // const pages = _.range(1, pageCount + 1);

    const renderList =(cName, icon, handleFunc)=>{
        return(
            <li className={cName}>
                <a
                    className="page-link"
                    onClick={handleFunc}
                    role="button"
                    aria-disabled="true"
                ><i className={icon}/></a>
            </li>
        )
    }
    return <Fragment>
        <nav>
            <ul className="pagination pagination-sm">
                {/*span*/}
                <span className="m-auto"><b>Rows:</b> {pageSize > 1000 ? "1000+" : pageSize} / page &nbsp;</span>
                {renderList(
                    plusBtn(pageSize+5),
                    "fa fa-plus",
                    ()=> handlePageSize(pageSize+5))}
                &nbsp;&nbsp;

                {renderList(
                    minusBtn(pageSize-5),
                    "fa fa-minus",
                    ()=> handlePageSize(pageSize-5)
                )}

                &nbsp;&nbsp;
                <span className="m-auto font-weight-bolder">|</span>
                <span className="m-auto">&nbsp;<b>All Data:</b>&nbsp;</span>
                {renderList(
                    "rounded-circle",
                    "fa fa-users",
                    ()=> handlePageSize(itemCount)
                )}

                &nbsp;&nbsp;
                {/*span*/}
                <span className="m-auto font-weight-bolder">|</span>
                <span className="m-auto">&nbsp;<b>Page:</b> {currentPage} of {pageCount} &nbsp;</span>

                {renderList(
                    hasPrevious(currentPage, pageCount, itemCount),
                    "fa fa-angle-left",
                    ()=> onPageChange(currentPage-1)
                )}
                    &nbsp;&nbsp;

                {renderList(
                    hasNext(currentPage, pageCount, itemCount),
                    "fa fa-angle-right",
                    ()=> onPageChange(currentPage+1)
                )}
            </ul>
        </nav>
    </Fragment>;
};
Pagination.propTypes ={
    itemCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired,
    currentPage:PropTypes.number.isRequired
}

export default Pagination;
