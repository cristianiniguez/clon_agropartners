import Link from 'next/link';
import classNames from 'classnames';

import Navbar from './Navbar';

import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={classNames('container', styles.container)}>
        <Link href='/'>
          <a className={styles.logo}>
            <img src='/images/logo-blanco.png' alt='Logo Blanco de Agropartners' />
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
