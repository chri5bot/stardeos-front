import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <main className={styles.main_container}>{children}</main>
    </>
  );
}

export default Layout;
