import { Formik, Form, Field, ErrorMessage } from 'formik';
import Datepicker from '@/components/ui/Datepicker/Datepicker';
import validateBirthdate from '@/helpers/validateBirthdate';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={{ birthDate: null }}
        validate={(values) => {
          const errors = {};
          console.log(values);
          if (!values.birthDate) {
            errors.birthDate = 'Date of birth is required';
          }
          if (!validateBirthdate(values.birthDate)) {
            errors.birthDate = 'Date of birth is out of range';
          }
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
              dateFormat="yyyy-MM-dd"
              value={values?.birthDate}
              selected={values?.birthDate}
              onChange={(e) => setFieldValue('birthDate', e)}
              placeholderText="Date of Birth"
            />
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
