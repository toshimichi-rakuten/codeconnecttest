import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size,
  outline = false,
  block = false,
  disabled = false,
  active = false,
  withIcon = false,
  iconPosition = 'right',
  iconClass = 'chevron-right',
  as = 'button',
  href,
  ariaLabel,
  ariaPressed,
  onClick,
  className = '',
  ...props
}) => {
  const baseClass = 'btn';
  
  const classes = [
    baseClass,
    outline ? `btn-outline-${variant}` : `btn-${variant}`,
    size && `btn-${size}`,
    block && 'btn-block',
    withIcon && 'btn-icon',
    active && 'active',
    disabled && 'disabled',
    className
  ].filter(Boolean).join(' ');

  const iconElement = withIcon && (
    <span className={`rakuten-card-icon ${iconClass}`}></span>
  );

  const content = (
    <>
      {withIcon && iconPosition === 'left' && iconElement}
      {children}
      {withIcon && iconPosition === 'right' && iconElement}
    </>
  );

  const commonProps = {
    className: classes,
    onClick,
    'aria-label': ariaLabel,
    'aria-pressed': ariaPressed,
    ...props
  };

  if (as === 'a') {
    return (
      <a
        href={href || '#'}
        role="button"
        {...commonProps}
        {...(disabled && { tabIndex: -1, 'aria-disabled': 'true' })}
      >
        {content}
      </a>
    );
  }

  if (as === 'input') {
    return (
      <input
        type={props.type || 'button'}
        value={children}
        disabled={disabled}
        {...commonProps}
      />
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={disabled}
      {...commonProps}
    >
      {content}
    </button>
  );
};

export const AnchorButton = ({ children, href = '#', className = '', ...props }) => {
  return (
    <a href={href} className={`anchor anchor-btn ${className}`} {...props}>
      {children}
    </a>
  );
};
