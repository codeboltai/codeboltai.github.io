import React, {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';

type Props = {
  children: ReactNode;
};

export default function Root({children}: Props): JSX.Element {
  const location = useLocation();
  const [activeSvgMarkup, setActiveSvgMarkup] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState('Expanded diagram');

  useEffect(() => {
    setActiveSvgMarkup(null);
  }, [location.pathname]);

  useEffect(() => {
    const zoomableSvgSelector = '.theme-doc-markdown .cb-diagram svg';

    const openDiagram = (svg: SVGSVGElement) => {
      (svg as unknown as HTMLElement).blur?.();
      const clonedSvg = svg.cloneNode(true) as SVGSVGElement;
      clonedSvg.removeAttribute('tabindex');
      clonedSvg.removeAttribute('role');
      clonedSvg.removeAttribute('aria-haspopup');
      delete clonedSvg.dataset.cbZoomableDiagram;
      delete clonedSvg.dataset.cbZoomBound;

      const label =
        svg.querySelector('title')?.textContent?.trim() || 'Expanded diagram';
      setActiveLabel(label);
      setActiveSvgMarkup(clonedSvg.outerHTML);
    };

    const markZoomableDiagrams = () => {
      document
        .querySelectorAll<SVGSVGElement>(zoomableSvgSelector)
        .forEach((svg) => {
          svg.setAttribute('data-cb-zoomable-diagram', 'true');
          svg.setAttribute('tabindex', '0');
          svg.setAttribute('role', 'button');
          svg.setAttribute('aria-haspopup', 'dialog');

          if (svg.dataset.cbZoomBound === 'true') {
            return;
          }

          svg.addEventListener('click', () => openDiagram(svg));
          svg.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') {
              return;
            }

            event.preventDefault();
            openDiagram(svg);
          });

          svg.dataset.cbZoomBound = 'true';
        });
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveSvgMarkup(null);
      }
    };

    markZoomableDiagrams();

    const observer = new MutationObserver(markZoomableDiagrams);
    observer.observe(document.body, {childList: true, subtree: true});

    document.addEventListener('keydown', handleEscape);

    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('cb-diagram-zoom-open', Boolean(activeSvgMarkup));

    return () => {
      document.body.classList.remove('cb-diagram-zoom-open');
    };
  }, [activeSvgMarkup]);

  return (
    <>
      {children}
      {activeSvgMarkup && (
        <div
          className="cb-diagram-zoom-overlay"
          onClick={() => setActiveSvgMarkup(null)}
          role="presentation">
          <div
            className="cb-diagram-zoom-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={activeLabel}
            onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="cb-diagram-zoom-close"
              aria-label="Close expanded diagram"
              onClick={() => setActiveSvgMarkup(null)}>
              ×
            </button>
            <div
              className="cb-diagram-zoom-stage"
              dangerouslySetInnerHTML={{__html: activeSvgMarkup}}
            />
          </div>
        </div>
      )}
    </>
  );
}
