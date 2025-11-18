import { Alert, OpenableAlert, DeletableAlert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export const BasicClickableAlerts = () => (
  <div className="container">
    <h1>楽天カードフレームワーク - Alert</h1>
    
    <h2>Basic Alert - クリック可能</h2>
    <p>これらのアラートはクリック可能で、リンクとして機能します。</p>

    <Alert
      as="a"
      href="#"
      variant="success"
      title="これは success のアラートです！"
      icon="check"
    />

    <Alert
      as="a"
      href="#"
      variant="danger"
      title={<strong>これは danger のアラートです!</strong>}
      icon="warning-l"
    />

    <Alert
      as="a"
      href="#"
      variant="warning"
      title={<em>これは warning のアラートです！</em>}
      icon="info-l"
    />

    <Alert
      as="a"
      href="#"
      variant="info"
      title="これは info のアラートです！"
      icon="info-l"
    />

    <Alert
      as="a"
      href="#"
      variant="promotion"
      title="これは promotion のアラートです！"
      icon="point-l"
    />

    <Alert
      as="a"
      href="#"
      variant="promotion"
      title="これは promotion のア���ートです！"
      icon="campaign-l"
    />
  </div>
);

export const AlertWithAction = () => (
  <div className="container">
    <h2>Basic Alert - リンク有り</h2>

    <Alert
      variant="success"
      icon="warning-l"
      title={<div className="font-weight-bold">これは success のアラートリンク有りのパターンです</div>}
      action
      actionLink="#"
      actionText="詳細はこちら"
    />
  </div>
);

export const AlertWithBody = () => (
  <div className="container">
    <h2>Basic Alert - 詳細有り</h2>

    <Alert
      variant="success"
      icon="warning-l"
      title={<div className="font-weight-bold">これは success のアラート、詳細有りパターンです</div>}
      body={
        <>
          これは success のアラート、詳細有りパターンです
          <a href="#">これは success のアラート内のリンクです</a>
          これは success のアラート、詳細有りパターンです
          <br />
          これは success のアラート、詳細���りパターンです
        </>
      }
    />
  </div>
);

export const AlertWithBodyAndAction = () => (
  <div className="container">
    <h2>Basic Alert - 詳細・リンク有り</h2>

    <Alert
      variant="success"
      icon="warning-l"
      title={<div className="font-weight-bold">これは success のアラート、詳細有りパターンです</div>}
      body={
        <>
          これは success のアラート、詳細有りパターンです
          <a href="#">これは success のアラート内のリンクです</a>
          これは success のアラート、詳細有りパターンです
          <br />
          これは success のアラート、詳細有りパターンです
        </>
      }
      action
      actionLink="#"
      actionText="詳細はこちら"
    />
  </div>
);

export const AlertWithList = () => (
  <div className="container">
    <h2>Basic Alert - リスト有り</h2>

    <Alert
      variant="success"
      icon="warning-l"
      title={<div className="font-weight-bold">A simple success alert—check it out!</div>}
      list={['alertlist', 'alertlist', 'alertlist']}
    />
  </div>
);

export const AlertBoxLinks = () => (
  <div className="container">
    <h2>Basic Alert - 全体リンク</h2>

    <Alert
      as="a"
      href="#"
      variant="success"
      icon="check"
      title={<em>A simple success alert—check it out!</em>}
      box
    />

    <Alert
      as="a"
      href="#"
      variant="danger"
      icon="warning-l"
      title={<em>A simple danger alert—check it out!</em>}
      box
    />

    <Alert
      as="a"
      href="#"
      variant="warning"
      icon="info-l"
      title={<em>A simple warning alert—check it out!</em>}
      box
    />

    <Alert
      as="a"
      href="#"
      variant="info"
      icon="info-l"
      title={<em>A simple info alert—check it out!</em>}
      box
    />

    <Alert
      as="a"
      href="#"
      variant="promotion"
      icon="point-l"
      title={<em>A simple promotion alert—check it out!</em>}
      box
    />

    <Alert
      as="a"
      href="#"
      variant="promotion"
      icon="campaign-l"
      title={<em>A simple promotion alert—check it out!</em>}
      box
    />
  </div>
);

export const OpenableAlerts = () => (
  <div className="container">
    <h2>Openable Alert</h2>
    <p>開閉可能なアラートです。アコーディオンのJSを使用しています。</p>

    <OpenableAlert
      variant="info"
      icon="info-l"
      title="お知らせのタイトル"
      bodyText="お知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキストお知らせのテキスト"
      actionLink="#"
      actionText="詳細はこちら"
      targetId="collapseAlert"
      defaultExpanded={false}
    />
  </div>
);

export const DeletableAlerts = () => (
  <div className="container">
    <h2>Deletable Alert</h2>
    <p>ユーザーが意図して削除できるアラートです。削除後、��表示のタイミングはcookieで制御しています。</p>

    <DeletableAlert
      id="hide_a"
      variant="promotion"
      icon="point-l"
      title="これは promotion のアラート削除機能付きのパターンです！"
      duration={2}
    />
  </div>
);
