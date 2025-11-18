import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardHeader,
  CardFooter,
  CardImageOverlay,
  CardIcon,
  CardIconImage
} from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
};

export const BasicCard = () => (
  <div className="container">
    <h1>楽天カードフレームワーク - Card</h1>

    <h2>Basic Card</h2>
    <p>スタンダードなカードのレイアウトとスモールバリエーションを組み合わせた例です。</p>

    <div className="row">
      <div className="col-md-6">
        <Card>
          <CardImage
            src="https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=800&q=80"
            alt="空港ラウンジで楽天カードを提示する女性"
          />
          <CardBody>
            <CardTitle>楽天プレミアムカード 特典まとめ</CardTitle>
            <CardText>
              国内外のラウンジ利用や充実した旅行保険、楽天市場でのポイント倍率などハイグレード会員向けの特典を紹介しています。
            </CardText>
            <CardLink href="#" primary>キャンペーン詳細</CardLink>
            <CardLink href="#">利用条件を見る</CardLink>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-6">
        <Card small>
          <CardImage
            src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80"
            alt="カフェで楽天カードアプリを操作する男性"
          />
          <CardBody>
            <CardTitle>楽天カードアプリの新機能</CardTitle>
            <CardText>
              リアルタイム残高通知やポイントの有効期限アラートを備えた最新アップデート内容をわかりやすくまとめています。
            </CardText>
            <CardLink href="#" primary>アップデート情報</CardLink>
            <CardLink href="#">サポートページ</CardLink>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export const ContentTypes = () => (
  <div className="container">
    <h2>Content Types</h2>

    <h3>Body</h3>
    <p>カード本文内で情報を整理する際の基本���な構造です。</p>
    <Card>
      <CardBody>
        楽天カード会員向けダッシュボードでは、今月の利用金額・ポイント獲得履歴・キャンペーン達成状況を1つの画面で確認できます。
      </CardBody>
    </Card>

    <h3>Titles, text, and links</h3>
    <p>タイトルとサブタイトル、説明文、関連リンクの組み合わせ例です。</p>
    <Card>
      <CardBody>
        <CardTitle as="h3">自動家計連携レポート</CardTitle>
        <CardSubtitle>2025年1月度の収支状況</CardSubtitle>
        <CardText>
          銀行口座や楽天ペイ取引と連携し、固定費・変動費・ポイント還元額を自動で分類したレポートを提供します。
        </CardText>
        <CardLink href="#">レポートを見る</CardLink>
        <CardLink href="#">データ連携設定</CardLink>
      </CardBody>
    </Card>
  </div>
);

export const ImagePositions = () => (
  <div className="container">
    <h2>Image</h2>
    <p>画像キャップを上部・下部に配置したカードの例です。</p>

    <div className="row">
      <div className="col-md-6">
        <Card>
          <CardImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="ノートPCで楽天カードのポイント管理画面を確認する人"
            position="top"
          />
          <CardBody>
            <CardText>
              ポイント履歴をグラフ表示で確認し、月別の獲得・利用傾向を分析できます。CSVダウンロードにも対応しています。
            </CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <CardBody>
            <CardText>
              アプリからリワードチケットを即時交換し、QRコードで店頭提示するだけで特典を受けられるサービスを紹介しています。
            </CardText>
          </CardBody>
          <CardImage
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
            alt="ポイント交換カタログを眺める女性"
            position="bottom"
          />
        </Card>
      </div>
    </div>
  </div>
);

export const HorizontalCard = () => (
  <div className="container">
    <h2>Horizontal</h2>
    <p>グリッドレイアウトを活用して画像とテキストを横並びにしたカードです。</p>

    <Card className="mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <CardImage
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
            alt="楽天カードで食事代を支払う家族"
            position="top"
          />
        </div>
        <div className="col-md-8">
          <CardBody>
            <CardTitle>ファミリーボーナスプログラム</CardTitle>
            <CardText>
              家族カードの利用分もまとめてポイント倍率がアップする新制度。買い物履歴から最適な還元スケジュールを提案します。
            </CardText>
            <CardLink href="#">参加手続きを行う</CardLink>
          </CardBody>
        </div>
      </div>
    </Card>
  </div>
);

export const ImageOverlay = () => (
  <div className="container">
    <h2>Image overlays</h2>
    <p>背景画像の上にテキスト情報を重ねたカードです。</p>

    <Card textWhite>
      <CardImage
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
        alt="夕暮れの旅先で街を散策するカップル"
        position="overlay"
      />
      <CardImageOverlay>
        <CardTitle as="h3">旅先でもポイントを自動獲得</CardTitle>
        <CardText>
          現地通貨でのショッピングでも即時レートでポイントが計算され、アプリ通知で利用明細をタイムリーに確認できます。
        </CardText>
      </CardImageOverlay>
    </Card>
  </div>
);

export const IconCards = () => (
  <div className="container">
    <h2>Icon Card</h2>
    <p>アイコンやサブビジュ���ルを組み合わせた情報カードの例です。</p>

    <div className="row">
      <div className="col-md-6">
        <CardIcon>
          <CardImage
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80"
            alt="タブレットで楽天カードのレポートを確認する人"
            position="top"
          />
          <CardBody>
            <CardIconImage
              src="https://static.card.jp.rakuten-static.com/card_corp/pc/img/common/icon/icon_point_m.png"
              alt="楽天ポイントアイコン"
            />
            <CardTitle>ポイント獲得診断レポート</CardTitle>
            <CardText>
              過去6ヶ月の利用履歴からAIが最適なポイント獲得カテゴリを診断し、翌月のおすすめ利用先を提示します。
            </CardText>
            <CardLink href="#" primary>診断を始める</CardLink>
            <CardLink href="#">詳しい解説</CardLink>
          </CardBody>
        </CardIcon>
      </div>
      <div className="col-md-6">
        <CardIcon small>
          <CardImage
            src="https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=800&q=80"
            alt="家計簿アプリと楽天カードを連携する女性"
            position="top"
          />
          <CardBody>
            <CardIconImage
              src="https://static.card.jp.rakuten-static.com/card_corp/pc/img/common/icon/icon_point_m.png"
              alt="楽天ポイントアイコン"
            />
            <CardTitle>家計簿連携リマインダー</CardTitle>
            <CardText>
              マネーアプリとの連携状況を確認し、未分類の支出がある場合にプッシュ通知で整理を促します。
            </CardText>
            <CardLink href="#" primary>連携設定を開く</CardLink>
            <CardLink href="#">ヘルプを確認</CardLink>
          </CardBody>
        </CardIcon>
      </div>
    </div>
  </div>
);

export const HeaderAndFooter = () => (
  <div className="container">
    <h2>Header & Footer</h2>
    <p>ヘッダーとフッターを備えたカード構成です。</p>

    <Card className="text-center">
      <CardHeader>プレミアムサポートからのお知らせ</CardHeader>
      <CardBody>
        <CardTitle>24時間コンシェルジュの活用方法</CardTitle>
        <CardText>
          旅行の手配やレストラン予約、緊急時のカード再発行など、コンシェルジュサービスの活用事例を紹介します。
        </CardText>
        <CardLink href="#" primary>利用方法を見る</CardLink>
      </CardBody>
      <CardFooter>更新日時: 2025年1月20日 18:00</CardFooter>
    </Card>
  </div>
);
