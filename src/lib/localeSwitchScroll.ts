const SCROLL_Y_KEY = "adamovich:locale-switch-scroll-y";
const SCROLL_EXPIRES_KEY = "adamovich:locale-switch-scroll-expires";
const SCROLL_TTL_MS = 15_000;

function getCurrentScrollY() {
  if (typeof window === "undefined") {
    return 0;
  }

  const lockedBodyTop =
    document.body.style.position === "fixed" ? document.body.style.top : "";
  const lockedScrollY = lockedBodyTop
    ? Number.parseFloat(lockedBodyTop)
    : Number.NaN;

  if (Number.isFinite(lockedScrollY) && lockedScrollY < 0) {
    return Math.abs(lockedScrollY);
  }

  return window.scrollY;
}

export function rememberLocaleSwitchScrollPosition() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(SCROLL_Y_KEY, String(getCurrentScrollY()));
    window.sessionStorage.setItem(
      SCROLL_EXPIRES_KEY,
      String(Date.now() + SCROLL_TTL_MS),
    );
  } catch {
    // Ignore storage restrictions; Link scroll={false} still prevents hard jumps.
  }
}

export function restoreLocaleSwitchScrollPosition() {
  if (typeof window === "undefined") {
    return;
  }

  let storedY: string | null = null;
  let expiresAt = 0;

  try {
    storedY = window.sessionStorage.getItem(SCROLL_Y_KEY);
    expiresAt = Number(
      window.sessionStorage.getItem(SCROLL_EXPIRES_KEY) ?? 0,
    );
    window.sessionStorage.removeItem(SCROLL_Y_KEY);
    window.sessionStorage.removeItem(SCROLL_EXPIRES_KEY);
  } catch {
    return;
  }

  if (!storedY) {
    return;
  }

  if (Number.isFinite(expiresAt) && expiresAt > 0 && expiresAt < Date.now()) {
    return;
  }

  const y = Number(storedY);

  if (!Number.isFinite(y)) {
    return;
  }

  const top = Math.max(0, y);
  const restore = () => window.scrollTo({ top, left: 0, behavior: "auto" });

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(restore);
  });
}
