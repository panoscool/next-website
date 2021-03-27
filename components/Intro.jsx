import styles from '../styles/Intro.module.css';
import useTranslation from 'next-translate/useTranslation';

function Intro() {
  const { t } = useTranslation();

  return (
    <section className={styles['intro']}>
      <h1 className={`section__title ${styles['section__title--intro']}`}>
        {t('common:intro_title')}
      </h1>
      <p className={`section__subtitle ${styles['section__subtitle--intro']}`}>
        {t('common:intro_subtitle')}
      </p>
      <img
        src='https://source.unsplash.com/random/800x800'
        alt='random'
        className={styles['intro__img']}
      />
    </section>
  );
}

export default Intro;
