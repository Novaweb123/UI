import React from 'react';
import Input from "../../../../components/input";
import Flex from "../../../../components/flex";
import Button from "../../../../components/button";
import {useFormik} from "formik";
import * as Yup from "yup";
import useSetNewPassword from "../hooks/setNewPassword.hook";
import { useNavigate } from 'react-router-dom';
import LogoLarge from '../../../../components/svg/LogoLarge';
import Text from '../../../../components/text';
import ArrowLeftIcon from '../../../../components/svg/arrowLeftIcon'
import EyeIcon from '../../../../components/svg/EyeIcon'
import useHttpHandler from "../../../../hooks/httphandler.hook";

const SetNewPasswordView = (props) => {
    const {post} = useHttpHandler()
    const {
        goToPasswordResetSuccessful,
        showPassword,
        ShowPasswordClick,
        showConfirmNewPassword,
        ShowConfirmNewPasswordClick,
    } = useSetNewPassword()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().min(6, 'Your password must be atleast 6 characters').required('Please enter a valid password'),
            confirmNewPassword: Yup.string().min(6, 'Your password must be atleast 6 characters').required('Please enter a valid password'),
        }),
        onSubmit: (values, actions) => {
            updatePassword(values)

        },
    });
    const updatePassword = (values)=> {
        const postData = {
            email: sessionStorage.getItem('email'),
            password: values.newPassword
        }
        post('change_password', postData).then((res) => {
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                goToPasswordResetSuccessful();
            }
        })
    }

    return (
        <>
            <Flex justifyContent="center" className="mb-40">
                <LogoLarge />
            </Flex>
            <div className="login-wrapper">
                <Text type="H2" text="Set New Password" className="text-center" />
                <div className="row">
                    <Text type="PARAGRAPH" text="Your new password must be different than previously used password" className="col-12 col-md-8 mx-auto text-center" />
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="formBox">
                        <Input
                            label="New Password"
                            type={showPassword ? 'text' : 'password'}
                            name="newPassword"
                            placeholder="********"
                            autoFocus={true}
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            mandatory
                            errormessage={formik.touched.newPassword && formik.errors.newPassword ? (
                                formik.errors.newPassword
                            ) : null}
                            icon={
                                <span onClick={ShowPasswordClick}><EyeIcon visible={showPassword} /></span>
                            }
                        />
                    </div>
                    <div className="formBox">
                        <Input
                            label="Confirm New Password"
                            type={showConfirmNewPassword ? 'text' : 'password'}
                            name="confirmNewPassword"
                            placeholder="********"
                            autoFocus={true}
                            value={formik.values.confirmNewPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            mandatory
                            errormessage={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? (
                                formik.errors.confirmNewPassword
                            ) : null}
                            icon={
                                <span onClick={ShowConfirmNewPasswordClick}><EyeIcon visible={showConfirmNewPassword} /></span>
                            }
                        />
                    </div>
                    <Flex justifyContent="center" className="mb-48">
                        <Button
                            type="submit"
                            text="CHANGE PASSWORD"
                            large
                        />
                    </Flex>
                </form>
                <Flex justifyContent="center">
                    <Button
                        linkLittle
                        iconLeft={<ArrowLeftIcon width="16" height="14"/>}
                        text="Back to login"
                        onClick={()=>navigate('/')}
                    />
                </Flex>
            </div>

        </>
    );
};

export default SetNewPasswordView;

