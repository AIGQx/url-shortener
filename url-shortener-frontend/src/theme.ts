import { argbFromHex, themeFromSourceColor, applyTheme, hexFromArgb} from "@material/material-color-utilities";
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';
const colorInput = document.getElementById("theme") as HTMLInputElement | null;
const color: string = colorInput?.value.trim() || "#F387AB";

export function generateMaterial3CSS(seedHex: string, mode: "light" | "dark" = "light") {
  const seed = argbFromHex(seedHex);
  const theme = themeFromSourceColor(seed);
console.log(seed)
  const scheme = theme.schemes[mode].toJSON();
  const neutral = theme.palettes.neutral;
console.log(neutral)
  const derived = {
    surfaceContainerLowest: neutral.tone(mode === "light" ? 100 : 4),
    surfaceContainerLow: neutral.tone(mode === "light" ? 96 : 10),
    surfaceContainer: neutral.tone(mode === "light" ? 94 : 12),
    surfaceContainerHigh: neutral.tone(mode === "light" ? 92 : 17),
    surfaceContainerHighest: neutral.tone(mode === "light" ? 90 : 22),
    surfaceDim: neutral.tone(mode === "light" ? 87 : 6),
    surfaceBright: neutral.tone(mode === "light" ? 98 : 24),
  };
  const fullScheme: Record<string, number> = { ...scheme, ...derived };
  const cssVars = Object.entries(fullScheme)
    .map(([key, value]) => {
      const cssVar = "--md-sys-color-" + key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
      return `${cssVar}: ${hexFromArgb(value)};`;
    })
    .join("\n");

     let styleEl = document.getElementById("material3-theme") as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "material3-theme";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `:root {\n${cssVars}\n}`;

  return `:root {\n${cssVars}\n}`;
}


generateMaterial3CSS(color, "light") 
