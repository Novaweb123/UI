import React from "react";
import './sort.scss';
import SortUpIcon from '../svg/sortUpIcon'
import SortDownIcon from '../svg/sortDownIcon'

const Sort = props => {
    const sortByAsc = ()=>{
        props.sortBy('asc', props.sortKey)
    }
    const sortByDesc = ()=> {
        props.sortBy('desc', props.sortKey)
    }
    return(
        <>
            <div className="sort-wrapper">
                <span className="sort-up" onClick={sortByAsc}>
                    <SortUpIcon />
                </span>
                <span className="sort-down" onClick={sortByDesc}>
                    <SortDownIcon />
                </span>
            </div>
        </>
    )
}

export default Sort;
