import React, {Fragment} from 'react';
import OfferingTable from "./OfferingTable";
import Pagination from "../common/pagination";
import OfferingCategory from "./OfferingCategory";

const OfferFullView = ({categories, activeCategory, handleCategorySelect, searchQuery, handleSearch, handleDelete, offerings, totalQuantity, pageSize, handlePageSize, currentPage, paginateOfferings, handlePageChange, sortColumn, onSort}) =>{
    const {length} = offerings;
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12">
                    <OfferingCategory
                        title="Category"
                        categories={categories}
                        activeCategory={activeCategory}
                        data={offerings}
                        onCategorySelect={handleCategorySelect}
                    />
                </div>
                <div className="col">
                    <div className="w-75 m-auto">
                        <Pagination
                            itemCount={length || 0}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            handlePageSize={handlePageSize}
                        />
                    </div>
                    <div className="container App my-3">
                        <OfferingTable
                            searchQuery={searchQuery}
                            handleSearch={handleSearch}
                            pageSize={pageSize}
                            handlePageSize={handlePageSize}
                            totalQuantity={totalQuantity}
                            offerings={offerings}
                            paginateOfferings={paginateOfferings}
                            handleDelete={handleDelete}
                            sortColumn={sortColumn}
                            onSort={onSort}
                        />

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default OfferFullView;
