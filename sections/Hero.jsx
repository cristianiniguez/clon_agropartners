import styles from '../styles/sections/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.bg}>
        <img src='/images/hero-img-1.jpg' alt='Imagen 1' />
      </div>
      <div className={styles.front}>
        <p className={styles.message}>SATISFACCIÓN Y CONFIANZA</p>
      </div>
    </section>
  );
};

export default Hero;
