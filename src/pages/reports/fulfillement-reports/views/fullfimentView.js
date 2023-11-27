import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../../components/breadcrumbs';
import Card from '../../../../components/card';
import Flex from '../../../../components/flex';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import Select  from "react-select";
import {Modal, Popconfirm,Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DEFAULT_PAGE_COUNT } from '../../../../constants/app.constants';
import FullfilmentList from '../../../../components/tableList/OrdersList/FullfilmentList';

const FulfillementView = (props) => {

    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState({});
    

    
    const closeModal = () => {
        setIsModal(false);
    }

    

    const navigate = useNavigate();
    const BreadcrumbList = [
        {
            text: "Purchase Invoice",
            link: "/purchase-invoices"
        },
        {
            text: "List",
            link: "/purchase-invoices"
        },
    ]
    const formik = useFormik({

        
        initialValues: {
            sales_channel: '',
            delivery_state: '',
            brand: '',
            location:'',
            fromDate: '',
            toDate: '',
        },
        validationSchema: Yup.object({
            delivery_state: '',
            sales_channel: '',
            brand: '',
            location:'',
            fromDate: '',
            toDate: '',
        }),
        onSubmit: (values, actions) => {
            values.type = 'getFulfillmentReports';
            values.branch ='';
            values.billnumber = '';
            values.ordernumber  = '';
            values.branch = '';
            values.location = '';
            values.sortkey = '';
    
            values.pagesize = 1000000;
            values.pagesize = 100000;
            values.sortby = '';
            values.sortkey = '';
            values.page = 1;
            values.perpage = 100000; 

            props.getList(values)
        },
    });

    return (
        <>

<Breadcrumbs
                pageTitle="Fullfilment Report"
                breadcrumbList={BreadcrumbList}
            />
          
            <Card>
                
            <div className="create-form">
                <form onSubmit={formik.handleSubmit}>

                    
                        <div className="row mt-10">
                            {/*
                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <Input
                                        label="Fulfill From"
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
                                        */}

                           
                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Item Brand</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="brand"
                                            onChange={((e)=>{formik.setFieldValue('brand', e.value)})}  
                                            options={props.dropdownsData?.brands}
                                        />
                                    </div>
                                </div>
                            </div>




                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Delivery State</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="delivery_state"
                                            onChange={((e)=>{formik.setFieldValue('delivery_state', e.value)})}  
                                            options={props.dropdownsData?.locationOptions}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Sales Channel</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="sales_channel"
                                            onChange={((e)=>{formik.setFieldValue('sales_channel', e.value)})}  
                                            options={props.dropdownsData?.channel_ids}
                                        />
                                    </div>
                                </div>
                            </div>

                            
                           
                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="From Date"
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

                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="To Date"
                                        type="date"
                                        name="toDate"
                                        autoFocus={true}
                                        value={formik.values.toDate}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.toDate && formik.errors.toDate ? (
                                            formik.errors.toDate
                                        ) : null}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            
                            <div className="col-12 col-md-8">
                             </div>
                            <div className="col-12 col-md-2">
                                <Flex justifyContent="end">
                                    <Button
                                        type="submit"
                                        text="Search"
                                        large
                                        
                                    />

                                </Flex>
                            </div>

                            <div className="col-12 col-md-2">
                                <Flex justifyContent="end">

                           
                                
                                   
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>

            <FullfilmentList {...props}  />
          
            </Card>


         

        </>
    );
};

export default FulfillementView;
