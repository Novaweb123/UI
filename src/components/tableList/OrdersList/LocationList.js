import Table from '../../table';
import TH from "../../table/th";
import Pagination from '../../pagination';
import useHelper from "../../../hooks/helpers.hook";
import {useNavigate} from 'react-router-dom';
import ActionMore from '../../actionsMore';

import {DEFAULTFILTERS} from "../../../constants/app.constants";
import Button from '../../button';

const LocationList = props => {
     

    const tableData = props?.tableData?.listData
    
    const {formatDateMMMDYYYY} = useHelper()
    const navigate = useNavigate()
  

    return (
        <>
            <Table
                thead={
                    <tr>
                        <TH sortBy={props.location} sortKey="sequence">Location</TH>
                        <TH sortBy={props.address1} sortKey="ansoption">Address</TH>
                        <TH sortBy={props.address2} sortKey="videolevel">Address2</TH>
                        <TH sortBy={props.country} sortKey="videolevel">Country</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Allow Sales</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Allow Purchase</TH>
                        <TH nosort>Action</TH>
                    </tr>
                }
                tbody={tableData?.map(function (item, index) {
                    return (
                        <tr>
                            <td>{item.LocationName}</td>
                            <td>{item.Address1}</td>
                            <td>{item.Address2 + ", " + item.Street  + ", " + item.City  + ", " + item.District} </td>
                            <td>{item.Country}</td>
                            <td>{item.AllowSales}</td>
                            <td>{item.AllowPurchase}</td>
                        </tr>
                    )
                })}
            />
            <Pagination
                totalPages={props?.tableData?.totalPages}
                currentPage={props?.tableData?.currentPage}
                totalRecords={props?.tableData?.totalRecords}
                nextPage={props.nextPage}
                previousPage={props.previousPage}
                perPage={props.filterKeys.perpage}
            />

        
        </>
    )
}

export default LocationList;
