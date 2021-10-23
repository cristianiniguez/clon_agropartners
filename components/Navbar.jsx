import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../styles/components/Navbar.module.scss';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Quienes Somos', href: '#quienes-somos' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Maquinaria', href: '#maquinaria' },
  { label: 'Sucursales y Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [shown, setShown] = useState(false);

  return (
    <nav className={styles.root}>
      <ul className={classNames(styles.menu, { [styles['menu--shown']]: shown })}>
        {links.map(({ label, href }, i) => (
          <li key={`link-${i}`} onClick={() => setShown(false)}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <button className={styles.button} onClick={() => setShown(!shown)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
