import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../../components/breadcrumbs';
import Card from '../../../../components/card';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import Select from '../../../../components/input/select'
import useAdmin from '../hooks/admin.hook';
import {useEffect} from "react";
import {DEFAULT_COUNTRY_ID} from "../../../../constants/app.constants";
import {toast} from "react-toastify";
import useHttpHandler from "../../../../hooks/httphandler.hook";

const EditAdminView = (props) => {
    const { goToDetails, goToCancel, userId } = useAdmin();
    const {userDetails} = props

    const {post} = useHttpHandler()
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
            text: "Edit Admin",
            link: "/user-management/admin/edit-admin/"+userId
        },
    ]
    const formik = useFormik({
        initialValues: {
            username: userDetails?.uname ? userDetails?.uname : '',
            emailAddress: userDetails?.email ? userDetails?.email : '',
            name: userDetails?.fullname ? userDetails?.fullname : '',
            password: '',
            role: userDetails?.usertypeid ? userDetails?.usertypeid : '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please enter a valid username'),
            emailAddress: Yup.string().required('Please enter a valid email address'),
            name: Yup.string().required('Please enter a valid name'),
            password: Yup.string().min(6, 'Your password must be atleast 6 characters'),
            role: Yup.string().required('Please enter a valid role'),
        }),
        onSubmit: (values, actions) => {

            let data = {
                country_id: DEFAULT_COUNTRY_ID,
                usertype_id: values.role,
                mobile: values.mobile,
                email: values.emailAddress,
                uname: values.username,
                password: values.password,
                fullname: values.name,
                ref_code: 0
            }

            post('user_registration', data).then((res) => {
                actions.setSubmitting(false);
                const status = res.data.status
                const data = res.data.data
                if (status.result == '200') {
                    toast.success(status.msg)
                    goToDetails(data);
                } else {
                    toast.error(status.msg)
                }
            })

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

    useEffect(()=>{
        formik.setFieldValue('role', userDetails?.usertypeid)
    },[])

    return (
        <>
            <Breadcrumbs
                pageTitle="Edit Admin"
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
                                        label="Password"
                                        type="password"
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
                                <div className="formBox mb-0">
                                    <Select
                                        label="Role"
                                        name="role"
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={roleOptions}
                                        errormessage={formik.touched.role && formik.errors.role ? (
                                            formik.errors.role
                                        ) : null}
                                    />
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
                                text="Save Changes"
                                large
                            />
                        </div>
                    </form>
                </div>
            </Card>
        </>
    );
};

export default EditAdminView;
