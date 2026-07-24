import type { LumenHeroMetric } from "@/lib/types";
import styles from "./lumen.module.css";

function toneClass(tone: "good" | "watch" | "bad" | undefined) {
  if (tone === "watch") return styles.toneWatch;
  if (tone === "bad") return styles.toneBad;
  return styles.toneGood;
}

// Numeric-style values ("449", "38", "$1,200", "62%") keep the large
// tabular-nums treatment. Anything with letters ("Not shown") is a text
// verdict, not a number — give it its own smaller, wrap-safe style so it
// never breaks the tile layout at narrow (tablet) grid widths.
function isNumericValue(value: string | null) {
  return value !== null && /^[\d.,$%+\-\s]+$/.test(value);
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

        const numeric = isNumericValue(m.value);
        return (
          <div key={m.key} className={styles.heroTile}>
            <div className={styles.heroCap}>{m.label}</div>
            <div className={styles.heroValueRow}>
              <span
                className={`${styles.heroBig} ${numeric ? styles.num : styles.heroBigText}`}
              >
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
