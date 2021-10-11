import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.module.scss';

function DatePickerComp(props) {
  const [field, meta] = useField(props);

  const CustomInput = forwardRef((props, ref) => (
    <input {...props} className={styles.custom_input} ref={ref} />
  ));

  return (
    <>
      <DatePicker {...field} {...props} customInput={<CustomInput />} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}

export default DatePickerComp;
