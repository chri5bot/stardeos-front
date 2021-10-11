import { Formik, Form, Field, ErrorMessage } from 'formik';

import Datepicker from '@/components/ui/Datepicker/Datepicker';

import styles from './RegisterForm.module.scss';

function RegisterForm() {
  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={{ birthDate: new Date() }}
        validate={(values) => {
          const errors = {};
          console.log(values);
          if (!values.birthDate) {
            errors.birthDate = 'Required';
          }
          // TODO: add here the date validation
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <Datepicker
              name="birthDate"
              value={values?.birthDate}
              selected={values?.birthDate}
              onChange={(e) => setFieldValue('birthDate', e)}
            />
            <ErrorMessage name="birthDate" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
