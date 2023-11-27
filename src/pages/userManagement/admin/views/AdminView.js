import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../../components/breadcrumbs';
import Card from '../../../../components/card';
import Flex from '../../../../components/flex';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import Select from '../../../../components/input/select'
import {useNavigate} from "react-router-dom";
import AdminList from '../../../../components/tableList/userManagement/adminList';
import UserManagementNav from '../../../../components/userManagementNav';


import {ACCOUNT_STAFF, ADMIN, DEFAULTFILTERS, DEFAULT_PAGE_COUNT, FREEMIUM} from "../../../../constants/app.constants";
import { useState } from 'react';

const AdminView = (props) => {
    const navigate = useNavigate();

    const [isModal, setIsModal] = useState(false);
    const [modalData, setModalData] = useState({});


    const BreadcrumbList = [
        {
            text: "User Management",
            link: "/user-management"
        },
        {
            text: "Admin",
            link: "/user-management/admin"
        },
    ]

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

    const formik = useFormik({
        initialValues: {
            name: '',
            emailAddress: '',
            role: '',
            fromDate: '',
            toDate: '',
        },
        validationSchema: Yup.object({
            name: Yup.string('Please enter a valid name'),
            emailAddress: Yup.string('Please enter a valid email address'),
            role: Yup.string('Please enter a valid role'),
            fromDate: Yup.string('Please enter a valid from date'),
            toDate: Yup.string('Please enter a valid to date'),
        }),
        onSubmit: (values, actions) => {
            props.setLoading(true)
            props.setkeys();
            DEFAULTFILTERS.type = 'getUsers';
            DEFAULTFILTERS.username = values.name;
            DEFAULTFILTERS.email  = values.emailAddress;
            DEFAULTFILTERS.pagesize = DEFAULT_PAGE_COUNT;
            props.getList(DEFAULTFILTERS)
        },
    });

    return (
        <>
            <Breadcrumbs
                pageTitle="User Management"
                breadcrumbList={BreadcrumbList}
            />
            <Card>
            
                
                <div className="filter-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-4">
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
                            <div className="col-12 col-md-4">
                                <div className="formBox">
                                    <Input
                                        label="Email Address"
                                        type="text"
                                        name="emailAddress"
                                        autoFocus={true}
                                        value={formik.values.emailAddress}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.emailAddress && formik.errors.emailAddress ? (
                                            formik.errors.emailAddress
                                        ) : null}
                                    />
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
                            <div className="col-12 col-md-4 d-flex justify-content-end align-items-end">
                                <Flex justifyContent="end">
                                    <Button
                                        type="submit"
                                        text="Search"
                                        large
                                    />
                                    <Button
                                        type="button"
                                        text="Add Admin"
                                        small
                                        onClick={() => 
                                            navigate('/admin/create-new-admin/0')
                                        }
                                    />
                                </Flex>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
            <Card>
                <AdminList {...props}  setIsModal={setIsModal} setModalData={setModalData}/>
            </Card>
        </>
    );
};

export default AdminView;
