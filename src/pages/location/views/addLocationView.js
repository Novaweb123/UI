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


const AddLocationView = (props) => {

    const BreadcrumbList = [
        {
            text: "Location",
            link: "/location/add-location"
        },
      
    ]

    const formik = useFormik({
        initialValues: {
            locationname: '',
            address1: '',
            address2: '',
            street: '',
            city: '',
            district: '',
            state: '',
            country: '',
        },
        validationSchema: Yup.object({
            locationname: Yup.string('Please enter a Location Name').required('Please select valid Location Name'),
            address1: Yup.string('Please enter a valid Address1').required('Please select valid Address1'),
            address2: Yup.string('Please enter a valid Address2').required('Please select valid Address2'),
            
        }),
        onSubmit: (values, actions) => {
           
            actions.setSubmitting(true)
            values.uri = "add";
            values.type = "addLocation";
            props.addService(values).then(()=>{
                console.log(props.addServiceData.data);
                if(props.addServiceData.data.status.result == 201){
                    toast.error(props.addServiceData.data.status.msg);
                }else{
                    toast.success(props.addServiceData.data.status.msg);
                    formik.values.locationname = "";
                    formik.values.locationname = '';
                    formik.values.address1 = '';
                    formik.values.address2 =  '';
                    formik.values.street = '';
                    formik.values.city =  '';
                    formik.values.district =  '';
                    formik.values.state =  '';
                    formik.values.country =  '';
                }
            });

        },
    });

    return (
        <>

            <Breadcrumbs
                pageTitle="Add Location"
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
                                    <Input
                                        label="Location Name"
                                        type="text"
                                        name="locationname"
                                        autoFocus={true}
                                        value={formik.values.locationname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.locationname && formik.errors.locationname ? (
                                            formik.errors.locationname
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
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

                            <div className="col-12 col-md-6 ">
                                <div className="formBox">
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
         
                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Street"
                                        type="text"
                                        name="street"
                                        autoFocus={true}
                                        value={formik.values.street}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.street && formik.errors.street ? (
                                            formik.errors.street
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Input
                                        label="City"
                                        type="text"
                                        name="city"
                                        autoFocus={true}
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.city && formik.errors.city ? (
                                            formik.errors.city
                                        ) : null}
                                    />
                                </div>
                            </div>

       

                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Input
                                        label="District"
                                        type="text"
                                        name="district"
                                        autoFocus={true}
                                        value={formik.values.district}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.district && formik.errors.district ? (
                                            formik.errors.district
                                        ) : null}
                                    />
                                </div>
                            </div>


                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0 mt-30">
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

                            <div className="col-12 col-md-6 mt-30">
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
                                        text="Save"
                                        large
                                    />
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
           
        </>
    );
};

export default AddLocationView;
