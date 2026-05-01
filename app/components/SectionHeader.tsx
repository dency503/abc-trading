import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-blue)]">
        {eyebrow}
      </p>
      <h2 className="mb-6 text-4xl font-black leading-tight text-[var(--ink-main)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-8 text-[var(--ink-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
