import fs from "fs";
import path from "path";
import type { Client, ClientMetrics, LumenDashboard } from "./types";

const dataDir = path.join(process.cwd(), "data");
const lumenDataDir = path.join(dataDir, "lumen");

export function getClients(): Client[] {
  const raw = fs.readFileSync(path.join(dataDir, "clients.json"), "utf-8");
  return JSON.parse(raw);
}

export function getClientBySlug(slug: string): Client | undefined {
  return getClients().find((c) => c.slug === slug);
}

export function getClientMetrics(slug: string): ClientMetrics | null {
  const filePath = path.join(dataDir, "metrics", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function getWeeksPartnered(partnerSince: string): number {
  const start = new Date(partnerSince);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
}

export function formatNumber(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString("en-US");
  }
  return n.toString();
}

export function formatCurrency(n: number): string {
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

/* ---------------------------------------------------------------------- */
/* Lumen Marketing Engine dashboard (data/lumen/{token}.json)              */
/* ---------------------------------------------------------------------- */

export function getLumenTokens(): string[] {
  if (!fs.existsSync(lumenDataDir)) return [];
  return fs
    .readdirSync(lumenDataDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function getLumenDashboard(token: string): LumenDashboard | null {
  const filePath = path.join(lumenDataDir, `${token}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function formatSyncDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDateOnly(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
