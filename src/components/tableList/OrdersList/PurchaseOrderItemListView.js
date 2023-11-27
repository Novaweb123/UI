import Table from '../../table';
import TH from "../../table/th";
import Pagination from '../../pagination';
import useHelper from "../../../hooks/helpers.hook";
import {useNavigate} from 'react-router-dom';
import ActionMore from '../../actionsMore';
 

import {DEFAULTFILTERS} from "../../../constants/app.constants";
import Button from '../../button';
import Input from '../../input';
import Flex from '../../flex';
import PurchaseItem from '../../purchaseItem';

const PurchaseOrderItemListView = props => {
     

    const tableData = props?.itemdata;
    const {formatDateMMMDYYYY} = useHelper()
    const navigate = useNavigate()

    const handleKeyUp = (event) => {  
        console.log("event.keyCode",event)
        if (event.keyCode == 13) {
            
        }
        
    }

    const optionsAction = (item) => {
        let actionItems = [
            {
                text: 'Add Invoice Item',
                link: '/purchase-invoices/',
                isActionButton: true,
                onClickAction: () => {
                    props.setModalData({type:'addInvoiceItem'})
                   props.setIsModal(true);
                }
                //link: '/purchase-invoices/' + item?.ansoptionid
            },
            {
                text: 'Edit',
                link: '/purchase-invoices/'
                //link: '/purchase-invoices/' + item?.ansoptionid
            },

        ]
      
           
      
        return actionItems
    }


   



    return (
        <>
            <Table
                thead={
                    <tr>
                      
                        <TH sortBy={props.sortBy} sortKey="ansoption">Item Details</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">MSKU</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Account Type</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Quantity</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Price</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Discount</TH>
                        <TH nosort>Tax Amount</TH>
                        <TH nosort>Amount</TH>
                    </tr>
                }
               
                tbody= {tableData?.map(function (item, index) {
                    return (
                        
                        <tr>
                        <td>{item.Item_name}</td>
                        <td>{item.MSKU}</td>
                        <td>{item.account_type} </td>
                        <td>{item.Quantity}</td>
                        <td>{item.Price}</td>
                        <td>{item.Discount_amount}</td>
                        <td>{item.tax_amount}</td>
                        <td>{item.Amount}</td>
                    </tr>
                        
                    
                    )
                })}
                />

           
        </>
    )
}

export default PurchaseOrderItemListView;
