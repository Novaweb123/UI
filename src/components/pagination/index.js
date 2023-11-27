import React from "react";
import "./pagination.scss";

const Pagination = (props) => {
    const prevPage = () => {
        if (props.currentPage > 1) {
            props?.previousPage(props.currentPage)
        }
    }
    const nextPage = () => {
        if (props.currentPage < props.totalPages) {
            props?.nextPage(props.currentPage)
        }
    }
    const firstNumber = ()=> {
        return props.perPage * props.currentPage - props.perPage + 1

    }
    const lastNumber = ()=> {
        const num = props.perPage * props.currentPage
        return num > props.totalRecords ? props.totalRecords :  num
    }
    return (
        <>
            <div className={`showing-pagination-wrapper ${!props.noShowingcount ? '' : 'justify-content-end'}`}>
                {!props.noShowingcount && (
                    <div className="showing">
                        Showing {firstNumber()} to {lastNumber()} of {props.totalRecords} entries
                    </div>
                )}                
                <div className="pagination">
                    <span className="pagination-prev" onClick={prevPage}>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.7832 0.833252L0.83719 4.99992L4.7832 9.16659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    {props.currentPage} - {props.currentPage} of {props.totalPages}
                    <span className="pagination-next" onClick={nextPage}>
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.63477 9.16675L5.58078 5.00008L1.63477 0.833415" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Pagination;
