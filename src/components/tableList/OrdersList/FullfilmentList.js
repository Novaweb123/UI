import Table from '../../table';
import TH from "../../table/th";
import Pagination from '../../pagination';
import useHelper from "../../../hooks/helpers.hook";
import {useNavigate} from 'react-router-dom';
import ActionMore from '../../actionsMore';
 

import {DEFAULTFILTERS} from "../../../constants/app.constants";
import Button from '../../button';

const FullfilmentList = props => {
     

    const tableData = props?.tableData?.listData
    
    const {formatDateMMMDYYYY} = useHelper()
    const navigate = useNavigate()
  

   
    return (
        <>
            <Table
                thead={
                    <tr>
                        <TH sortBy={props.sortBy} sortKey="sequence">Order Details</TH>
                                         <TH sortBy={props.sortBy} sortKey="videolevel">Customer Name</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Item Name</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Item SKU</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Item Brand</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Order Quantity</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Sales Cannel</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Delivery State</TH>
                      
                    </tr>
                }
                tbody={tableData?.map(function (item, index) {
                    return (
                        <tr>
                            <td><div>Order Id : {item.order_id}</div><div>Order Number : {item.order_number}</div><div>Order Status : {item.order_status}</div></td>
                            
                            <td>{item.customer_name}</td>
                            <td>{item.item_name}</td>
                            <td>{item.item_sku}</td>
                            <td>{item.item_brand}</td>
                            <td><div> Qyt : {item.order_qty}</div><div>Total Item Qty : {item.total_item_qty}</div></td>
                            <td>{item.sales_channel}</td>
                            <td>{item.delivery_state}</td>
                         
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

export default FullfilmentList;
