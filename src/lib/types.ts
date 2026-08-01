export interface Client {
  slug: string;
  name: string;
  initials: string;
  accentColor: string;
  adAccountId: string | null;
  pageId: string | null;
  partnerSince: string;
  services: string[];
  active: boolean;
}

export interface CampaignMetrics {
  spend: number;
  reach: number;
  clicks: number;
  ctr: number;
}

export interface Campaign {
  name: string;
  status: "active" | "ended";
  health: "good" | "warning" | "bad";
  metrics: CampaignMetrics;
}

export interface TrendPoint {
  date: string;
  reach: number;
}

export interface MetricsSummary {
  totalReach: number;
  paidReach: number;
  organicReach: number;
  totalSpend: number;
  totalClicks: number;
  avgCtr: number;
}

export interface ClientMetrics {
  lastSync: string;
  summary: MetricsSummary;
  trend: TrendPoint[];
  campaigns: Campaign[];
}

/* ---------------------------------------------------------------------- */
/* Lumen Marketing Engine dashboard (src/app/c/[token])                    */
/* Separate product/schema from the ads dashboard above — do not merge.    */
/* ---------------------------------------------------------------------- */

export interface LumenBusiness {
  name: string;
  category: string;
  phone: string;
  website: string;
  accentColor: string;
  initials: string;
  serviceArea?: boolean;
}

export type LumenTone = "good" | "watch" | "bad";

export interface LumenDelta {
  text: string;
  tone: LumenTone;
}

export interface LumenHeroMetric {
  key: string;
  label: string;
  /** null when state is "pending" — never invent a number for this. */
  value: string | null;
  sub?: string;
  state: "live" | "pending";
  delta?: LumenDelta;
  note?: string;
  /** Only present when state is "pending". */
  pendingLabel?: string;
  pendingSub?: string;
  /** Where this number came from. Rendered as a small italic sub-line. */
  source?: string;
}

export interface LumenPillar {
  name: string;
  score: number;
  hero: boolean;
  bar: LumenTone;
  note: string;
  /** Where this score came from. Rendered as a small italic sub-line. */
  source?: string;
}

export interface LumenHygiene {
  seo: number;
  content: number;
  note: string;
  /** Where these scores came from. Rendered as a small italic sub-line. */
  source?: string;
}

export interface LumenReviewsGapEntry {
  name: string;
  rating: string;
  reviews: number;
  self?: boolean;
}

export interface LumenWeeksMove {
  label: string;
  body: string;
  cta: string;
}

export type LumenLedgerState = "done" | "in-progress" | "next";

export interface LumenLedgerItem {
  title: string;
  state: LumenLedgerState;
  detail: string;
}

export interface LumenProjectCard {
  name: string;
  status: string;
  state: "active" | "in-progress" | "relaunching";
}

export interface LumenDashboard {
  token: string;
  model: string;
  asOf: string;
  cadence: string;
  business: LumenBusiness;
  healthScore: number;
  healthNote: string;
  /** Where the supporting health score came from. Rendered as a small italic sub-line. */
  healthScoreSource?: string;
  heroMetrics: LumenHeroMetric[];
  projectCards?: LumenProjectCard[];
  pillars: LumenPillar[];
  hygiene: LumenHygiene;
  reviewsGap: LumenReviewsGapEntry[];
  /** Where the reviews-gap comparison came from. Rendered as a small italic sub-line under the panel. */
  reviewsGapSource?: string;
  thisWeeksMove: LumenWeeksMove;
  lumenDid: string[];
  ledger: LumenLedgerItem[];
  dataNotes?: string;
}
