import type { LumenLedgerItem, LumenLedgerState } from "@/lib/types";
import styles from "./lumen.module.css";

const STATE_META: Record<
  LumenLedgerState,
  { icon: string; iconClass: string; label: string; badgeClass: string }
> = {
  done: {
    icon: "✓",
    iconClass: styles.iconDone,
    label: "Done",
    badgeClass: styles.stateDone,
  },
  "in-progress": {
    icon: "●",
    iconClass: styles.iconProgress,
    label: "In progress",
    badgeClass: styles.stateProgress,
  },
  next: {
    icon: "→",
    iconClass: styles.iconNext,
    label: "Next",
    badgeClass: styles.stateNext,
  },
};

export function Ledger({ items }: { items: LumenLedgerItem[] }) {
  return (
    <div className={styles.ledgerBlock}>
      <h3 className={styles.panelHeading}>
        Your homework — what&apos;s done, what&apos;s next
      </h3>
      <div className={styles.ledgerList}>
        {items.map((item) => {
          const meta = STATE_META[item.state];
          return (
            <div key={item.title} className={styles.task}>
              <div className={`${styles.taskIcon} ${meta.iconClass}`}>
                {meta.icon}
              </div>
              <div>
                <div className={styles.taskTitle}>{item.title}</div>
                <div className={styles.taskDetail}>{item.detail}</div>
              </div>
              <div className={`${styles.stateBadge} ${meta.badgeClass}`}>
                {meta.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
