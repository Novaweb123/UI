import Table from '../../table';
import TH from "../../table/th";
import Pagination from '../../pagination';
import useHelper from "../../../hooks/helpers.hook";
import {useNavigate} from 'react-router-dom';
import ActionMore from '../../actionsMore';
 

import {DEFAULTFILTERS} from "../../../constants/app.constants";
import Button from '../../button';

const PurchaseOrderList = props => {
     

    const tableData = props?.tableData?.listData
    
    const {formatDateMMMDYYYY} = useHelper()
    const navigate = useNavigate()
  

    const optionsAction = (item) => {
        let actionItems = [
      
            {
                text: 'Edit',
                link: '/purchase-invoices/edit-purchase-order/' + item.idno,
            
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
                        <TH sortBy={props.sortBy} sortKey="sequence">Order Number</TH>
                        <TH sortBy={props.sortBy} sortKey="ansoption">Bill Number</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Vendor Name</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Location</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Bill Date</TH>
                        <TH sortBy={props.sortBy} sortKey="dot">Due Date</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">Total Items</TH>
                        <TH sortBy={props.sortBy} sortKey="videolevel">View</TH>
                        <TH nosort>Action</TH>
                    </tr>
                }
                tbody={tableData?.map(function (item, index) {
                    return (
                        <tr>
                            <td>{item.Order_number}</td>
                            <td>{item.Bill_number}</td>
                            <td>{item.Vendor_name}</td>
                            <td>{item.Branch}</td>
                            <td>{formatDateMMMDYYYY(item.Bill_date)}</td>
                            <td>{formatDateMMMDYYYY(item.Due_date)}</td>
                            <td>

                            <Button
                                        type=""
                                        text={item.innerCount}
                                        className="btn-link-secondary"
                                        onClick={(e) => {
                                          
                                                props.setModalData({type:'viewInvoiceItem',"id":item.idno})
                                               props.setIsModal(true);
                                          
                                        }}
                                    />

                            </td>
                            <td>

                            <Button
                                        type=""
                                        text="View"
                                        className="btn-link-secondary"
                                        onClick={(e) => {
                                          
                                              navigate('/purchase-invoices/view-purchase/' + item.idno)
                                          
                                        }}
                                    />

                            </td>
                            <td>{item.Statusbit != 2 &&(
                                    <Button
                                    type=""
                                    text="Edit"
                                    className="btn-link-secondary"
                                    onClick={(e) => {
                                      
                                          navigate('/purchase-invoices/edit-purchase-order/' + item.idno)
                                      
                                    }}
                                />

                            )}
                                </td>
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

export default PurchaseOrderList;
