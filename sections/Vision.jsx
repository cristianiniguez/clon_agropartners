import styles from '../styles/sections/Vision.module.scss';

const Vision = () => {
  return (
    <section className={styles.root}>
      <h2>Propósito</h2>
      <p>
        Contribuir a una agricultura de clase mundial, para preservar el encanto de trabajar la
        tierra.
      </p>
      <h2>Visión</h2>
      <p>Merecer la confianza del agricultor y ser su mejor aliado</p>
      <h2>Valores</h2>
      <ul>
        <li>
          <strong>Respeto</strong> - Queremos hacer de nuestra empresa un lugar donde trabajadores y
          clientes nos sintamos a gusto.
        </li>
        <li>
          <strong>Integridad</strong> - Cumplimos lo que deecimos y no recomendamos algo que
          nosotros no haríamos. La confianza del agricultor es nuestro mejor activo.
        </li>
        <li>
          <strong>Superación</strong> - Cada día es una oportunidad de aprender algo y de ser
          mejores que ayer.
        </li>
        <li>
          <strong>Meritocracia</strong> - Trabajamos por objetivos, entregamos soluciones, somos
          recompensados por resultados.
        </li>
        <li>
          <strong>Iniciativa</strong> - Creemos en el potencial de las personas. Todos podemos
          aportar ideas y soluciones sin importar el área, el cargo o la experiencia. Incentivamos y
          esperamos la participación de todos.
        </li>
      </ul>
      <img src='/images/vision-img-1.jpg' alt='Vision image 1' />
    </section>
  );
};

export default Vision;
