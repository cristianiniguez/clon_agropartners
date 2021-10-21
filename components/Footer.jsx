import { FaFacebookF, FaYoutube } from 'react-icons/fa';

import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <img src='/images/logo-normal.png' alt='Logo de Agropartners' />
      <div className={styles.links}>
        <a
          href='https://www.facebook.com/AgroPartners-736514103046562/'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebookF />
        </a>
        <a
          href='https://www.youtube.com/channel/UCCHtv535VCcINnOs9YHrUNQ'
          target='_blank'
          rel='noreferrer'
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
