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
import LocationList from '../../../components/tableList/OrdersList/LocationList';


const ViewLocationView = (props) => {

    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const closeModal = () => {
        setIsModal(false);
    }
 
    

    const navigate = useNavigate();
    const BreadcrumbList = [
        {
            text: "Location",
            link: "/location"
        },
       
    ]
    const formik = useFormik({


  
        
        initialValues: {
            location: '',
            address1: '',
            address2: '',
            state:'',
            country: '',
        },
        validationSchema: Yup.object({
            location: '',
            address1: '',
            address2: '',
            state:'',
            country: '',
        }),
        onSubmit: (values, actions) => {
            console.log('values',values);
            values.type = 'getLocation';
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
                pageTitle="Location"
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
                                        text="Add Location"
                                        className="btn-link-secondary"
                                        onClick={(e) => {
                                            navigate("/location/add-location");
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
                                        label="Location"
                                        type="text"
                                        name="location"
                                        autoFocus={true}
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.location && formik.errors.location ? (
                                            formik.errors.location
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <Input
                                        label="Address1"
                                        type="text"
                                        name="address1"
                                        autoFocus={true}
                                        value={formik.values.address1}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.address1 && formik.errors.address1 ? (
                                            formik.errors.address1
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Address2"
                                        type="text"
                                        name="address2"
                                        autoFocus={true}
                                        value={formik.values.address2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.address2 && formik.errors.address2 ? (
                                            formik.errors.address2
                                        ) : null}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                  <Input
                                        label="State"
                                        type="text"
                                        name="state"
                                        autoFocus={true}
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.state && formik.errors.state ? (
                                            formik.errors.state
                                        ) : null}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="formBox mb-0">
                                
                                <Input
                                        label="Country"
                                        type="text"
                                        name="country"
                                        autoFocus={true}
                                        value={formik.values.country}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.country && formik.errors.country ? (
                                            formik.errors.country
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
                                    <Button
                                        type="submit"
                                        text="Search"
                                        large
                                        
                                    />

                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>
            <LocationList {...props} setIsModal={setIsModal} setModalData={setModalData} />
            </Card>



        </>
    );
};

export default ViewLocationView;
