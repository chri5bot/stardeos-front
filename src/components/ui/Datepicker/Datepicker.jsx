import DatePicker from 'react-datepicker';
import { useField } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComp(props) {
  const [field] = useField(props);

  return <DatePicker {...field} {...props} />;
}

export default DatePickerComp;
