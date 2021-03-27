import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <a href='mailto:hello@jane.dev' className={styles['footer__link']}>
        hello@example.com
      </a>
      <ul className={styles['social-list']}>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href='https://facebook.com'>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href='https://instagram.com'>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href='https://messenger.com'>
            <FontAwesomeIcon icon={['fab', 'facebook-messenger']} />
          </a>
        </li>
        <li className={styles['social-list__item']}>
          <a className={styles['social-list__link']} href='https://github.com'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
