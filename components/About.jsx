import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/About.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles['about']} id='about'>
      <h2 className={`section__title ${styles['section__title--about']}`}>
        {t('common:about_title')}
      </h2>
      <p className={`section__subtitle ${styles['section__subtitle--about']}`}>
        {t('common:about_subtitle')}
      </p>

      <div className={styles['about__body']}>
        <p>{t('common:about_description')}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <img
        src='https://source.unsplash.com/random/800x800'
        alt='Jane leaning against a bus'
        className={styles['about__img']}
        data-aos='fade-left'
      />
    </section>
  );
}

export default About;
