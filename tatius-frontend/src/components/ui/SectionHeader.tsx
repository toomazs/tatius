type SectionHeaderProps = {
  title: string;
  action?: string;
  actionHref?: string;
  className?: string;
};

export function SectionHeader({
  title,
  action,
  actionHref = "#",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex items-end justify-between mb-10 ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-tatius-graphite italic">
        {title}
      </h2>
      {action && (
        <a
          href={actionHref}
          className="text-sm tracking-[0.1em] text-tatius-graphite/60 hover:text-tatius-graphite transition-colors"
        >
          {action}
        </a>
      )}
    </div>
  );
}
