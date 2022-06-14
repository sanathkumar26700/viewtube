import React from 'react';
import {useDataContext} from '../../Context/dataContext'
import './filter.css';

function Filter() {

    const {data:{categoryData, selectedCategory}, dataDispatch} = useDataContext()

    return (
        <div className="filter__container">
            {categoryData.map((category) =>{
                return (
                    <button 
                        className= {`category--input ${selectedCategory === category.categoryName ? `active` : ``}`}
                        id={category._id}
                        onClick = {(e) =>  dataDispatch({type : "SORT_BY_CATEGORY" , payload : category.categoryName})}
                    >
                        {category.categoryName}
                    </button>)}
            )}
        </div>
    );
}

export default Filter;