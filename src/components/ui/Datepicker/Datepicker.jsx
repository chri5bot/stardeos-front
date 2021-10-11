import DatePicker from 'react-datepicker';
import { useField } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComp(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <DatePicker {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
}

export default DatePickerComp;
