import type { FaqItem } from "@/lib/business";

export default function Faq({
  items,
  variant = "light",
}: {
  items: FaqItem[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div
      className={
        dark
          ? "divide-y divide-white/10 border border-white/10 bg-white/5"
          : "divide-y divide-slate-light border border-slate-light bg-white"
      }
    >
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:content-none">
            <h3
              className={
                dark
                  ? "font-display text-base text-white sm:text-lg"
                  : "font-display text-base font-semibold text-ink sm:text-lg"
              }
            >
              {item.question}
            </h3>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-blue transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p
            className={
              dark
                ? "mt-3 text-sm leading-relaxed text-white/65 sm:text-base"
                : "mt-3 text-sm leading-relaxed text-slate sm:text-base"
            }
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
