import React from 'react';
import {connect, useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../../components/breadcrumbs';
import Card from '../../../components/card';
import Input from '../../../components/input';
import Button from '../../../components/button';
import useHttpHandler from '../../../hooks/httphandler.hook';

import Flex from '../../../components/flex';



const SettingView = (props) => {
    const {post} = useHttpHandler()
    const navigate = useNavigate()

    console.log("props",props?.settingsData);

    const BreadcrumbList = [
        {
            text: "Settings",
            link: "/settings/"
        },
 

    ]

   
    const formik = useFormik({
        initialValues: {
           
            
        },
        
        validationSchema: Yup.object({
         
           
        }),
        onSubmit: (values, actions) => {
            

                },
    });

    return (
        <>
            <Breadcrumbs
                pageTitle="Settings"
                breadcrumbList={BreadcrumbList}
            />

            <Card>
                
              
            </Card>
           
        </>
    );
};

export default SettingView;
