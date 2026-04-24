import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

interface CtaButtonProps {
  href: string;
  label: string;
  icon?: string;       // emoji or text icon, e.g. '↓'
  external?: boolean;
}

export function CtaButton({ href, label, icon, external }: CtaButtonProps) {
  return (
    <Link
      to={href}
      className="cb-cta-button"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      {icon && <span className="cb-cta-button__icon">{icon}</span>}
    </Link>
  );
}
