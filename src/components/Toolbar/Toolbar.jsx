import styles from './toolbar.module.css'


export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const handleClick = (title) => {
    onSelectFilter(title)
  } 
  return (
    <div className={styles["toolbar"]}>
      {filters.map((c, index) => (
        <button 
          className={`${styles.button} ${selected === c.title ? styles.selectedButton : ''}`}
          key={c.title  + index} 
          onClick={() => handleClick(c.title)}>
          {c.title}
        </button>
      ))}
    </div>
  )
}
