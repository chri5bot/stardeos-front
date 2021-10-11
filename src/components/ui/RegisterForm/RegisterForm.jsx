import DatePicker from '@/components/ui/Datepicker/Datepicker';
import styles from './RegisterForm.module.scss';

function RegisterForm() {
  return (
    <div className={styles.form_container}>
      <DatePicker />
    </div>
  );
}

export default RegisterForm;
