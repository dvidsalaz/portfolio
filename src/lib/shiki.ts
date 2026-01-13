import { cache } from "react";
import { codeToHtml } from "shiki";

function stripBg(html: string) {
  // remove any background-color inline styles shiki emits
  html = html.replace(/background-color:\s*[^;"]+;?/g, "");
  // remove empty style=""
  html = html.replace(/\sstyle="\s*"/g, "");
  return html;
}

export const highlight = cache(async (code: string, lang: string) => {
  const html = await codeToHtml(code, {
    lang,
    theme: "github-dark",
  });

  return stripBg(html);
});
