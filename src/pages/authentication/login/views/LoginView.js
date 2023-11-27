import React from 'react';
import Input from "../../../../components/input";
import Flex from "../../../../components/flex";
import Button from "../../../../components/button";
import {useFormik} from "formik";
import * as Yup from "yup";
import useLogin from "../hooks/login.hook";
import LogoLarge from '../../../../components/svg/LogoLarge';
import Text from '../../../../components/text';
import EyeIcon from '../../../../components/svg/EyeIcon'
import Logo from '../../../../assets/logo.png';
import {toast} from "react-toastify";
import useHttpHandler from "../../../../hooks/httphandler.hook";


const LoginView = (props) => {
    const {post} = useHttpHandler()
    const {
        openForgotPassword,
        showPassword,
        ShowPasswordClick,
        redirectTo,
        storeUserInfo,
        storeItemData
    } = useLogin()
    const formik = useFormik({
        initialValues: {
            uname: '',
            password: '',
        },
        validationSchema: Yup.object({
            uname: Yup.string().required('Please enter a valid email address'),
            password: Yup.string().required('Please enter a valid password'),
        }),
        onSubmit: (values, actions) => {
            actions.setSubmitting(true)
            values.type = 'login'
            post('login', values).then((res)=>{
                actions.setSubmitting(false)
                const status = res.data.status
                console.log(res);
                const data = res.data.data[0];
                
               // const itemDataA = res.data.options;
                if(status.result == '200') {
                    if(data.usertypeid != 102 && data.usertypeid != 103  && data.usertypeid != 104){
                    localStorage.setItem('token',data.sessiontoken)
                    localStorage.setItem('currentUserTypeId',data.usertypeid)
                  
                    /*
                    var itemData = [];

                    res.data.options?.map(function (item, index) {
                       
                        const gfg = JSON.stringify(item).toString();
                        //console.log(gfg);    
                        //var result = gfg.substring(1, gfg.length-1);
                       // if(index <1000){
                        itemData.push(JSON.parse(gfg.replace('object', '')));
                        //}
                        
                     })
                     
                     //localStorage.setItem('itemData',itemData);
                     */

                    storeUserInfo(data)
                    //storeItemData(res.data.options);
                    redirectTo(data.redirectcode, data.usertypeid)
                    }else{
                        toast.error("Invalid Usertype")    
                    }
                } else {
                    toast.error(status.msg)
                }
            }).catch(err => actions.setSubmitting(false))

        }
    });

    return (
        <>
            <Flex justifyContent="center" className="mb-3 mb-md-4">
                <div className="login-logo">
                <img src={Logo} height={"225px"}/>
                </div>
            </Flex>
            <div className="login-wrapper">
                <Text type="H2" text="Sign In" className="mb-20" />
                <form onSubmit={formik.handleSubmit}>
                    <div className="formBox">
                        <Input
                            label="Email Address"
                            type="text"
                            name="uname"
                            placeholder="Your Email Address"
                            autoFocus={true}
                            value={formik.values.uname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            mandatory
                            errormessage={formik.touched.uname && formik.errors.uname ? (
                                formik.errors.uname
                            ) : null}
                        />
                    </div>
                    <div className="formBox">
                        <Input
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="********"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errormessage={formik.touched.password && formik.errors.password ? (
                                formik.errors.password
                            ) : null}
                            icon={
                                <span className="password-visible-icon" onClick={ShowPasswordClick}><EyeIcon visible={showPassword} /></span>
                            }
                        />
                    </div>
                    <Flex justifyContent="end" className="mb-48">
                        <Button
                            linkSecondary
                            text="Forgot Password?"
                            onClick={openForgotPassword}
                            type="button"
                        />
                    </Flex>
                    <Flex justifyContent="center">
                        <Button
                            type="submit"
                            text="Login"
                            large

                            isSubmitting={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                        />
                    </Flex>
                </form>
            </div>

        </>
    );
};

export default LoginView;

