import Layout from '@/components/common/Layout/Layout';
import RegisterForm from '@/components/ui/RegisterForm/RegisterForm';
import Logo from '@/components/ui/Logo/Logo';

function Stardeos() {
  return (
    <>
      <Logo />
      <RegisterForm />
    </>
  );
}

export default Stardeos;

Stardeos.Layout = Layout;
