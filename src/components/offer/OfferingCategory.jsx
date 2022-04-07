import React, {Fragment} from 'react';
import {ZeroLabel, itemTally} from "../../utils/zeroLabel";

const OfferingCategory = ({title, data, categories, activeCategory, onCategorySelect, textProperty, idProperty}) => {
    return (
        <Fragment>
            <div className="App">
                <h2>{title}</h2>
                <ul className="list-group">
                    {categories.map((category) => (
                    <li
                        key={category[idProperty] || category[textProperty]}
                        onClick={ () => onCategorySelect(category)}
                        className={
                            category === activeCategory
                                ? "list-group-item active"
                                : "list-group-item"
                        }>
                        {category[textProperty]}
                        <span className="badge badge-warning ml-2">
                        {ZeroLabel(itemTally(data, category))}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

OfferingCategory.defaultProps ={
    textProperty: "name",
    idProperty: "_id"

}
export default OfferingCategory;
