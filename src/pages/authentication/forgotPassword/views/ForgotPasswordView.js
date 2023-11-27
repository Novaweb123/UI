import React from 'react';
import { useState } from "react";
import Input from "../../../../components/input";
import Flex from "../../../../components/flex";
import Button from "../../../../components/button";
import {useFormik} from "formik";
import * as Yup from "yup";
import useLogin from "../hooks/forgotPassword.hook";
import { useNavigate } from 'react-router-dom';
import LogoLarge from '../../../../components/svg/LogoLarge';
import Text from '../../../../components/text';
import ArrowLeftIcon from '../../../../components/svg/arrowLeftIcon'
import {toast} from "react-toastify";
import useHttpHandler from "../../../../hooks/httphandler.hook";

const ForgotPasswordView = (props) => {
    const {post} = useHttpHandler()
    const { goToForgotPasswordSendEmail } = useLogin()
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            employeeAddress: '',
        },
        validationSchema: Yup.object({
            employeeAddress: Yup.string().required('Please enter a valid email address'),
        }),
        onSubmit: (values, actions) => {
            post('forgot_password', {email: values.employeeAddress}).then((res)=>{
                actions.setSubmitting(false)
                const status = res.data.status
                const data = res.data.data
                if(status.result == '200') {
                    toast.success('email sent')
                    goToForgotPasswordSendEmail(values.employeeAddress);
                } else {
                    toast.error(status.msg)
                }

            })

        },
    });

    return (
        <>
            <Flex justifyContent="center" className="mb-40">
                <LogoLarge />
            </Flex>
            <div className="login-wrapper">
                <Text type="H2" text="Forgot Password?" className="mb-40 text-center" />
                <form onSubmit={formik.handleSubmit}>
                    <div className="formBox">
                        <Input
                            label="Email Address"
                            type="text"
                            name="employeeAddress"
                            placeholder="Your Email Address"
                            autoFocus={true}
                            value={formik.values.employeeAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            mandatory
                            errormessage={formik.touched.employeeAddress && formik.errors.employeeAddress ? (
                                formik.errors.employeeAddress
                            ) : null}
                        />
                    </div>
                    <Flex justifyContent="center" className="mb-48">
                        <Button
                            type="submit"
                            text="Send email"
                            large
                            disabled={formik.isSubmitting}
                            isSubmitting={formik.isSubmitting}
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

export default ForgotPasswordView;

