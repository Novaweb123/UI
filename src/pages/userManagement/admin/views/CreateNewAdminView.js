import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../../components/breadcrumbs';
import Card from '../../../../components/card';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import Select from '../../../../components/input/select'

import useAdmin from '../hooks/admin.hook';
import {toast} from "react-toastify";
import useHttpHandler from "../../../../hooks/httphandler.hook";
import {DEFAULT_COUNTRY_ID} from "../../../../constants/app.constants";
import { useNavigate, useParams } from 'react-router-dom';
import { SiPhotopea } from 'react-icons/si';

const CreateNewAdminView = (props) => {
    const {post} = useHttpHandler()
    const navigate = useNavigate();
    const {
        goToCancel, goToDetails, lowercaseRegex,
        uppercaseRegex,
        numericRegex,
        nonalphanumeric,
        numbersOnly
    } = useAdmin();
    const {id} = useParams();

    
    
    const BreadcrumbList = [
        {
            text: "User Management",
            link: "/user-management"
        },
        {
            text: "Admin",
            link: "/user-management/admin"
        },
        {
            text: "Create new admin",
            link: "/user-management/admin/create-new-admin"
        },
    ]
    
    //name email mobile password usertypeid



    console.log("props->data",props.data);

    const formik = useFormik({
        initialValues: {
            username: props.data.username,
            email: props.data.email,
            name: props.data.name,
            password: props.data.password,
            mobile: props.data.mobile,
            usertypeid:props.data.usertypeid
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please enter a username'),
            email: Yup.string().email('Please enter a valid email address').required('Please enter a email address'),
            mobile: Yup.string()
                .required('Please enter a phone number')
                .min(10, 'Phone number should 10 characters')
                .matches(numbersOnly, 'Please enter a valid phone number'),
            name: Yup.string().required('Please enter a valid name'),
            password: Yup.string()
                .min(6, 'Your password must be atleast 6 characters')
                .required('Please enter a password'),
        }),
        onSubmit: (values, actions) => {

            actions.setSubmitting(false)
            let data = {
                
                mobile: values.mobile,
                email: values.email,
                username: values.username,
                password: values.password,
                usertypeid: values.usertypeid,
                
            }
           

            if(id != 0){
                
                values.uri = "edit";
                values.id = props.data.idno
                values.type = "editUser";

            }else{
                values.uri = "add";
                values.type = "createUser";

            }
            
            props.promiseService(values).then((data) => {
            
                toast.success(data.data.status.msg);
                navigate("/admin");
            
            });
            
            


        },
    });

    const roleOptions = [
        {
            label: 'Account Staff',
            value: '105'
        },
        {
            label: 'Admin',
            value: '101'
        },
    ]

    return (
        <>
            <Breadcrumbs
                pageTitle="Create new admin"
                breadcrumbList={BreadcrumbList}
            />
            <Card>
                <div className="create-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Username"
                                        type="text"
                                        name="username"
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
                                    <Input
                                        label="Name"
                                        type="text"
                                        name="name"
                                        autoFocus={true}
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.name && formik.errors.name ? (
                                            formik.errors.name
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Email Address"
                                        type="text"
                                        name="email"
                                        autoFocus={true}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.email && formik.errors.email ? (
                                            formik.errors.email
                                        ) : null}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label='Phone Number'
                                        type="text"
                                        maxlength="10"
                                        name="mobile"
                                        placeholder=""
                                        autoFocus={true}
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.mobile && formik.errors.mobile ? (
                                            formik.errors.mobile
                                        ) : null}
                                    />
                                </div>
                            </div>

                            
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Password"
                                        type="text"
                                        name="password"
                                        autoFocus={true}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.password && formik.errors.password ? (
                                            formik.errors.password
                                        ) : null}
                                    />
                                </div>
                            </div>
                            


                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <div className="form-field">
                                        <label className="form-label">UserType</label>

                                   

                                        <Select
                                            className="form-select-container"
                                            classNamePrefix="form-select-styled"
                                            name="usertypeid"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.usertypeid}
                                            onChange={((e)=>{
                                            formik.setFieldValue('usertypeid', e.target.value)})}  
                                            options={roleOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="button-action-wrapper">
                            <Button
                                type="type"
                                text="Cancel"
                                large
                                secondary
                                outline
                                onClick={goToCancel}
                            />
                            <Button
                                type="submit"
                                text="Create Admin"
                                large
                                disabled={formik.isSubmitting}
                                isSubmitting={formik.isSubmitting}
                            />
                        </div>
                    </form>
                </div>
            </Card>
        </>
    );
};

export default CreateNewAdminView;
