import styles from "./lumen.module.css";

export function HealthChip({
  score,
  note,
}: {
  score: number;
  note: string;
}) {
  return (
    <div className={styles.healthChip}>
      <span className={styles.healthTag}>Supporting</span>
      <span>
        Overall Marketing Health{" "}
        <span className={`${styles.healthScoreNum} ${styles.num}`}>
          {score}
        </span>
        {" — "}
        {note}
      </span>
    </div>
  );
}
