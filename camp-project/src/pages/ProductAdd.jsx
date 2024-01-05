import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Product name is required"),
        unitPrice: Yup.number().required("Unit price is required")
    })
    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema={schema}
        onSubmit={(values)=>{
            console.log(values);
        }}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name="productName"placeholder="Product Name"/>
                <KodlamaIoTextInput name="unitPrice" placeholder="Unit Price"/>
                <Button color='grey' type='submit'>ADD</Button>
            </Form>

        </Formik>
    )
}
