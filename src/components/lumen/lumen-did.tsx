import styles from "./lumen.module.css";

export function LumenDid({ items }: { items: string[] }) {
  return (
    <div className={styles.didBlock}>
      <div className={styles.didLabel}>What Lumen did for you</div>
      <ul className={styles.didList}>
        {items.map((item) => (
          <li key={item} className={styles.didItem}>
            <span className={styles.didCheck}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
