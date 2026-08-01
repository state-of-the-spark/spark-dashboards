import styles from "./lumen.module.css";

export function HealthChip({
  score,
  note,
  source,
}: {
  score: number;
  note: string;
  source?: string;
}) {
  return (
    <div className={styles.healthChip}>
      <span className={styles.healthTag}>Supporting</span>
      <div className={styles.healthChipBody}>
        <span>
          Overall Marketing Health{" "}
          <span className={`${styles.healthScoreNum} ${styles.num}`}>
            {score}
          </span>
          {" — "}
          {note}
        </span>
        {source && <div className={styles.source}>{source}</div>}
      </div>
    </div>
  );
}
