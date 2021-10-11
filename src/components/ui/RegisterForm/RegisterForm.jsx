import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Datepicker from '@/components/ui/Datepicker/Datepicker';
import validateBirthdate from '@/helpers/validateBirthdate';
import reduceYears from '@/helpers/reduceYears';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={{ birthDate: null, error: false, done: false }}
        validate={(values) => {
          const errors = {};
          if (!values.birthDate) {
            errors.birthDate = 'Date of birth is required';
          }
          if (!validateBirthdate(values.birthDate)) {
            errors.birthDate = 'Date of birth is out of range';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setFieldValue }) => {
          try {
            const response = await axios.post(
              'http://localhost:5001/user/signup',
              values,
            );
            setSubmitting(false);
            console.log(response);
            setFieldValue('done', true);
          } catch (error) {
            console.log(error);
            setFieldValue('error', true);
          }
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <Datepicker
              name="birthDate"
              dateFormat="yyyy-MM-dd"
              value={values?.birthDate}
              selected={values?.birthDate}
              onChange={(e) => setFieldValue('birthDate', e)}
              maxDate={reduceYears(new Date(), 18)}
              minDate={reduceYears(new Date(), 90)}
              placeholderText="Date of Birth"
            />
            {values?.error && <span>error</span>}
            {values?.done && <span>done</span>}
            <button
              type="submit"
              className={styles.sign_up}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
