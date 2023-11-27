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

import {toast} from "react-toastify";
import Text from '../../../components/text';
import CurrencyList from '../../../components/tableList/OrdersList/CurrencyList';


const ViewCurrencyView = (props) => {

    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const closeModal = () => {
        setIsModal(false);
    }

    

    const navigate = useNavigate();
    const BreadcrumbList = [
        {
            text: "Currency",
            link: "/currency"
        },
       
    ]


    const formik = useFormik({

        initialValues: {
            Currency: '',
            Country: '',
        },
        validationSchema: Yup.object({
            Currency: Yup.string().min(1, 'Please select valid Currency').required('Please select valid Currency'), 
            Country: Yup.string().min(1,'Please enter a valid Country').required('Please select valid Currency'), 
            
        }),
        onSubmit: (values, actions) => {
            console.log('values',values);
            values.type = 'addCurrency';
            values.uri = 'add';
            
            props.addService(values).then(()=>{
                console.log(props.addServiceData.data);
                if(props.addServiceData.data.status.result == 201){
                    toast.error("Already Added Currency");
                }else{
                    formik.values.Country = "";
                    formik.values.Currency = ""
                    toast.success("Sucessfully Added Currency");
                    props.setkeys();
                    DEFAULTFILTERS.type = 'getCurrency';
                    DEFAULTFILTERS.sortkey = '';
                    DEFAULTFILTERS.pagesize = DEFAULT_PAGE_COUNT;
                    props.getList(DEFAULTFILTERS)
                }
            });



           

        },
    });

    return (
        <>

<Breadcrumbs
                pageTitle="Currency"
                breadcrumbList={BreadcrumbList}
            />
          
          <Card>
                
          <div className="filter-form">
                <form onSubmit={formik.handleSubmit}>

                       

                        <div className="row mt-10">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Currency"
                                        type="text"
                                        name="Currency"
                                        autoFocus={true}
                                        value={formik.values.Currency}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.Currency && formik.errors.Currency ? (
                                            formik.errors.Currency
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox">

                                                


                                    <Input
                                        label="Country"
                                        type="text"
                                        name="Country"
                                        autoFocus={true}
                                        value={formik.values.Country}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.Country && formik.errors.Country ? (
                                            formik.errors.Country
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
                                    text="Save"
                                    large
                                />
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>
            <CurrencyList {...props} setIsModal={setIsModal} setModalData={setModalData} />
            </Card>



        </>
    );
};

export default ViewCurrencyView;
