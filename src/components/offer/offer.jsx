import React, {Fragment, useEffect, useState} from 'react';
import _ from 'lodash';
import {toast} from 'react-toastify';
import {paginateData} from "../../utils/paginateData";
import {getOfferings, deleteOffering} from "../../services/offeringService";
import {getCategories} from "../../services/categoryService";
import OfferFullView from "./OfferFullView";
import OfferSummary from "./OfferSummary";

 function Offer({user}) {
    const isAdmin = user;
    const size = Math.pow(10, 10);
    const [ offerings, setOfferings ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [searchQuery,setSearchQuery ] = useState("");
    const [ activeCategory, setActiveCategory ] = useState({
        _id: "", name: "All Category"
    });
    let [ sumData, setSumData ] = useState({});
    const [ pageSize, setPageSize ] = useState(size);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ sortColumn, setSortColumn ] = useState({
        path: 'nameBv',
        order:'asc'
    });
    useEffect(async ()=> {
            await handleOfferings();
            await handleCategories();
            setSumData(handleTotalQuantity);
        }, []
    );

    async function handleCategories () {
        const {data} = await getCategories();
        const categories = [activeCategory, ...data];
        setCategories(categories);
        // setSumData(handleTotalQuantity);
    }

    async function handleOfferings () {
       const offering = getOfferings();
       const {data} = await offering;
        setOfferings(data);
        // setSumData(handleTotalQuantity);
    }
    const handleCategorySelect = (category) =>{
        setSearchQuery("");
        setActiveCategory(category);
        // setSumData(handleTotalQuantity);
        setCurrentPage(1);
    }
    const handleDelete = async(data) =>{
        const originalOfferings =  offerings;
        const offers = originalOfferings.filter(offer =>
                offer._id !== data._id
            );
        setOfferings(offers);
        try{
            await deleteOffering(data._id);
            toast.info(`${data.nameBv} Data is Delete Successfully from Database`);
        } catch (e) {
            if(e.response && e.response.status === 404)
                toast.error("This Offering is already Deleted");
            setOfferings(originalOfferings);
        }

    };

    const handleTotalQuantity = () =>{
        const totalQuantity = {};
        // count numbers
        paginateOfferings.map((item)=> Object
                .entries(item)
                .map(([key, val])=>{
                    if (typeof (val) === 'number') totalQuantity[key] = totalQuantity[key] ? (totalQuantity[key] + val) : val;
                })
            );
        return totalQuantity;
    };
    const handlePageChange = (page)=>{
        setCurrentPage(page);
    };
    const handlePageSize = (pageLength) =>{
        if(pageLength <= 0)
            setPageSize(1)
        else
            setPageSize(pageLength >= offerings.length ? offerings.length : pageLength);
    };
    const handleSearch = query =>{
        setSearchQuery(query);
        setActiveCategory(null);
        setCurrentPage(1);
    }
    const handleSort = sortCol =>{
        setSortColumn(sortCol);
    }
    const getPageData =()=>{
        let filterData = offerings
        if(searchQuery){
            filterData = offerings.filter(offer =>
            offer.nameBv.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        else if (activeCategory && activeCategory._id){
            filterData = offerings.filter((offer) => offer.category._id === activeCategory._id);
        }
        const sortedData = _.orderBy(filterData, [sortColumn.path], [sortColumn.order]);
        const paginateOfferings = paginateData(sortedData, currentPage, pageSize);
        return {paginateOfferings}

    };
    const{paginateOfferings} = getPageData();
    return (
        <Fragment>
            {isAdmin && (
             <OfferFullView
                 categories={categories}
                 activeCategory={activeCategory}
                 handleCategorySelect={handleCategorySelect}
                 searchQuery={searchQuery}
                 handleSearch={handleSearch}
                 handleDelete={handleDelete}
                 offerings={offerings}
                 setOfferings={setOfferings}
                 totalQuantity={handleTotalQuantity()}
                 pageSize={pageSize}
                 handlePageSize={handlePageSize}
                 currentPage={currentPage}
                 paginateOfferings={paginateOfferings}
                 handlePageChange={handlePageChange}
                 sortColumn={sortColumn}
                 onSort={handleSort}
             />
            )}
            {!isAdmin && (
            <OfferSummary total={handleTotalQuantity()} />
              )}
        </Fragment>
    );
}

export default Offer;
