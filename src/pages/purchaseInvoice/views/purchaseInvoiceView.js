import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../components/breadcrumbs';
import Card from '../../../components/card';
import Flex from '../../../components/flex';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Select  from "react-select";
import {Modal, Popconfirm,Tag } from 'antd';

import {DEFAULTFILTERS, DEFAULT_PAGE_COUNT, FREEMIUM, PREMIUM} from "../../../constants/app.constants";
import VideoCategoryTopicList from '../../../components/tableList/OrdersList/PurchaseOrderList';
import PurchaseOrderList from '../../../components/tableList/OrdersList/PurchaseOrderList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Text from '../../../components/text';
import PurchasePopUp from '../purchasePopUp';

const PurchaseInvoiceView = (props) => {

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
            billnumber: '',
            ordernumber: '',
            branch: '',
            location:'',
            fromDate: '',
            toDate: '',
        },
        validationSchema: Yup.object({
            billnumber: '',
            ordernumber: '',
            branch: '',
            location:'',
            fromDate: '',
            toDate: '',
        }),
        onSubmit: (values, actions) => {
            console.log('values',values);
            values.type = 'getPurchaseInvoiceHeader';
            values.pagesize = DEFAULT_PAGE_COUNT;
            values.sortby = '';
            values.sortkey = '';
            values.page = 1;
            values.perpage = DEFAULT_PAGE_COUNT; 

            props.getList(values)
        },
    });

    return (
        <>

<Breadcrumbs
                pageTitle="Purchase Invoice"
                breadcrumbList={BreadcrumbList}
            />
          
            <Card>
                
            <div className="create-form">
                <form onSubmit={formik.handleSubmit}>

                    <div className="row">
                            
                            <div className="col-12">
                            <div className="col-12 justify-content-end align-items-end mt-10">
                                <Flex justifyContent="end">
                                    <Button
                                        type=""
                                        text="Add Purchase Invoice"
                                        className="btn-link-secondary"
                                        onClick={(e) => {
                                            navigate("/purchase-invoices/add-purchase-order");
                                        }}
                                    />
                                </Flex>
                            </div>
                            </div>
                            
                        </div>

                        <div className="row mt-10">
                            <div className="col-12 col-md-4">
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

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <Input
                                        label="Order Number"
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

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Branch</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="branch"
                                            onChange={((e)=>{formik.setFieldValue('branch', e.value)})}  
                                            options={[]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">Location</label>
                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="location"
                                            onChange={((e)=>{formik.setFieldValue('branch', e.value)})}  
                                            options={[]}
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

                                <Button
                                        type="button"
                                        text="Export"
                                        large
                                        onClick={()=>{

                                            const exportLink = process.env.REACT_APP_EXPORT_URL + "type=date&fromdate=" + formik.values.fromDate + "&todate=" + formik.values.toDate;
                                            console.log(exportLink);
                                            var win = window.open(exportLink, '_blank');
                                            win.focus();

                                        }}
                                        
                                 />
                                
                                   
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>
            <PurchaseOrderList {...props} setIsModal={setIsModal} setModalData={setModalData} />
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
                    <PurchasePopUp {...props} modalData={modalData} />
                    </Modal>

            )}

        </>
    );
};

export default PurchaseInvoiceView;
