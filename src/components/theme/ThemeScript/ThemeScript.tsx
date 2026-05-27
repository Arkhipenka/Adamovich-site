const THEME_STORAGE_KEY = "adamovich-theme";

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
