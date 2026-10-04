import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <path
        d="M10 28c0-7 7.5-14 10.5-16.5 1.2 3.4 2 8.2-1 13.2-1.6 2.6-4.6 4.4-7.2 4.8C11.2 29.3 10 28.8 10 28Z"
        fill="currentColor"
        className="text-leaf"
      />
      <path
        d="M38 28c0-7-7.5-14-10.5-16.5-1.2 3.4-2 8.2 1 13.2 1.6 2.6 4.6 4.4 7.2 4.8 1.1-.2 2.3-.7 2.3-1.5Z"
        fill="currentColor"
        className="text-leaf"
      />
      <path
        d="M24 8c.4 0 8 10.2 8 17.2C32 31.4 28.4 36 24 36s-8-4.6-8-10.8C16 18.2 23.6 8 24 8Z"
        fill="currentColor"
        className="text-water"
      />
      <path
        d="M21.2 20.5c1.4-2.2 3.1-3.4 4.3-3.8-.6 3.2-2.3 5.4-4.6 6.5 0-1.1.1-1.8.3-2.7Z"
        fill="currentColor"
        className="text-cream/70"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className={markClassName} />
      <span className="text-lg font-semibold tracking-tight sm:text-xl">
        Vantara
      </span>
    </span>
  );
}
