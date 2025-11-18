import React, { useEffect, useRef } from 'react';

export const Tab = ({
  children,
  animation = false,
  border = false,
  className = '',
  ...props
}) => {
  const tabRef = useRef(null);

  useEffect(() => {
    const initTab = () => {
      if (typeof window !== 'undefined' && window.$) {
        const existingScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/tab.min.js"]');
        
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/tab.min.js';
          script.async = true;
          document.body.appendChild(script);
        }
      }
    };

    const timer = setTimeout(initTab, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const containerClasses = [
    'js-tab-container',
    animation && 'js-tab-container--animation',
    border && 'tab-border',
    className
  ].filter(Boolean).join(' ');

  return (
    <div ref={tabRef} className={containerClasses} {...props}>
      {children}
    </div>
  );
};

export const TabList = ({
  children,
  variant = 'bordered',
  animation = false,
  alignment = false,
  className = '',
  ...props
}) => {
  const variantClasses = {
    bordered: 'tab-bordered-a11y',
    background: 'tab-background-a11y',
    round: 'tab-round-a11y'
  };

  const classes = [
    variantClasses[variant] || 'tab-bordered-a11y',
    animation && 'tab-a11y--animation',
    alignment && 'tab-alignment-a11y',
    className
  ].filter(Boolean).join(' ');

  return (
    <div role="tablist" className={classes} {...props}>
      {children}
    </div>
  );
};

export const TabButton = ({
  children,
  id,
  controls,
  variant = 'bordered',
  fillWidth = false,
  defaultActive = false,
  selected,
  tabIndex,
  className = '',
  ...props
}) => {
  const variantClasses = {
    bordered: 'tab-bordered-a11y-item',
    background: 'tab-background-a11y-item',
    round: 'tab-round-a11y-item'
  };

  const classes = [
    'js-tab-button',
    variantClasses[variant] || 'tab-bordered-a11y-item',
    fillWidth && 'flex-fill',
    defaultActive && 'defaultActive',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      role="tab"
      id={id}
      aria-controls={controls}
      aria-selected={selected}
      tabIndex={tabIndex}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabPanel = ({
  children,
  id,
  labelledBy,
  variant = 'bordered',
  hidden,
  tabIndex,
  className = '',
  ...props
}) => {
  const variantClasses = {
    background: 'tab-background-a11y-content-item',
    round: ''
  };

  const classes = [
    variantClasses[variant] || '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      tabIndex={tabIndex}
      hidden={hidden}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};
