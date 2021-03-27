import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Projects.module.css';

function Projects({ projects }) {
  const { t } = useTranslation();

  if (!projects) return 'Loading...';

  return (
    <section className={styles['work']} id='projects'>
      <h2 className={`section__title ${styles['section__title--work']}`} data-aos='fade-up'>
        {t('common:work_title')}
      </h2>
      <p className={`section__subtitle ${styles['section__subtitle--work']}`} data-aos='fade-up'>
        {t('common:work_subtitle')}
      </p>

      <div className={styles['portfolio']}>
        {projects.map((project) => (
          <a href='#' key={project.brand} className={styles['portfolio__item']}>
            <img src={project.img} alt={project.brand} className={styles['portfolio__img']} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
