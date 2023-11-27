import React from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Card from '../../../components/card';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Flex from '../../../components/flex';
import Text from '../../../components/text';
import EyeIcon from '../../../components/svg/EyeIcon';
import useAccount from '../hooks/account.hook';
import { useMediaQuery } from 'react-responsive';
import useHttpHandler from '../../../hooks/httphandler.hook';
import {toast} from "react-toastify";

const AccountView = (props) => {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const {post} = useHttpHandler()
    const BreadcrumbList = [
        {
            text: "User Account",
            link: "/account"
        }
    ]
    const { 
        showExistingPassword,
        ShowExistingPasswordClick,
        showNewPassword,
        ShowNewPasswordClick,
        showConfirmNewPassword,
        ShowConfirmNewPasswordClick,
        goToHomePage
    } = useAccount();
    const formik = useFormik({
        initialValues: {
            existingPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: Yup.object({
            existingPassword: Yup.string().min(6, 'Your password must be atleast 6 characters').required('Please enter a valid existing password'),
            newPassword: Yup.string().min(6, 'Your password must be atleast 6 characters').required('Please enter a valid new password'),
            confirmNewPassword: Yup.string().when("newPassword", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("newPassword")],
                  "Both password need to be the same"
                )
              })

        }),
        onSubmit: (values, actions) => {

            const postData = {
                old_password: values.existingPassword,
                new_password: values.newPassword
            }
            post('setting_change_password', postData).then((res) => {
                actions.setSubmitting(false)
                const status = res.data.status
                const data = res.data.data

                if (status.result == '200') {
                    toast.success(status.msg)
                    //goToHomePage();
                } else {
                    toast.error(status.msg)
                }
            }).catch(() => actions.setSubmitting(false))


          
        },
    });


   
    return (
        <>
            <Breadcrumbs
                pageTitle="Change Password"
                breadcrumbList={BreadcrumbList}
            />
            <Card>
                <Text type="H3" text="Admin" className={`${isMobile ? 'mb-24' : 'mt-20 mb-48'}`} />
                <div className="filter-form">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Existing Password"
                                        type={showExistingPassword ? 'text' : 'password'}
                                        name="existingPassword"
                                        placeholder="***************"
                                        autoFocus={true}
                                        value={formik.values.existingPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.existingPassword && formik.errors.existingPassword ? (
                                            formik.errors.existingPassword
                                        ) : null}
                                        icon={
                                            <span className="password-visible-icon" onClick={ShowExistingPasswordClick}><EyeIcon visible={showExistingPassword} /></span>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="New Password"
                                        type={showNewPassword ? 'text' : 'password'}
                                        name="newPassword"
                                        placeholder="***************"
                                        autoFocus={true}
                                        value={formik.values.newPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.newPassword && formik.errors.newPassword ? (
                                            formik.errors.newPassword
                                        ) : null}
                                        icon={
                                            <span className="password-visible-icon" onClick={ShowNewPasswordClick}><EyeIcon visible={showNewPassword} /></span>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Confirm New Password"
                                        type={showConfirmNewPassword ? 'text' : 'password'}
                                        name="confirmNewPassword"
                                        placeholder="***************"
                                        autoFocus={true}
                                        value={formik.values.confirmNewPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        errormessage={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? (
                                            formik.errors.confirmNewPassword
                                        ) : null}
                                        icon={
                                            <span className="password-visible-icon" onClick={ShowConfirmNewPasswordClick}><EyeIcon visible={showConfirmNewPassword} /></span>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-end align-items-end">
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

export default AccountView;