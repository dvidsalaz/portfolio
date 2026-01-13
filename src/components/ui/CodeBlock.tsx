import { highlight } from "@/lib/shiki";
import { CopyButton } from "@/components/ui/CopyButton";

type CodeBlockProps = {
  code: string;
  lang?: string;
  title?: string;
};

export async function CodeBlock({
  code,
  lang = "text",
  title,
}: CodeBlockProps) {
  const html = await highlight(code, lang);

  return (
    <div className="relative overflow-hidden rounded-xl bg-modernBlack ">
      {/* optional header row like docs */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="text-xs text-muted-foreground">
          {title ?? (lang !== "text" ? lang : "")}
        </div>
        <CopyButton text={code} />
      </div>

      <div className="px-4 pb-4">
        {/* Shiki returns a <pre class="shiki">...</pre> */}
        <div
          className="[&_.shiki]:m-0 [&_.shiki]:overflow-x-auto [&_.shiki]:rounded-lg [&_.shiki]:bg-transparent [&_.shiki]:p-0 [&_.shiki_code]:text-sm [&_.shiki_code]:leading-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
