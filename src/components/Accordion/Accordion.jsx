import React, { useEffect, useRef } from 'react';

export const AccordionItem = ({
  id,
  title,
  subtitle,
  children,
  defaultExpanded = false,
}) => {
  const buttonClass = defaultExpanded ? 'accordion-button expanded' : 'accordion-button collapsed';
  const collapseClass = defaultExpanded ? 'accordion-collapse' : 'accordion-collapse collapsed';

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={buttonClass}
          type="button"
          data-toggle="accordion"
          data-target={`#${id}`}
          aria-controls={id}
          aria-expanded={defaultExpanded}
        >
          <span className="accordion-button-text">
            {subtitle ? (
              <>
                <span className="accordion-title">{title}</span>
                <span className="accordion-subtitle d-block">{subtitle}</span>
              </>
            ) : (
              title
            )}
          </span>
          <span className="accordion-button-icon rakuten-card-icon chevron-up"></span>
        </button>
      </h2>
      <div
        id={id}
        className={collapseClass}
        aria-hidden={!defaultExpanded}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export const Accordion = ({ children, flush = false, id, className = '' }) => {
  const accordionRef = useRef(null);

  useEffect(() => {
    const initAccordion = () => {
      if (typeof window !== 'undefined' && window.$) {
        const existingScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/accordion.min.js"]');
        
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/accordion.min.js';
          script.async = true;
          document.body.appendChild(script);
        }
      }
    };

    const timer = setTimeout(initAccordion, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const classes = ['accordion', flush && 'accordion-flush', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={accordionRef} className={classes} id={id}>
      {children}
    </div>
  );
};
