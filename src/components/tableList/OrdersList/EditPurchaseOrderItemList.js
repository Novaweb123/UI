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
import { useState } from 'react';
import PurchaseItemBottom from '../../purchaseItem/purchaseItemBottom';
import EditPurchaseItem from '../../purchaseItem/editPurchaseItem';

const EditPurchaseOrderItemList = props => {
     
   
    const [tableData, setTableData] = useState(props?.tableData)
    const [isTableData, setisTableData] = useState(false)
    
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
           <table width="100%">
                                 <tr>
                                    <td width="10%">
                                        Brand
                                        
                                    </td>
                                    <td width="20%">
                                    Item Name
                                      
                                
                                    </td>

                                    <td width="10%">
                                    Product Category
                                       
                                    </td>
                                   
                                    <td width="10%">
                                    MSKU
                                    </td>
                                    <td width="10%">
                                    Account Type
                                    
                                    </td> 
                                    <td width="10%">
                                    Batch
                                    
                                    </td> 
                                    <td width="10%">
                                    Manf Date
                                    
                                    </td> 
                                    <td width="10%">
                                    Expiry
                                    
                                    </td> 
                                </tr>   


                             </table>   
                          



                    {tableData?.map(function (item, index) {
                    return (
                        
                        <EditPurchaseItem item={item} {...props} tableData={tableData} setTableData={setTableData} discountData={props.discountData} id={props.id}  setID={props.setID} setisTableData={setisTableData} />
                        
                    
                    )
                    })}
                    {isTableData &&(
                    <PurchaseItemBottom  id={props.id} tableData={tableData} isTableData = {isTableData} />
                    )}





           
        </>
    )
}

export default EditPurchaseOrderItemList;
