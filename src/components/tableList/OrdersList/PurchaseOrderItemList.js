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

const PurchaseOrderItemList = props => {
     
    console.log("props-->OrderItem",props);
    const [tableData, setTableData] = useState(props?.tableData)
    
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
                        
                        <PurchaseItem item={item} {...props} tableData={tableData} setTableData={setTableData} discountData={props.discountData} id={props.id}  setID={props.setID}  />
                        
                    
                    )
                })}
                    <PurchaseItemBottom  id={props.id} />

           
        </>
    )
}

export default PurchaseOrderItemList;
