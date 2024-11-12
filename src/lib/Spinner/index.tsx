import styles from './spiner.module.css';

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
}

export default Spinner;
