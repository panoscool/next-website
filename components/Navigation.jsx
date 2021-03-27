import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleNavOpen() {
    setOpen(!open);
  }

  function handleNavClose() {
    setOpen(false);
  }

  const filterCurrentLocale = router.locales.filter((locale) => locale !== router.locale);

  return (
    <header className={`${styles['header']} ${open ? styles['nav-open'] : ''}`}>
      <Link href='/'>
        <a className={styles['logo']}>Logo</a>
      </Link>

      {filterCurrentLocale.map((locale) => (
        <Link key={locale} href={router.asPath} locale={locale}>
          <a className={styles['locale']}>{locale}</a>
        </Link>
      ))}

      <button className={styles['nav-toggle']} onClick={handleNavOpen}>
        <span className={styles['hamburger']}></span>
      </button>

      <nav className={styles['nav']}>
        <ul className={styles['nav__list']}>
          <li onClick={handleNavClose} className={styles['nav__item']}>
            <Link href='#'>
              <a className={styles['nav__link']}>Home</a>
            </Link>
          </li>
          <li onClick={handleNavClose} className={styles['nav__item']}>
            <Link href='#services'>
              <a className={styles['nav__link']}>Services</a>
            </Link>
          </li>
          <li onClick={handleNavClose} className={styles['nav__item']}>
            <Link href='#projects'>
              <a className={styles['nav__link']}>Projects</a>
            </Link>
          </li>
          <li onClick={handleNavClose} className={styles['nav__item']}>
            <Link href='#about'>
              <a className={styles['nav__link']}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
