import React, { useState } from 'react';
import './styles.css';

interface AccordionItemProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, badge, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`cb-accordion-item ${open ? 'cb-accordion-item--open' : ''}`}>
      <button className="cb-accordion-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="cb-accordion-title">{title}</span>
        {badge && <span className="cb-accordion-badge">{badge}</span>}
        <span className="cb-accordion-chevron">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="cb-accordion-body">{children}</div>}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="cb-accordion">{children}</div>;
}
