import { useTypewriter } from "@/lib/hooks";
import { cn } from "./ui";

type Token = { text: string; cls: string };

const KEYWORDS =
  /\b(Route|function|use|return|class|public|protected|private|new|array|true|false|null|as|middleware|group|get|post|put|delete|resource|foreach|if|else|const|let|import|export|default|from|auth)\b/;

function tokenize(line: string): Token[] {
  const out: Token[] = [];
  const re = /(\/\/.*$)|('[^']*'|"[^"]*"|`[^`]*`)|(\$[A-Za-z_]\w*)|(=>|->|::)|(\b[A-Z][A-Za-z0-9_]*\b)|(\b\d+\b)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push({ text: line.slice(last, m.index), cls: "text-paper-3/70" });
    if (m[1]) out.push({ text: m[1], cls: "text-paper-3/35 italic" });
    else if (m[2]) out.push({ text: m[2], cls: "text-[#68d3b4]" });
    else if (m[3]) out.push({ text: m[3], cls: "text-sand" });
    else if (m[4]) out.push({ text: m[4], cls: "text-ember-soft" });
    else if (m[5])
      out.push({
        text: m[5],
        cls: KEYWORDS.test(m[5]) ? "text-ember-soft" : "text-[#8fb7ff]",
      });
    else if (m[6]) out.push({ text: m[6], cls: "text-[#e4c07a]" });
    last = m.index + m[0].length;
  }
  if (last < line.length) {
    const rest = line.slice(last);
    // colour remaining keywords / plain text
    const pieces = rest.split(/(\b\w+\b)/g);
    pieces.forEach((p) => {
      if (!p) return;
      out.push({ text: p, cls: KEYWORDS.test(p) ? "text-ember-soft" : "text-paper-3/70" });
    });
  }
  return out;
}

export default function CodePanel({
  filename = "routes/web.php",
  lines,
  badge,
  className,
  speed = 24,
}: {
  filename?: string;
  lines: string[];
  badge?: string;
  className?: string;
  speed?: number;
}) {
  const { out, cursorLine } = useTypewriter(lines, speed);

  return (
    <div
      className={cn(
        "animate-float relative overflow-hidden rounded-xl border border-white/12 bg-ink-800/95 shadow-[0_40px_90px_-45px_rgba(13,16,20,0.95)] backdrop-blur",
        className,
      )}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-black/30 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-sand/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-2/70" />
        </div>
        <span className="font-mono text-[10.5px] tracking-[0.1em] text-paper-3/55">{filename}</span>
        {badge && (
          <span className="ml-auto rounded-full border border-teal-2/40 bg-teal-2/12 px-2.5 py-0.5 font-mono text-[9px] tracking-[0.14em] text-[#68d3b4] uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* code */}
      <div className="relative max-h-[340px] overflow-hidden px-3 py-4 font-mono text-[11.5px] leading-[1.85] sm:px-4 sm:text-[12.5px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_-10%,rgba(240,78,35,0.14),transparent_60%)]"
        />
        {lines.map((_line, i) => {
          const shown = out[i] ?? "";
          const isActive = i === cursorLine;
          return (
            <div key={i} className="relative flex">
              <span className="w-6 shrink-0 text-right text-paper-3/25 select-none sm:w-8">
                {i + 1}
              </span>
              <span className="flex-1 pl-3 whitespace-pre">
                {tokenize(shown).map((t, j) => (
                  <span key={j} className={t.cls}>
                    {t.text}
                  </span>
                ))}
                {isActive && (
                  <span className="animate-blink ml-px inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-ember" />
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-black/25 px-4 py-2 font-mono text-[9.5px] tracking-[0.14em] text-paper-3/40 uppercase">
        <span>php artisan serve</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#68d3b4]" />
          200 OK
        </span>
      </div>
    </div>
  );
}
