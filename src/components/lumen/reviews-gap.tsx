import type { LumenReviewsGapEntry } from "@/lib/types";
import styles from "./lumen.module.css";

export function ReviewsGap({ entries }: { entries: LumenReviewsGapEntry[] }) {
  return (
    <div className={styles.panel}>
      <h3 className={styles.panelHeading}>How you compare on reviews</h3>
      {entries.map((e) => (
        <div
          key={e.name}
          className={`${styles.reviewRow} ${e.self ? styles.reviewSelf : ""}`}
        >
          <div>
            <span className={styles.reviewName}>{e.name}</span>
            {e.self && <span className={styles.reviewSelfBadge}>You</span>}
          </div>
          <div className={`${styles.reviewRating} ${styles.num}`}>
            {e.rating}★
          </div>
          <div className={`${styles.reviewCount} ${styles.num}`}>
            {e.reviews.toLocaleString("en-US")}
          </div>
        </div>
      ))}
    </div>
  );
}
