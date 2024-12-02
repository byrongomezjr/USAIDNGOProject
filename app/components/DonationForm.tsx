import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// validation schema
const DonationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  amount: Yup.number().min(1, 'Minimum donation is $1').required('Amount is required'),
});

const DonationForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', amount: '' }}
      validationSchema={DonationSchema}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission
        fetch('/api/donate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
          .then(response => response.json())
          .then(data => {
            alert('Donation successful!');
            resetForm();
          })
          .catch(error => console.error('Error:', error));
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Donation Amount</label>
            <Field name="amount" type="number" />
            <ErrorMessage name="amount" component="div" />
          </div>
          <button type="submit">Donate</button>
        </Form>
      )}
    </Formik>
  );
};

export default DonationForm;
