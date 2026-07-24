import styles from "./site-footer.module.css";

/**
 * Site-wide branded footer — rendered once in the root layout so it
 * appears on every route (homepage, /client/[slug], /c/[token], /ops).
 * Logo is black, so it sits on a white pill for legibility on the navy bg.
 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <span className={styles.logoPill}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/spark-logo-black.png"
              alt="Spark Sites"
              className={styles.logo}
            />
          </span>
          <p className={styles.tagline}>More Leads • Less Stress</p>
          <p className={styles.subline}>
            Websites &amp; Marketing That Work in 30 Days
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colHeading}>Contact</p>
          <a href="tel:8634095635" className={styles.link}>
            Text/Call: 863-409-5635
          </a>
          <a href="mailto:support@sparkmysite.com" className={styles.link}>
            support@sparkmysite.com
          </a>
          <span className={styles.plain}>Lakeland, FL</span>
        </div>

        <div className={styles.col}>
          <p className={styles.colHeading}>Follow</p>
          <a
            href="https://www.facebook.com/sparksites/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/sparkmysite/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
        </div>
      </div>

      <div className={styles.bottom}>© 2026 Spark Sites</div>
    </footer>
  );
}
