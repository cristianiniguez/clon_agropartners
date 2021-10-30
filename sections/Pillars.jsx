import styles from '../styles/sections/Pillars.module.scss';

const Pillars = () => {
  return (
    <section className={styles.root}>
      <h1>Nuestros Pilares</h1>
      <div className={styles.grid}>
        <div className={styles.pillar}>
          <figure>
            <img src='/images/pillars-img-1.jpg' alt='Pillars Image 1' />
          </figure>
        </div>
        <div className={styles.pillar}>
          <figure>
            <img src='/images/pillars-img-2.jpg' alt='Pillars Image 2' />
          </figure>
        </div>
        <div className={styles.pillar}>
          <figure>
            <img src='/images/pillars-img-3.jpg' alt='Pillars Image 3' />
          </figure>
        </div>
        <div className={styles.pillar}>
          <figure>
            <img src='/images/pillars-img-4.jpg' alt='Pillars Image 4' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
