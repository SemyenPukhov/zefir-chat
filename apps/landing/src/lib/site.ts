/** Сообщество ВК по умолчанию (подвал, sameAs, если env не задан). */
export const DEFAULT_VK_COMMUNITY_URL = "https://vk.com/club237508945";

/** Telegram (чат) по умолчанию, если env не задан. */
export const DEFAULT_TELEGRAM_URL = "https://t.me/+U2rSAn3L9R05YTQy";

/** URL ВК: из env или сообщество по умолчанию. */
export function getVkUrl(): string {
  const raw = process.env.NEXT_PUBLIC_VK_URL?.trim();
  if (raw) return raw;
  return DEFAULT_VK_COMMUNITY_URL;
}

/** URL Telegram: из env или ссылка по умолчанию. */
export function getTelegramUrl(): string {
  const raw = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim();
  if (raw) return raw;
  return DEFAULT_TELEGRAM_URL;
}

/** Базовый URL сайта без завершающего слеша. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim();
  if (raw && /^https?:\/\//.test(raw)) {
    return raw;
  }
  return "https://zefirchat.ru";
}

/** Ссылки для sameAs: env или реальные дефолты; без заглушек vk.com / t.me. */
export function getOfficialSocialUrls(): string[] {
  const vk = getVkUrl();
  const tg = getTelegramUrl();
  const out: string[] = [];
  if (vk !== "https://vk.com" && vk !== "http://vk.com") {
    out.push(vk);
  }
  if (tg && tg !== "https://t.me" && tg !== "http://t.me") {
    out.push(tg);
  }
  return out;
}
