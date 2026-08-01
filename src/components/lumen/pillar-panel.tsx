import type { LumenHygiene, LumenPillar } from "@/lib/types";
import styles from "./lumen.module.css";

export function PillarPanel({
  pillars,
  hygiene,
}: {
  pillars: LumenPillar[];
  hygiene: LumenHygiene;
}) {
  return (
    <div className={styles.panel}>
      <h3 className={styles.panelHeading}>What&apos;s driving it</h3>

      {pillars.map((p) => (
        <div key={p.name} className={styles.pillar}>
          <div className={styles.pillarName}>
            {p.hero && <span className={styles.heroDot} aria-hidden="true" />}
            {p.name}
          </div>
          <div className={`${styles.pillarScore} ${styles.num}`}>
            {p.score}
          </div>
          <div className={styles.bar}>
            <i
              className={p.bar === "good" ? styles.barGood : styles.barWatch}
              style={{ width: `${p.score}%` }}
            />
          </div>
          <div className={styles.pillarNote}>{p.note}</div>
          {p.source && <div className={styles.source}>{p.source}</div>}
        </div>
      ))}

      <div className={styles.hygiene}>
        <div className={styles.hygieneHead}>
          <span>Included hygiene — not what wins</span>
          <span className={styles.num}>
            SEO {hygiene.seo} · Content {hygiene.content}
          </span>
        </div>
        <p className={styles.hygieneNote}>{hygiene.note}</p>
        {hygiene.source && (
          <div className={styles.source}>{hygiene.source}</div>
        )}
      </div>
    </div>
  );
}
