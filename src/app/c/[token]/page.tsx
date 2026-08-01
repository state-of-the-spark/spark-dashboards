import { notFound } from "next/navigation";
import { getLumenTokens, getLumenDashboard, formatDateOnly } from "@/lib/data";
import { HeroMetrics } from "@/components/lumen/hero-metrics";
import { ProjectCards } from "@/components/lumen/project-cards";
import { HealthChip } from "@/components/lumen/health-chip";
import { PillarPanel } from "@/components/lumen/pillar-panel";
import { ReviewsGap } from "@/components/lumen/reviews-gap";
import { WeeklyMove } from "@/components/lumen/weekly-move";
import { LumenDid } from "@/components/lumen/lumen-did";
import { Ledger } from "@/components/lumen/ledger";
import styles from "@/components/lumen/lumen.module.css";

export function generateStaticParams() {
  return getLumenTokens().map((token) => ({ token }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  return params.then(({ token }) => {
    const dashboard = getLumenDashboard(token);
    return {
      title: dashboard
        ? `${dashboard.business.name} — Lumen Marketing Engine`
        : "Lumen Marketing Engine — Spark",
    };
  });
}

export default async function LumenClientDashboard({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const dashboard = getLumenDashboard(token);
  if (!dashboard) notFound();

  const { business } = dashboard;

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div
              className={styles.avatar}
              style={{ background: business.accentColor }}
            >
              {business.initials}
            </div>
            <div>
              <div className={styles.who}>{business.name}</div>
              <div className={styles.whoSub}>{business.category}</div>
            </div>
          </div>
          <div className={styles.cadenceChip}>
            Brief cadence: <b>{dashboard.cadence}</b>
          </div>
        </div>

        <div className={styles.dash}>
          {/* Hero metrics */}
          <HeroMetrics metrics={dashboard.heroMetrics} />

          {/* What we're driving */}
          {dashboard.projectCards && (
            <ProjectCards cards={dashboard.projectCards} />
          )}

          {/* Supporting health score */}
          <HealthChip
            score={dashboard.healthScore}
            note={dashboard.healthNote}
            source={dashboard.healthScoreSource}
          />

          {/* What's driving it + reviews comparison */}
          <div className={styles.panels}>
            <PillarPanel
              pillars={dashboard.pillars}
              hygiene={dashboard.hygiene}
            />
            <ReviewsGap
              entries={dashboard.reviewsGap}
              source={dashboard.reviewsGapSource}
            />
          </div>

          {/* This week's move */}
          <WeeklyMove move={dashboard.thisWeeksMove} />

          {/* What Lumen did */}
          <LumenDid items={dashboard.lumenDid} />

          {/* Homework ledger */}
          <Ledger items={dashboard.ledger} />
        </div>

        <p className={styles.footNote}>
          <b>Reading this:</b> the big numbers above are real, outside-checkable
          things you can verify yourself — reviews, rank, and (once connected)
          calls. Overall Marketing Health rides along as a supporting score,
          never the headline, so you never pay for a number that climbs while
          the phone stays quiet.
          {dashboard.dataNotes ? ` ${dashboard.dataNotes}` : ""}
        </p>
        <div className={styles.footMeta}>
          <span>As of {formatDateOnly(dashboard.asOf)}</span>
          <span>{business.phone}</span>
          <span>{business.website}</span>
        </div>
      </main>
    </div>
  );
}
