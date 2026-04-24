import React from 'react';
import './styles.css';

interface StepProps {
  title: string;
  children: React.ReactNode;
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="cb-step">
      <div className="cb-step__header">
        <span className="cb-step__title">{title}</span>
      </div>
      <div className="cb-step__body">{children}</div>
    </div>
  );
}

interface StepsProps {
  children: React.ReactNode;
  variant?: 'numbered' | 'dots';
}

export function Steps({ children, variant = 'numbered' }: StepsProps) {
  return (
    <div className={`cb-steps cb-steps--${variant}`}>
      {children}
    </div>
  );
}
