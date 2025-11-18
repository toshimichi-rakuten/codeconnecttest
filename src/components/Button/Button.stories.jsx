import { Button, AnchorButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export const BasicButtons = () => (
  <div className="container">
    <h2>Basic Buttons</h2>
    <p>基本的なボタンスタイルです。</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
    </div>
  </div>
);

export const ButtonTags = () => (
  <div className="container">
    <h2>Button Tags</h2>
    <p>.btnクラスは様々なHTML要素で使用できます。</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button as="a" href="#" variant="primary">Link</Button>
      <Button variant="primary" type="submit">Button</Button>
      <Button as="input" variant="primary" type="button">Input</Button>
      <Button as="input" variant="primary" type="submit">Submit</Button>
      <Button as="input" variant="primary" type="reset">Reset</Button>
    </div>
  </div>
);

export const OutlineButtons = () => (
  <div className="container">
    <h2>Outline Buttons</h2>
    <p>.btn-outline-*を適用すると枠線を残してボタンの背景色を透過できます。</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" outline>Primary</Button>
      <Button variant="secondary" outline>Secondary</Button>
    </div>
  </div>
);

export const WithIcon = () => (
  <div className="container">
    <h2>With Icon</h2>
    <p>アイコンフォントと組み合わせることができます。</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'column' }}>
      <Button variant="primary" withIcon iconClass="chevron-right">
        With Icon
      </Button>
      <Button variant="primary" outline withIcon iconClass="chevron-right">
        With Icon
      </Button>
      <Button variant="secondary" outline withIcon iconClass="arrow-down" className="text-link">
        With Icon and Text With Icon and Text<br />With Icon and Text
      </Button>
    </div>
  </div>
);

export const Sizes = () => (
  <div className="container">
    <h2>Size</h2>
    <p>様々なサイズのボタンが利用できます。</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" size="large">Large button</Button>
      <Button variant="primary" size="medium">Medium button</Button>
      <Button variant="primary">Default button</Button>
      <Button variant="primary" size="small">Small button</Button>
      <Button variant="primary" size="xsmall">X-Small button</Button>
    </div>
  </div>
);

export const BlockButtons = () => (
  <div className="container">
    <h2>Block</h2>
    <p>ブロックレベルの幅いっぱいに広がるボタンです。</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary" block>Block level button</Button>
      <Button variant="primary" outline block>Block level button</Button>
    </div>
  </div>
);

export const States = () => (
  <div className="container">
    <h2>Active & Disabled State</h2>
    <p>data属性やクラスと一緒に使用することでステータスに合わせてスタイルを変更できます。</p>
    
    <h3>Active State</h3>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      <Button as="a" href="#" variant="primary" active ariaPressed="true">
        Primary active link
      </Button>
      <Button variant="primary" active>Primary active button</Button>
    </div>

    <h3>Disabled State</h3>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button as="a" href="#" variant="primary" outline disabled>
        Primary disabled link
      </Button>
      <Button variant="primary" disabled>Primary disabled button</Button>
      <Button variant="link" disabled>Disabled Link</Button>
    </div>
  </div>
);

export const AnchorButtons = () => (
  <div className="container">
    <h2>Anchor Button</h2>
    <p>特別なアンカーボタンスタイルです。</p>
    <AnchorButton href="#">カテゴリから探す</AnchorButton>
  </div>
);

export const IconButtons = () => (
  <div className="container">
    <h2>Icon Buttons</h2>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" withIcon iconClass="chevron-left" iconPosition="left">
        Back
      </Button>
      <Button variant="primary" withIcon iconClass="chevron-right">
        Next
      </Button>
      <Button variant="secondary" outline withIcon iconClass="download">
        Download
      </Button>
    </div>
  </div>
);

export const AllVariations = () => (
  <div className="container">
    <h2>All Button Styles Showcase</h2>
    <p>全てのボタンスタイルの一覧です。</p>

    <div className="mb-3">
      <h3>Primary Buttons</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size="large">Primary Large</Button>
        <Button variant="primary" size="medium">Primary Medium</Button>
        <Button variant="primary">Primary Default</Button>
        <Button variant="primary" size="small">Primary Small</Button>
        <Button variant="primary" size="xsmall">Primary X-Small</Button>
      </div>
    </div>

    <div className="mb-3">
      <h3>Outline Buttons</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" outline size="large">Outline Large</Button>
        <Button variant="primary" outline size="medium">Outline Medium</Button>
        <Button variant="primary" outline>Outline Default</Button>
        <Button variant="primary" outline size="small">Outline Small</Button>
        <Button variant="primary" outline size="xsmall">Outline X-Small</Button>
      </div>
    </div>

    <div className="mb-3">
      <h3>Icon Buttons</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" withIcon iconClass="chevron-left" iconPosition="left">
          Back
        </Button>
        <Button variant="primary" withIcon iconClass="chevron-right">
          Next
        </Button>
        <Button variant="secondary" outline withIcon iconClass="download">
          Download
        </Button>
      </div>
    </div>
  </div>
);
