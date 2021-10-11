import styles from './Logo.module.scss';

function Logo() {
  return (
    <img
      className={styles.logo}
      src="./assets/images/stardeos.png"
      alt="stardeos-logo"
    />
  );
}

export default Logo;
