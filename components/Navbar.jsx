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
  return (
    <nav className={styles.root}>
      <ul>
        {links.map(({ label, href }, i) => (
          <li key={`link-${i}`}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
