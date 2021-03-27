import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Services.module.css';

function Services() {
  const { t } = useTranslation();

  return (
    <section className={styles['my-services']} id='services'>
      <h2 className={`section__title ${styles['section__title--services']}`}>
        {t('common:services_title')}
      </h2>
      <div className={styles['services']}>
        <div className={styles['service']}>
          <h3 className={styles['service_title']}>{t('common:services_subtitle1')}</h3>
          <p data-aos='fade-up'>{t('common:services_description1')}</p>
        </div>

        <div className={styles['service']}>
          <h3 className={styles['service_title']}>{t('common:services_subtitle2')}</h3>
          <p data-aos='fade-up'>{t('common:services_description2')}</p>
        </div>

        <div className={styles['service']}>
          <h3 className={styles['service_title']}>{t('common:services_subtitle3')}</h3>
          <p data-aos='fade-up'>{t('common:services_description3')}</p>
        </div>
      </div>

      <a href='#projects' className='btn'>
        {t('common:action_btn')}
      </a>
    </section>
  );
}

export default Services;
