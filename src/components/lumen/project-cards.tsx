import type { LumenProjectCard } from "@/lib/types";
import styles from "./lumen.module.css";

function chipClass(state: LumenProjectCard["state"]) {
  if (state === "active") return styles.chipActive;
  if (state === "relaunching") return styles.chipRelaunching;
  return styles.chipInProgress;
}

function chipLabel(state: LumenProjectCard["state"]) {
  if (state === "active") return "Active";
  if (state === "relaunching") return "Relaunching";
  return "In progress";
}

export function ProjectCards({ cards }: { cards?: LumenProjectCard[] }) {
  if (!cards || cards.length === 0) return null;

  return (
    <div className={styles.projectBlock}>
      <div className={styles.projectLabel}>What we&apos;re driving</div>
      <div className={styles.projectGrid}>
        {cards.map((c) => (
          <div key={c.name} className={styles.projectCard}>
            <div className={styles.projectName}>{c.name}</div>
            <div className={styles.projectStatus}>{c.status}</div>
            <span className={`${styles.projectChip} ${chipClass(c.state)}`}>
              {chipLabel(c.state)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
