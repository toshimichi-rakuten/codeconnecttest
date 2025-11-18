import React, { useEffect, useRef } from 'react';

export const Alert = ({
  children,
  variant = 'success',
  icon,
  title,
  body,
  action,
  actionLink,
  actionText,
  list,
  as = 'div',
  href,
  box = false,
  className = '',
  ...props
}) => {
  const classes = [
    'alert',
    `alert-${variant}`,
    box && 'alert-box',
    className
  ].filter(Boolean).join(' ');

  const getDefaultIcon = (variant) => {
    const iconMap = {
      success: 'check',
      danger: 'warning-l',
      warning: 'info-l',
      info: 'info-l',
      promotion: 'point-l'
    };
    return iconMap[variant] || 'info-l';
  };

  const iconClass = icon || getDefaultIcon(variant);

  const content = children || (
    <>
      <div className="alert-heading">
        <span className={`rakuten-card-icon alert-icon ${iconClass}`}></span>
        <div className="alert-title">{title}</div>
        {as === 'a' && <span className="rakuten-card-icon chevron-right alert-icon"></span>}
      </div>
      {body && (
        <div className="alert-body alert-body-padding">
          {body}
        </div>
      )}
      {list && (
        <div className="alert-body alert-body-padding">
          <ul className="mb-0">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {action && (
        <div className="alert-action text-right">
          <a href={actionLink || '#'} className="d-inline-flex align-items-center">
            {actionText || '詳細はこちら'}
            <span className="rakuten-card-icon chevron-right"></span>
          </a>
        </div>
      )}
    </>
  );

  if (as === 'a') {
    return (
      <a href={href || '#'} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <div className={classes} {...props}>
      {content}
    </div>
  );
};

export const OpenableAlert = ({
  variant = 'info',
  icon = 'info-l',
  title,
  bodyText,
  actionLink,
  actionText = '詳細はこちら',
  targetId = 'collapseAlert',
  defaultExpanded = false
}) => {
  const alertRef = useRef(null);

  useEffect(() => {
    const initAlert = () => {
      if (typeof window !== 'undefined' && window.$ && alertRef.current) {
        const loadScript = () => {
          const script = document.createElement('script');
          script.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/accordion.min.js';
          script.async = true;
          
          script.onload = () => {
            setupAlertHandlers();
          };
          
          document.body.appendChild(script);
          
          return script;
        };

        const setupAlertHandlers = () => {
          if (alertRef.current && window.$) {
            const $button = window.$(alertRef.current).find('[data-toggle="accordion"]');
            $button.off('click').on('click', function(e) {
              e.preventDefault();
              const $this = window.$(this);
              const target = $this.data('target');
              const $target = window.$(target);
              
              if ($this.hasClass('collapsed')) {
                $this.removeClass('collapsed');
                $this.attr('aria-expanded', 'true');
                $target.removeClass('collapsed');
                $target.attr('aria-hidden', 'false');
              } else {
                $this.addClass('collapsed');
                $this.attr('aria-expanded', 'false');
                $target.addClass('collapsed');
                $target.attr('aria-hidden', 'true');
              }
            });
          }
        };

        const existingScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/accordion.min.js"]');
        
        if (existingScript) {
          setupAlertHandlers();
        } else {
          const script = loadScript();
          return () => {
            if (script && script.parentNode) {
              script.parentNode.removeChild(script);
            }
          };
        }
      }
    };

    const timer = setTimeout(initAlert, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const buttonClass = defaultExpanded ? `accordion-alert-button alert-${variant}` : `accordion-alert-button alert-${variant} collapsed`;
  const bodyClass = defaultExpanded ? 'alert-body accordion-alert-body' : 'alert-body accordion-alert-body collapsed';

  return (
    <div ref={alertRef} className={`accordion-alert-item alert-${variant}`}>
      <div>
        <button
          type="button"
          data-toggle="accordion"
          data-target={`#${targetId}`}
          aria-expanded={defaultExpanded}
          aria-controls={targetId}
          className={buttonClass}
        >
          <span className={`rakuten-card-icon ${icon} alert-icon`}></span>
          <div className="alert-title accordion-alert-title font-weight-bold">
            {title}
          </div>
          <span className="accordion-alert-button-icon rakuten-card-icon chevron-up"></span>
        </button>
      </div>
      <div
        id={targetId}
        aria-hidden={!defaultExpanded}
        className={bodyClass}
      >
        <div className="accordion-alert-body-text">
          {bodyText}
          {actionLink && (
            <div className="text-right mt-1">
              <a href={actionLink} className="text-underline accordion-alert-body-text-link">
                {actionText}
                <span className="rakuten-card-icon chevron-right ml-half"></span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const DeletableAlert = ({
  id = 'hide_a',
  variant = 'promotion',
  icon = 'point-l',
  title,
  duration = 2
}) => {
  const alertRef = useRef(null);

  useEffect(() => {
    const initAlert = () => {
      if (typeof window !== 'undefined' && window.$) {
        const loadScript = () => {
          const script = document.createElement('script');
          script.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/alert.min.js';
          script.async = true;
          document.body.appendChild(script);
          
          return script;
        };

        const existingScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/alert.min.js"]');
        
        if (!existingScript) {
          const script = loadScript();
          return () => {
            if (script && script.parentNode) {
              script.parentNode.removeChild(script);
            }
          };
        }
      }
    };

    const timer = setTimeout(initAlert, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={alertRef}
      id={id}
      className={`alert alert-${variant} alert-delete js-hide-alert`}
      data-duration={duration}
    >
      <button className="alert-delete__btn js-hide-alert-botton">
        <div className="alert-delete__btn--contents"></div>
      </button>
      <div className="alert-heading">
        <span className={`rakuten-card-icon ${icon} alert-icon`}></span>
        <div className="alert-title">{title}</div>
      </div>
    </div>
  );
};
