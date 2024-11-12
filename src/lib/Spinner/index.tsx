import styles from './spiner.module.css';

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
};

export default Spinner;
