import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../components/breadcrumbs';
import Card from '../../../components/card';
import Flex from '../../../components/flex';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Select  from "react-select";
import {Modal, Popconfirm,Tag } from 'antd';

import {PREMIUM} from "../../../constants/app.constants";

import Lables from '../../../components/input/labels';
import PurchaseOrderItemList from '../../../components/tableList/OrdersList/PurchaseOrderItemList';
import { useEffect, useState } from 'react';
import AddInvoiceItemView from './addInvoiceItemView';
import PurchaseOrderItemListView from '../../../components/tableList/OrdersList/PurchaseOrderItemListView';

const ViewPurchaseInvoiceView = (props) => {

    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const closeModal = () => {
        setIsModal(false);
    }

    

    const BreadcrumbList = [
        {
            text: "Purchase Invoice",
            link: "/purchase-invoices"
        },
        {
            text: "View Purchase Invoice",
            link: "/purchase-invoices"
        },
    ]
    const formik = useFormik({
        initialValues: {
            username: '',
            memberID: '',
            accountStatus: '',
            fromDate: '',
            toDate: '',
        },
        validationSchema: Yup.object({
            username: Yup.string('Please enter a valid name'),
            memberID: Yup.string('Please enter a valid guru ID'),
            accountStatus: Yup.string('Please enter a valid guru ID'),
            fromDate: Yup.string('Please enter a valid from date'),
            toDate: Yup.string('Please enter a valid to date'),
        }),
        onSubmit: (values, actions) => {
            values.userTypeId = PREMIUM
            props.searchPremiumUser(values)
        },
    });
    
    var data;
    var itemdata;
    if(props?.serviceData?.purchaseHeaderDetails?.length > 0){
    data = props?.serviceData?.purchaseHeaderDetails[0];
    itemdata = props?.serviceData?.purchaseItems;

    }
    const exportLink = process.env.REACT_APP_EXPORT_URL + "type=single&id=" + data?.idno
    return (
        <>
 
<Breadcrumbs
                pageTitle="Add Purchase Invoice"
                breadcrumbList={BreadcrumbList}
            />
          
            <Card>
                
                <div className="filter-form">
                    <form onSubmit={formik.handleSubmit}>

                        {/*<div className="row">
                            
                            <div className="col-12">
                            <div className="col-12 justify-content-end align-items-end mt-10">
                                <Flex justifyContent="end">
                                    <Button
                                        type=""
                                        text="Add Purchase Invoice"
                                        className="btn-link-secondary"
                                    />
                                </Flex>
                            </div>
                            </div>
                            
                        </div>*/}

                        <div className="row mt-10">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Lables
                                        label="Bill Number"
                                        type="text"
                                        text={data?.Bill_number}
                                        name="billnumber"
                                        autoFocus={true}
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.username && formik.errors.username ? (
                                            formik.errors.username
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Lables
                                        label="Order Number /Indent Number"
                                        type="text"
                                        text="14923"
                                        name="ordernumber"
                                        autoFocus={true}
                                        value={data?.Order_number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.username && formik.errors.username ? (
                                            formik.errors.username
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ">
                                <div className="formBox">
                                    <Lables
                                        label="Vendor name"
                                        type="text"
                                        text={data?.Vendor_name}
                                        name="ordernumber"
                                        autoFocus={true}
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.username && formik.errors.username ? (
                                            formik.errors.username
                                        ) : null}
                                    />
                                </div>
                            </div>



                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Bill Date"
                                        type="date"
                                        text={data?.Bill_date}
                                        name="fromDate"
                                        autoFocus={true}
                                        value={formik.values.fromDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.fromDate && formik.errors.fromDate ? (
                                            formik.errors.fromDate
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Currency"
                                        name="memberID"
                                        text={data?.Currency}
                                        value={formik.values.memberID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[]}
                                        errormessage={formik.touched.memberID && formik.errors.memberID ? (
                                            formik.errors.memberID
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Total Amount"
                                        type="text"
                                        text={data?.Total_amount}
                                        name="fromDate"
                                        autoFocus={true}
                                        value={formik.values.fromDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.fromDate && formik.errors.fromDate ? (
                                            formik.errors.fromDate
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0 mt-30">
                                    <Lables
                                        label="Branch"
                                        name="memberID"
                                        text={data?.Branch}
                                        value={formik.values.memberID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[]}
                                        errormessage={formik.touched.memberID && formik.errors.memberID ? (
                                            formik.errors.memberID
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 mt-30">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Location"
                                        text={data?.Location}
                                        name="memberID"
                                        value={formik.values.memberID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[]}
                                        errormessage={formik.touched.memberID && formik.errors.memberID ? (
                                            formik.errors.memberID
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-6  mt-30">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Payment Terms"
                                        text={data?.Payment_terms}
                                        type="date"
                                        name="fromDate"
                                        autoFocus={true}
                                        value={formik.values.fromDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.fromDate && formik.errors.fromDate ? (
                                            formik.errors.fromDate
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4  mt-30">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Due Date"
                                        type="date"
                                        text={data?.Due_date}
                                        
                                        name="fromDate"
                                        autoFocus={true}
                                        value={formik.values.fromDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.fromDate && formik.errors.fromDate ? (
                                            formik.errors.fromDate
                                        ) : null}
                                    />
                                </div>
                            </div>


                            

                            <div className="col-12 col-md-6  mt-30" >
                                <div className="formBox">
                                    <Lables
                                        label="GST treatment"
                                        type="text"
                                        text={data?.GST_treatment}
                                        name="ordernumber"
                                        autoFocus={true}
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.username && formik.errors.username ? (
                                            formik.errors.username
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6  mt-30">
                                <div className="formBox">
                                    <Lables
                                        label="GST Number"
                                        type="text"
                                        text={data?.GST_number}
                                        name="ordernumber"
                                        autoFocus={true}
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.username && formik.errors.username ? (
                                            formik.errors.username
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-6  mt-10">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Source of Supply"
                                        name="memberID"
                                        text={data?.Source_of_supply}
                                        value={formik.values.memberID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[]}
                                        errormessage={formik.touched.memberID && formik.errors.memberID ? (
                                            formik.errors.memberID
                                        ) : null}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4  mt-10">
                                <div className="formBox mb-0">
                                    <Lables
                                        label="Source of Destination"
                                        name="accountStatus"
                                        text={data?.Source_of_destination}
                                        value={formik.values.accountStatus}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[
                                           
                                        ]}
                                        errormessage={formik.touched.accountStatus && formik.errors.accountStatus ? (
                                            formik.errors.accountStatus
                                        ) : null}
                                    />
                                </div>
                            </div>
                            

                        </div>
                        <div className="row">
                            
                            <div className="col-12 col-md-8">
                             </div>
                            <div className="col-12 col-md-4 d-flex justify-content-end align-items-end mt-10">
                                <Flex justifyContent="end">
                                <a href={exportLink} target="_blank"> Export</a>
                                   
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            
            <Card>
                            <PurchaseOrderItemListView {...props} itemdata = {itemdata} />

            </Card>

             {isModal && (

<Modal
              
closable={false}
title=""
centered
open={isModal}
onOk={() => setIsModal(false)}
onCancel={() => setIsModal(false)}

okButtonProps={{ style: { display: 'none' } }}
width={1000}
zIndex={10000}
>
<AddInvoiceItemView {...props}/>
</Modal>

              
            )}

        </>
    );
};
        
export default ViewPurchaseInvoiceView;
