import React from 'react';

export const Card = ({
  children,
  small = false,
  textWhite = false,
  className = '',
  ...props
}) => {
  const classes = [
    'card',
    small && 'card-small',
    textWhite && 'text-white',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardImage = ({
  src,
  alt = '',
  position = 'top',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const classes = [
    position === 'top' && 'card-img-top',
    position === 'bottom' && 'card-img-bottom',
    position === 'overlay' && 'card-img',
    className
  ].filter(Boolean).join(' ');

  return <img src={src} className={classes} alt={alt} loading={loading} {...props} />;
};

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, as = 'h4', className = '', ...props }) => {
  const Tag = as;
  return (
    <Tag className={`card-title ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export const CardSubtitle = ({ children, as = 'h4', className = '', ...props }) => {
  const Tag = as;
  return (
    <Tag className={`card-subtitle mb-2 text-muted ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export const CardText = ({ children, className = '', small = false, ...props }) => {
  const classes = [
    'card-text',
    small && 'text-muted',
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export const CardLink = ({ children, href = '#', primary = false, className = '', ...props }) => {
  const classes = [
    'card-link',
    primary && 'btn btn-primary',
    className
  ].filter(Boolean).join(' ');

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-footer text-muted ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardImageOverlay = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-img-overlay ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardIcon = ({ children, small = false, className = '', ...props }) => {
  const classes = [
    'card',
    'card-icon',
    small && 'card-small',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardIconImage = ({ src, alt = '', width = 80, height = 80, loading = 'lazy', className = '', ...props }) => {
  return (
    <div className={`card-icon-img ${className}`}>
      <img src={src} alt={alt} width={width} height={height} loading={loading} {...props} />
    </div>
  );
};
