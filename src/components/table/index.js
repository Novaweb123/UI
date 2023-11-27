import React from "react";
import './table.scss';

const Table = props => {
    return(
        <>
            <div className="table-responsive">
                <table>
                    <thead>
                        {props.thead}
                    </thead>
                    <tbody>
                        {props.tbody}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table; 