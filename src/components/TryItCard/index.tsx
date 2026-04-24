import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

interface TryItCardProps {
  prompt: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export function TryItCard({ prompt, actionLabel = 'Try it', actionHref }: TryItCardProps) {
  return (
    <div className="cb-try-it-card">
      <p className="cb-try-it-card__prompt">{prompt}</p>
      {actionHref && (
        <Link to={actionHref} className="cb-try-it-card__action">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
