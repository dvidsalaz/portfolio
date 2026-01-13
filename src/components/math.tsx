import katex from "katex";

type MathProps = {
  latex: string;
  block?: boolean;
};

export function Math({ latex, block = false }: MathProps) {
  const html = katex.renderToString(latex, {
    throwOnError: false,
    displayMode: block,
  });

  return (
    <span
      className={block ? "my-4 block text-center" : "inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
