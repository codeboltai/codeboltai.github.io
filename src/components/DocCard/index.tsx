import React from 'react';
import Link from '@docusaurus/Link';

interface DocCardProps {
  title: string;
  description: string;
  href: string;
  label?: string;
}

export function DocCard({ title, description, href, label }: DocCardProps) {
  return (
    <Link to={href} className="doc-card">
      <div className="doc-card__corner doc-card__corner--tl" />
      <div className="doc-card__corner doc-card__corner--tr" />
      <div className="doc-card__corner doc-card__corner--bl" />
      <div className="doc-card__corner doc-card__corner--br" />
      {label && <span className="doc-card__label">{label}</span>}
      <span className="doc-card__title">{title}</span>
      <p className="doc-card__desc">{description}</p>
      <span className="doc-card__arrow">&#8594;</span>
    </Link>
  );
}

interface DocCardGridProps {
  items: DocCardProps[];
  columns?: 2 | 3 | 4;
}

export function DocCardGrid({ items, columns = 3 }: DocCardGridProps) {
  return (
    <div
      className="doc-card-grid"
      style={{ '--doc-card-cols': columns } as React.CSSProperties}
    >
      {items.map((item) => (
        <DocCard key={item.href} {...item} />
      ))}
    </div>
  );
}
