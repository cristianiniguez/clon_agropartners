import styles from '../styles/sections/Logo.module.scss';

const Logo = () => {
  return (
    <section className={styles.root}>
      <svg className={styles.shape} viewBox='0 0 32 16' preserveAspectRatio='none'>
        <ellipse cx={16} cy={0} rx={16} ry={16} />
      </svg>

      <div className={styles.image}>
        <img src='/images/logo-normal.png' alt='Logo de Agropartners' />
      </div>

      <svg className={styles.shape} viewBox='0 0 32 16' preserveAspectRatio='none'>
        <ellipse cx={16} cy={16} rx={16} ry={16} />
      </svg>
    </section>
  );
};

export default Logo;
