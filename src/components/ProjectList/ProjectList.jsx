import styles from './projectList.module.css'


export const ProjectList = ({ projects }) => {
  return (
    <div className={styles['container']}>
      {projects.map((c, index) => (
        <img key={c.img + index} src={c.img} alt={c.category} />
      ))}
    </div>
  );
};