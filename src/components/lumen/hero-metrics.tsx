import type { LumenHeroMetric } from "@/lib/types";
import styles from "./lumen.module.css";

function toneClass(tone: "good" | "watch" | undefined) {
  if (tone === "watch") return styles.toneWatch;
  return styles.toneGood;
}

export function HeroMetrics({ metrics }: { metrics: LumenHeroMetric[] }) {
  return (
    <div className={styles.heroRow}>
      {metrics.map((m) => {
        if (m.state === "pending") {
          return (
            <div key={m.key} className={`${styles.heroTile} ${styles.heroTilePending}`}>
              <div className={styles.heroCap}>{m.label}</div>
              <div className={styles.pendingLabel}>{m.pendingLabel}</div>
              {m.pendingSub && (
                <div className={styles.pendingSub}>{m.pendingSub}</div>
              )}
              <span className={styles.pendingBadge}>Not connected yet</span>
            </div>
          );
        }

        return (
          <div key={m.key} className={styles.heroTile}>
            <div className={styles.heroCap}>{m.label}</div>
            <div>
              <span className={`${styles.heroBig} ${styles.num}`}>
                {m.value}
              </span>
              {m.sub && <span className={styles.heroSub}>{m.sub}</span>}
            </div>
            {m.delta && (
              <div className={`${styles.heroDelta} ${toneClass(m.delta.tone)}`}>
                {m.delta.text}
              </div>
            )}
            {m.note && <div className={styles.heroNote}>{m.note}</div>}
            <div className={styles.heroBaseline}>
              Baseline — history starts here
            </div>
          </div>
        );
      })}
    </div>
  );
}
