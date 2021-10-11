import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.module.scss';

function DatePickerComp(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <DatePicker className={styles.custom_input} {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}

export default DatePickerComp;
