import type { LumenWeeksMove } from "@/lib/types";
import styles from "./lumen.module.css";

export function WeeklyMove({ move }: { move: LumenWeeksMove }) {
  return (
    <div className={styles.moveBlock}>
      <div className={styles.moveLabel}>This week&apos;s one move</div>
      <p className={styles.moveTitle}>{move.label}</p>
      <p className={styles.moveBody}>{move.body}</p>
      <span className={styles.ctaPill}>{move.cta} →</span>
    </div>
  );
}
