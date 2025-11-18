import { Carousel, CarouselItem, CarouselAutoplayButton } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
};

export const BasicCarousel = () => (
  <div className="container">
    <h1>楽天カードフレームワーク - Carousel</h1>

    <section>
      <h2>Basic Carousel</h2>
      <p>基本的なカルーセルです。</p>

      <Carousel ariaLabel="基本カルーセル">
        <CarouselItem>
          <div style={{ background: '#f8f9fa', padding: '40px', textAlign: 'center', border: '1px solid #dee2e6' }}>
            スライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f8f9fa', padding: '40px', textAlign: 'center', border: '1px solid #dee2e6' }}>
            スライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f8f9fa', padding: '40px', textAlign: 'center', border: '1px solid #dee2e6' }}>
            スライド 3
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const DotCarousel = () => (
  <div className="container">
    <section>
      <h2>Dot Carousel</h2>
      <p>インディケーターとしてドットを表示するカルーセルです。</p>

      <Carousel dots ariaLabel="Dotカルーセル">
        <CarouselItem>
          <div style={{ background: '#e3f2fd', padding: '40px', textAlign: 'center', border: '1px solid #90caf9' }}>
            ドット付きスライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e3f2fd', padding: '40px', textAlign: 'center', border: '1px solid #90caf9' }}>
            ドット付きスライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e3f2fd', padding: '40px', textAlign: 'center', border: '1px solid #90caf9' }}>
            ドット付きスライド 3
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const ArrowCarousel = () => (
  <div className="container">
    <section>
      <h2>Arrow Carousel</h2>
      <p>左右にアローを表示するカルーセルです。</p>

      <Carousel id="carousel-arrow" arrows ariaLabel="Arrowカルーセル">
        <CarouselItem>
          <div style={{ background: '#e8f5e8', padding: '40px', textAlign: 'center', border: '1px solid #a5d6a7' }}>
            アロー付きスライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8f5e8', padding: '40px', textAlign: 'center', border: '1px solid #a5d6a7' }}>
            アロー付きスライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8f5e8', padding: '40px', textAlign: 'center', border: '1px solid #a5d6a7' }}>
            アロー付きスライド 3
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const AutoPlayCarousel = () => (
  <div className="container">
    <section>
      <h2>AutoPlay Carousel</h2>
      <p>自動再生するカルーセルです。自動再生停止ボタンも含まれています。</p>

      <Carousel
        id="carousel-autoplay"
        arrows
        dots
        autoplay
        autoplaySpeed={3000}
        ariaLabel="AutoPlayカルーセル"
      >
        <CarouselItem>
          <div style={{ background: '#fff3e0', padding: '40px', textAlign: 'center', border: '1px solid #ffcc80' }}>
            自動再生スライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#fff3e0', padding: '40px', textAlign: 'center', border: '1px solid #ffcc80' }}>
            自動再生スライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#fff3e0', padding: '40px', textAlign: 'center', border: '1px solid #ffcc80' }}>
            自動再生スライド 3
          </div>
        </CarouselItem>
      </Carousel>
      <CarouselAutoplayButton carouselId="carousel-autoplay" />
    </section>
  </div>
);

export const CenterModeCarousel = () => (
  <div className="container">
    <section>
      <h2>Center Mode Carousel</h2>
      <p>センターモードのカルーセルです。</p>

      <Carousel dots center ariaLabel="Centerカルーセル">
        <CarouselItem>
          <div style={{ background: '#fce4ec', padding: '40px', textAlign: 'center', border: '1px solid #f48fb1' }}>
            センターモード スライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#fce4ec', padding: '40px', textAlign: 'center', border: '1px solid #f48fb1' }}>
            センターモード スライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#fce4ec', padding: '40px', textAlign: 'center', border: '1px solid #f48fb1' }}>
            センターモード スライド 3
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#fce4ec', padding: '40px', textAlign: 'center', border: '1px solid #f48fb1' }}>
            センターモード スライド 4
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const ShowMultipleSlidesCarousel = () => (
  <div className="container">
    <section>
      <h2>Show Multiple Slides Carousel</h2>
      <p>一度に複数のスライドを表示するカルーセルです。</p>

      <Carousel dots show={3} ariaLabel="ShowSlideカルーセル">
        <CarouselItem>
          <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #ce93d8', margin: '0 5px' }}>
            マルチスライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #ce93d8', margin: '0 5px' }}>
            マルチスライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #ce93d8', margin: '0 5px' }}>
            マルチスライド 3
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #ce93d8', margin: '0 5px' }}>
            マルチスライド 4
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center', border: '1px solid #ce93d8', margin: '0 5px' }}>
            マルチスライド 5
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const ScrollMultipleSlidesCarousel = () => (
  <div className="container">
    <section>
      <h2>Scroll Multiple Slides Carousel</h2>
      <p>複数スライドを一度に送るカルーセルです。</p>

      <Carousel dots show={3} scroll={2} ariaLabel="ScrollSlideカルーセル">
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 3
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 4
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 5
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e8eaf6', padding: '20px', textAlign: 'center', border: '1px solid #9fa8da', margin: '0 5px' }}>
            スクロールスライド 6
          </div>
        </CarouselItem>
      </Carousel>
    </section>
  </div>
);

export const AllOptionsCombined = () => (
  <div className="container">
    <section>
      <h2>All Options Combined</h2>
      <p>全ての機能を組み合わせたカルーセルです。</p>

      <Carousel
        id="carousel-all-options"
        arrows
        dots
        autoplay
        autoplaySpeed={4000}
        show={2}
        scroll={1}
        ariaLabel="全機能カルーセル"
      >
        <CarouselItem>
          <div style={{ background: '#e0f2f1', padding: '30px', textAlign: 'center', border: '1px solid #80cbc4', margin: '0 5px' }}>
            全機能スライド 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e0f2f1', padding: '30px', textAlign: 'center', border: '1px solid #80cbc4', margin: '0 5px' }}>
            全機能スライド 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e0f2f1', padding: '30px', textAlign: 'center', border: '1px solid #80cbc4', margin: '0 5px' }}>
            全機能スライド 3
          </div>
        </CarouselItem>
        <CarouselItem>
          <div style={{ background: '#e0f2f1', padding: '30px', textAlign: 'center', border: '1px solid #80cbc4', margin: '0 5px' }}>
            全機能スライド 4
          </div>
        </CarouselItem>
      </Carousel>
      <CarouselAutoplayButton carouselId="carousel-all-options" />
    </section>
  </div>
);
