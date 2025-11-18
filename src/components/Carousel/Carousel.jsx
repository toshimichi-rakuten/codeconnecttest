import React, { useEffect, useRef } from 'react';

export const CarouselItem = ({ children, className = '', ...props }) => {
  return (
    <div className={`carousel-item ${className}`} role="group" aria-roledescription="slide" {...props}>
      {children}
    </div>
  );
};

export const Carousel = ({
  children,
  dots = false,
  arrows = false,
  autoplay = false,
  autoplaySpeed = 3000,
  center = false,
  show = 1,
  scroll = 1,
  id,
  ariaLabel = 'カルーセル',
  className = '',
  ...props
}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      if (typeof window !== 'undefined' && window.$) {
        const existingSlickScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/slick.min.js"]');
        const existingCarouselScript = document.querySelector('script[src="https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/carousel.min.js"]');
        
        if (!existingSlickScript) {
          const slickScript = document.createElement('script');
          slickScript.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/slick.min.js';
          slickScript.async = true;
          document.body.appendChild(slickScript);
        }
        
        if (!existingCarouselScript) {
          const carouselScript = document.createElement('script');
          carouselScript.src = 'https://static.card.jp.rakuten-static.com/card_corp/pc/js/common/framework/5.0.0/carousel.min.js';
          carouselScript.async = true;
          document.body.appendChild(carouselScript);
        }
      }
    };

    const timer = setTimeout(initCarousel, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      id={id}
      className={`carousel ${className}`}
      data-toggle="carousel"
      data-dots={dots ? 'true' : undefined}
      data-arrows={arrows ? 'true' : undefined}
      data-autoplay={autoplay ? 'true' : undefined}
      data-autoplay-speed={autoplay ? autoplaySpeed : undefined}
      data-center={center ? 'true' : undefined}
      data-show={show > 1 ? show : undefined}
      data-scroll={scroll > 1 ? scroll : undefined}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      aria-live="polite"
      {...props}
    >
      {children}
    </div>
  );
};

export const CarouselAutoplayButton = ({ carouselId, className = '', ...props }) => {
  return (
    <button
      className={`js-toggle-autoplay carousel-autoplay-button btn btn-secondary mt-2 ${className}`}
      data-carousel-id={carouselId}
      aria-label="自動再生停止ボタン"
      {...props}
    >
      自動再生 停止/開始
    </button>
  );
};
