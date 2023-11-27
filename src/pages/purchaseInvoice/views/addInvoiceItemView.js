import {useFormik} from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from '../../../components/breadcrumbs';
import Card from '../../../components/card';
import Flex from '../../../components/flex';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Select  from "react-select";


import {FREEMIUM, PREMIUM} from "../../../constants/app.constants";

const AddInvoiceItemView = (props) => {



    const BreadcrumbList = [
        {
            text: "Add Purchase Invoice",
            link: "/purchase-invoices"
        },
        {
            text: "List",
            link: "/purchase-invoices"
        },
    ]
    const formik = useFormik({
        initialValues: {
            username: '',
            memberID: '',
            accountStatus: '',
            fromDate: '',
            toDate: '',
        },
        validationSchema: Yup.object({
            username: Yup.string('Please enter a valid name'),
            memberID: Yup.string('Please enter a valid guru ID'),
            accountStatus: Yup.string('Please enter a valid guru ID'),
            fromDate: Yup.string('Please enter a valid from date'),
            toDate: Yup.string('Please enter a valid to date'),
        }),
        onSubmit: (values, actions) => {
            values.userTypeId = PREMIUM
            props.searchPremiumUser(values)
        },
    });

    return (
        <>

          
            <Card>
                
                <div className="filter-form">
                    <form onSubmit={formik.handleSubmit}>


                        <div className="row mt-10">
                            <div className="col-12 col-md-6">
                                <div className="formBox">
                                    <Input
                                        label="Item Details"
                                        type="text"
                                        name="billnumber"
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
                                        label="MSKU"
                                        type="text"
                                        name="ordernumber"
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

                            <div className="col-12 col-md-6 ">
                                <div className="formBox">
                                    <Input
                                        label="Account type"
                                        type="text"
                                        name="ordernumber"
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
                                <div className="formBox mb-0">
                                    <Input
                                        label="Quantity"
                                        type="text"
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

                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                <Input
                                        label="Price"
                                        type="text"
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


                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0">
                                    <Input
                                        label="Discount"
                                        type="text"
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


                            <div className="col-12 col-md-6">
                                <div className="formBox mb-0 mt-30">
                                    <Select
                                        label="GST Terms"
                                        name="memberID"
                                        value={formik.values.memberID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        options={[]}
                                        errormessage={formik.touched.memberID && formik.errors.memberID ? (
                                            formik.errors.memberID
                                        ) : null}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 mt-30">
                                <div className="formBox mb-0">
                                <Input
                                        label="Amount"
                                        type="text"
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

export default AddInvoiceItemView;
