import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../components/breadcrumbs';
import Card from '../../../components/card';
import Flex from '../../../components/flex';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Select  from "react-select";
import {toast} from "react-toastify";

import {FREEMIUM, PREMIUM} from "../../../constants/app.constants";

import PurchaseOrderItemList from '../../../components/tableList/OrdersList/PurchaseOrderItemList';
import { useEffect } from 'react';
import { Col } from 'antd';
import useHttpHandler from '../../../hooks/httphandler.hook';
import EditPurchaseOrderItemList from '../../../components/tableList/OrdersList/EditPurchaseOrderItemList';
import { useNavigate, useParams } from 'react-router-dom';
const EditPurchaseInvoiceView = (props) => {

    const {post} = useHttpHandler();
    const {billnumber} = useParams();
    console.log("props",props);
    const navigate = useNavigate();
    const BreadcrumbList = [
        {
            text: "Edit Purchase Invoice",
            link: "/purchase-invoices"
        },
        {
            text: "List",
            link: "/purchase-invoices"
        },
    ]
    const formik = useFormik({
        initialValues: {
            billnumber:props.purchaseHeader?.Bill_number,
            ordernumber:props.purchaseHeader?.Order_number,
            billdate:props.purchaseHeader?.Bill_date,
            currency:props.purchaseHeader?.CurrencyId,
            total_amount:props.purchaseHeader?.Total_amount,
            branch:props.purchaseHeader?.BranchId,
            vendor:props.purchaseHeader?.vendor_id,
            payment_terms:props.purchaseHeader?.Payment_terms,
            duedate:props.purchaseHeader?.Due_date,
            gst_treatment:props.purchaseHeader?.GST_treatment,
            gst_number:props.purchaseHeader?.GST_number,
            tds_percentage:'',
            tds_amount:'',
            cgst_amount:'',
            sgst_amount:'',
            source:props.purchaseHeader?.Source_of_supply,
            destination:props.purchaseHeader?.Source_of_destination,
          
        },
        validationSchema: Yup.object({
           
        }),
        onSubmit: (values, actions) => {
           
            actions.setSubmitting(true)
            values.uri = "edit";
            values.id = billnumber;
            values.location = 0;
           /* values.branch = formik.values.branch.id;
            values.currency = formik.values.currency.id;
            values.destination = formik.values.destination.id;
            values.source = formik.values.source.id;
            values.vendor = formik.values.vendor.id;*/

            console.log("edit->",values);
            
            
            values.type = "EditPurchaseInvoiceHeader";
           
            post('add', values).then((res) => {
                const status = res.data.status
                const data = res.data.data
                
                if (status.result == '200') {
                    
                    toast.success(status.msg)
                
                }
                
              }).catch(() => console.log("done"))
            
        },
    });

    const saveFinal = () => {
        

        post('add', {"type":"SaveFinal","id":billnumber}).then((res) => {
            const status = res.data.status
            const data = res.data.data
            
            if (status.result == '200') {
                
                toast.success(status.msg)
                    navigate("/purchase-invoices")
                
                
                
            
            }else{
                toast.success(status.msg)
            }
            
          }).catch(() => console.log("done"))
        

        
    }
    
console.log("1",props.id);
    return (
        <>

            <Breadcrumbs
                pageTitle="Add Purchase Invoice"
                breadcrumbList={BreadcrumbList}
            />
          
            <Card>
                
                <div className="filter-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row mt-10">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Bill Number"
                                        type="text"
                                        name="billnumber"
                                        autoFocus={true}
                                        value={formik.values.billnumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.billnumber && formik.errors.billnumber ? (
                                            formik.errors.billnumber
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Order Number /Indent Number"
                                        type="text"
                                        name="ordernumber"
                                        autoFocus={true}
                                        value={formik.values.ordernumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.ordernumber && formik.errors.ordernumber ? (
                                            formik.errors.ordernumber
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-12 ">
                                
                                    
                                <div className="formBox">
                                    <div className="form-field"  style={{marginTop:"10px"}} >
                                            
                                        <Select
                                            placeholder="Vendor"
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="vendor"
                                            defaultValue={{ id:props.purchaseHeader?.vendor_id, label: props.purchaseHeader?.Vendor_name }}
                                            onChange={((e)=>{
                                                
                                                

                                                
                                                post('get', {uri:"get",type:"GetVendorDiscount","vendorid":props.dropdownsData?.data.suppliers[e.value].idno}).then((res) => {
                                                    console.log(res);
                                                    const status = res.data.status
                                                     
                                                     if (status.result == '200') {
                                                        props.setDiscountData(res.data.data)
                                                    }
                                                    formik.setFieldValue('vendor', props.dropdownsData?.data.suppliers[e.value].idno);
                                                    formik.setFieldValue('gst_number', props.dropdownsData?.data.suppliers[e.value].GST_Number);
                                                 
                                                  }).catch(() => props.props.setLoading(false))
                                            
                                            })
                                            
                                            
                                            
                                            }
                                            options={props.dropdownsData?.suppliersOptions}
                                        />
                                    </div>

                                </div>
                            </div>



                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Bill Date"
                                        type="date"
                                        name="billdate"
                                        autoFocus={true}
                                        value={formik.values.billdate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.billdate && formik.errors.billdate ? (
                                            formik.errors.billdate
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field mt-20" >
                                        
                                        <Select
                                            placeholder="Currency"
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            defaultValue={{ id:props.purchaseHeader?.CurrencyId,label: props.purchaseHeader?.Currency}}
                                            name="currency"
                                            onChange={((e)=>{formik.setFieldValue('currency', e.value)})}  
                                            options={props.dropdownsData?.currencyOptions}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Total Amount"
                                        type="text"
                                        name="total_amount"
                                        autoFocus={true}
                                        value={formik.values.total_amount}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.total_amount && formik.errors.total_amount ? (
                                            formik.errors.total_amount
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field mt-20">
                                        
                                        <Select
                                        placeholder="Branch"
                                        defaultValue={{ id:props.purchaseHeader?.BranchId,label: props.purchaseHeader?.Branch}}
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="branch"
                                            onChange={((e)=>{formik.setFieldValue('branch', e.value)})}  
                                            options={props.dropdownsData?.locationOptions}
                                            errormessage={formik.touched.branch && formik.errors.branch ? (
                                                formik.errors.branch
                                            ) : null}
                                        />
                                    </div>
                                </div>
                            </div>                    
                            {/*                        
                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Location</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="location"
                                            onChange={((e)=>{formik.setFieldValue('location', e.value)})}  
                                            options={props.dropdownsData?.locationOptions}
                                        />
                                    </div>
                                </div>
                            </div>     
                            */}              
                           
                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Payment Terms"
                                        type="text"
                                        name="payment_terms"
                                        autoFocus={true}
                                        value={formik.values.payment_terms}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.payment_terms && formik.errors.payment_terms ? (
                                            formik.errors.payment_terms
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4 ">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Due Date"
                                        type="date"
                                        name="duedate"
                                        autoFocus={true}
                                        value={formik.values.duedate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.duedate && formik.errors.duedate ? (
                                            formik.errors.duedate
                                        ) : null}
                                    />
                                </div>
                            </div>


                            

                            <div className="col-12 col-md-4 " >
                                <div className="formBox">
                                    <Input
                                        label="GST treatment"
                                        type="text"
                                        name="gst_treatment"
                                        autoFocus={true}
                                        value={formik.values.gst_treatment}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.gst_treatment && formik.errors.gst_treatment ? (
                                            formik.errors.gst_treatment
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4 ">
                                <div className="formBox">
                                    <Input
                                        label="GST Number"
                                        type="text"
                                        name="gst_number"
                                        autoFocus={true}
                                        value={formik.values.gst_number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.gst_number && formik.errors.gst_number ? (
                                            formik.errors.gst_number
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-4 ">
                                <div className="formBox">
                                    <div className="form-field mt-20">
                                        
                                        <Select
                                        placeholder="Source of Supply"
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            defaultValue={{ id:props.purchaseHeader?.Source_of_supply, label: props.purchaseHeader?.Source_of_supply_name }}
                                            name="source"
                                            onChange={((e)=>{
                                                const item = {...props.id}
                                                item.source = e.value;
                                                props.setID(item);
                                                formik.setFieldValue('source', e.value)
                                            
                                            })}  
                                            options={props.dropdownsData?.statecodes}
                                        />
                                    </div>
                                </div>
                            </div>                       

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field mt-20">
                                        
                                        <Select
                                            placeholder="Destination"
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="destination"
                                            defaultValue={{ id:props.purchaseHeader?.Source_of_destination, label: props.purchaseHeader?.Source_of_destination_name }}
                                            onChange={((e)=>{
                                                
                                                formik.setFieldValue('destination', e.value);
                                                const item = {...props.id}
                                                item.destination = e.value;
                                                props.setID(item);
                                                
                                        
                                            })}  
                                            options={props.dropdownsData?.statecodes}
                                        />
                                    </div>
                                </div>
                            </div>     


                        </div>
                        <div className="row">
                            
                            <div className="col-12 col-md-8">
                             </div>
                            <div className="col-12 col-md-4 d-flex justify-content-end align-items-end ">
                                <Flex justifyContent="end">
                                    <Button
                                        type="submit"
                                        text="Save as Draft"
                                        small
                                    />
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>
            
                <EditPurchaseOrderItemList {...props} setIsModal={props?.setIsModal} setModalData={props?.setModalData}  discountData={props.discountData} setDiscountData={props.setDiscountData} id={props.id} setID={props.setID} />
                <Flex justifyContent="end">
                                    <Button
                                        type="submit"
                                        text="Draft"
                                        small
                                    />        
                                    <Button
                                        type="button"
                                        text="Save Final"
                                        small
                                        onClick={saveFinal}
                                    />
                                </Flex>
            </Card>
        </>
    );
};

export default EditPurchaseInvoiceView;
