# Design System Skill
## 越中舟橋駅 車内メロディLP 専用デザインシステム

このSkillは、越中舟橋駅の車内メロディクリエイト体験LPに特化したデザインガイドラインです。

---

## 🎨 ブランドコンセプト

### デザインテーマ
**「レトロ鉄道 × 未来のクリエイティビティ」**

- 富山地方鉄道の歴史と伝統（レトロ感）
- Web3・NFTという最先端技術（未来感）
- この2つの融合を視覚的に表現

### トーン&マナー
- **誠実で温かみのある**: 地域を大切にする姿勢
- **ワクワク感**: 一生に一度の体験を強調
- **高級感**: 25万円という価格に見合う品質

---

## 🎨 カラーパレット

### メインカラー: フォレストグリーン
```
HEX: #00552E
RGB: 0, 85, 46
用途: ヘッダー、フッター、セクション区切り、主要な見出し背景
```

**このカラーの意味**
- 富山の豊かな自然
- 鉄道の安定感・信頼性
- 落ち着いた高級感

### ベースカラー: ナチュラルホワイト
```
HEX: #F9F9F9
RGB: 249, 249, 249
用途: 背景全体、カードの背景
```

**このカラーの意味**
- 真っ白すぎない柔らかさ
- レトロ感との相性
- 目に優しい

### アクセントカラー: 山吹色（車両イエロー）
```
HEX: #ECAE0F
RGB: 236, 174, 15
用途: CTAボタン、重要な数字、ハイライト
```

**このカラーの意味**
- 富山地方鉄道の車両カラー
- エネルギッシュで前向き
- 緑との補色関係で視認性抜群

### テキストカラー: ダークグリーン
```
HEX: #003311
RGB: 0, 51, 17
用途: 本文、小見出し
```

**このカラーの意味**
- 真っ黒よりも洗練された印象
- メインカラーとの調和
- 可読性を保ちながら個性を出す

### サブカラー: ライトグレー
```
HEX: #E0E0E0
RGB: 224, 224, 224
用途: 境界線、カードの影、入力フォームの枠線
```

---

## 📝 タイポグラフィ

### フォントファミリー

#### 和文
**見出し（H1, H2）**
```css
font-family: 'Noto Sans JP', sans-serif;
font-weight: 700 (Bold) または 900 (Black);
```
- モダンで力強い
- 鉄道の堅牢性を表現
- 視認性が高い

**本文・小見出し（H3, p）**
```css
font-family: 'Noto Sans JP', sans-serif;
font-weight: 400 (Regular) または 500 (Medium);
```
- 長文でも読みやすい
- 親しみやすさと信頼性

#### 欧文・数字
**アクセント（価格、数字強調）**
```css
font-family: 'Montserrat', sans-serif;
font-weight: 700 (Bold);
```
- 数字が美しく見える
- モダンでスタイリッシュ
- 和文との相性が良い

### フォントサイズ階層

#### PC版
```
H1 (FVキャッチコピー):
  font-size: 56px;
  line-height: 1.3;
  letter-spacing: 0.02em;

H2 (セクション見出し):
  font-size: 40px;
  line-height: 1.4;
  letter-spacing: 0.03em;

H3 (小見出し):
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.02em;

本文 (p):
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.05em;

小文字 (注意書き):
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.03em;
```

#### スマホ版（SP）
```
H1: 36px
H2: 28px
H3: 22px
本文: 16px
小文字: 12px
```

### 特殊スタイル

**価格表示**
```css
font-size: 48px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
color: #00552E; /* メインカラー */
```

**限定数・期間の強調**
```css
font-size: 20px;
font-weight: 700;
color: #ECAE0F; /* アクセントカラー */
background: linear-gradient(transparent 60%, rgba(236, 174, 15, 0.3) 60%);
/* マーカー風ハイライト */
```

---

## 🧱 コンポーネント設計

### CTAボタン（プライマリー）

**デザイン仕様**
```css
background: #ECAE0F; /* 山吹色 */
color: #FFFFFF;
font-size: 20px;
font-weight: 700;
padding: 20px 60px;
border-radius: 50px; /* 丸みを持たせる */
box-shadow: 0 4px 12px rgba(236, 174, 15, 0.4);
transition: all 0.3s ease;

/* ホバー時 */
background: #D39D0D; /* 少し暗く */
transform: translateY(-2px);
box-shadow: 0 6px 16px rgba(236, 174, 15, 0.6);
```

**配置ルール**
- FVに1つ（画面中央）
- 各セクションの最後に1つ
- 最終CTAセクションに最大サイズで1つ

**SP版の調整**
```css
font-size: 18px;
padding: 16px 40px;
width: 90%; /* 画面幅の90% */
```

---

### カードコンポーネント

**スタンダードカード**
```css
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 12px;
padding: 32px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;

/* ホバー時 */
transform: translateY(-4px);
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
```

**特典カード（NFT）**
```css
background: linear-gradient(135deg, #00552E 0%, #003311 100%);
color: #FFFFFF;
border: 2px solid #ECAE0F;
border-radius: 16px;
padding: 40px;
box-shadow: 0 8px 24px rgba(0, 85, 46, 0.3);
```

---

### セクション区切り

**グリーンバンド**
```css
background: #00552E;
height: 8px;
width: 100%;
margin: 80px 0;
```

**グラデーション区切り**
```css
background: linear-gradient(to right, #00552E, #ECAE0F, #00552E);
height: 2px;
width: 60%;
margin: 60px auto;
```

---

## 📐 レイアウトグリッド

### コンテナ幅
```
PC: 最大1200px（中央揃え）
TB: 最大960px
SP: 左右16px のマージン
```

### セクション間の余白
```
PC: 120px
TB: 80px
SP: 60px
```

### 2カラムレイアウト
```
PC: 50% / 50% または 40% / 60%
TB: 50% / 50%
SP: 100%（縦積み）
```

### 3カラムレイアウト（ベネフィット表示など）
```
PC: 33.33% / 33.33% / 33.33%（gap: 24px）
TB: 50% / 50%（3つ目は次の行）
SP: 100%（縦積み）
```

---

## ✨ アニメーション設計

### アニメーションのコンセプト
**「電車の到着を待つワクワク感」**

### 主要アニメーション

#### 1. FVのエントランスアニメーション
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* キャッチコピー */
animation: fadeInUp 1s ease-out;
animation-delay: 0.3s;
```

#### 2. スクロールトリガー（セクション出現）
```
トリガー位置: 画面下端から20%の位置に要素が来たとき
アニメーション: フェードイン + 下から上へスライド
duration: 0.6s
easing: ease-out
```

#### 3. 数字のカウントアップ
```javascript
// 価格表示
target: 250,000円
duration: 2s
easing: ease-out
format: 3桁区切りカンマ
```

#### 4. 電車の走行アニメーション（オプション）
```css
/* SVGまたは画像 */
@keyframes trainMove {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100vw);
  }
}

animation: trainMove 8s linear infinite;
```

#### 5. CTAボタンのパルス（軽微）
```css
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(236, 174, 15, 0.4);
  }
  50% {
    box-shadow: 0 4px 16px rgba(236, 174, 15, 0.7);
  }
}

animation: pulse 2s ease-in-out infinite;
```

### アニメーションの制約
- **控えめに**: 過度なアニメーションは避ける
- **パフォーマンス**: transform と opacity のみ使用（GPU加速）
- **アクセシビリティ**: `prefers-reduced-motion` に対応

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🖼️ 画像の扱い

### 既存画像の配置

#### 01.jpg/png（FV背景）
```css
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
object-fit: cover;
filter: brightness(0.7); /* 少し暗く */
z-index: -1;
```

**テキストの視認性確保**
- 背景に半透明のグラデーションオーバーレイ
```css
background: linear-gradient(135deg, 
  rgba(0, 85, 46, 0.8) 0%, 
  rgba(0, 51, 17, 0.6) 100%
);
```

#### 02.jpg/png（納品ステップ）
```css
width: 100%;
max-width: 800px;
border-radius: 12px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
margin-bottom: 40px;
```

#### 03.jpg/png（新しい試み）
**2カラムレイアウトで使用**
```
左: テキスト（60%）
右: 画像（40%）

または

背景全体に薄く配置
```

#### 04.jpg/png（記念の権利証）
```css
width: 100%;
max-width: 600px;
border: 4px solid #ECAE0F;
border-radius: 16px;
box-shadow: 0 12px 32px rgba(0, 85, 46, 0.3);
```

### 画像の最適化
- **WebP形式**: 容量を30〜50%削減
- **遅延読み込み**: `loading="lazy"`
- **レスポンシブ**: `srcset` で複数サイズ用意

---

## 🎭 セクション別デザイン仕様

### 1. FVセクション
```
背景: 01.jpg/png + グリーンのオーバーレイ
高さ: 100vh（全画面）
配置: 中央揃え
テキスト色: #FFFFFF
```

### 2. コンセプトセクション
```
背景: #F9F9F9
レイアウト: 3カラム（カード）
カード背景: #FFFFFF
アイコン色: #ECAE0F
```

### 3. ストーリーセクション
```
背景: 03.jpg/png（薄く） または 2カラム
テキスト背景: 半透明の白
パディング: 80px（上下）
```

### 4. 詳細セクション
```
背景: #FFFFFF
情報ボックス: 
  background: linear-gradient(135deg, #00552E, #003311);
  color: #FFFFFF;
  border-left: 8px solid #ECAE0F;
```

### 5. 特典セクション
```
背景: #00552E
カード: 04.jpg/png を大きく配置
テキスト色: #FFFFFF または #ECAE0F
```

### 6. フローセクション
```
背景: #F9F9F9
画像: 02.jpg/png を上部配置
ステップカード: 
  background: #FFFFFF;
  border-top: 4px solid #ECAE0F;
```

### 7. 最終CTAセクション
```
背景: linear-gradient(135deg, #00552E 0%, #003311 100%);
ボタン: 最大サイズ（PC: 240px x 60px）
テキスト色: #FFFFFF
```

---

## 📱 レスポンシブ調整

### スマホでの特別対応

**FVのテキスト**
```
PC: 56px
SP: 32px（2行表示を想定）
```

**3カラム → 1カラム**
```
gap: 24px（縦方向）
```

**CTAボタン**
```
width: 90%;
font-size: 18px;
padding: 16px 0;
```

**画像**
```
縦長の構図も活用
aspect-ratio を調整
```

---

## 🛠️ 実装のベストプラクティス

### CSS変数で管理
```css
:root {
  /* カラー */
  --color-main: #00552E;
  --color-accent: #ECAE0F;
  --color-base: #F9F9F9;
  --color-text: #003311;
  --color-border: #E0E0E0;
  
  /* フォント */
  --font-ja: 'Noto Sans JP', sans-serif;
  --font-en: 'Montserrat', sans-serif;
  
  /* スペーシング */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 32px;
  --space-lg: 60px;
  --space-xl: 120px;
  
  /* ブレークポイント */
  --bp-sp: 767px;
  --bp-tb: 1023px;
}
```

### 再利用可能なクラス
```css
.btn-primary { /* CTAボタン */ }
.card { /* カード共通 */ }
.section { /* セクション共通 */ }
.container { /* コンテナ */ }
```

---

## ✅ デザイン実装チェックリスト

### カラー
- [ ] メインカラー（#00552E）が適切に使われているか
- [ ] アクセントカラー（#ECAE0F）がCTAに使われているか
- [ ] テキストカラー（#003311）が読みやすいか
- [ ] コントラスト比は十分か（WCAG AA以上）

### タイポグラフィ
- [ ] フォントは正しく読み込まれているか
- [ ] サイズ階層は明確か
- [ ] 行間は適切か（1.6〜1.8）
- [ ] 文字間隔は美しいか

### レイアウト
- [ ] セクション間の余白は十分か
- [ ] 中央揃えが正しく機能しているか
- [ ] レスポンシブ対応ができているか
- [ ] スマホで横スクロールが発生していないか

### コンポーネント
- [ ] CTAボタンは目立つか
- [ ] ホバーエフェクトは動作するか
- [ ] カードのシャドウは適切か
- [ ] 画像は最適化されているか

### アニメーション
- [ ] スムーズに動作するか（60fps）
- [ ] 過度なアニメーションはないか
- [ ] reduced-motion に対応しているか

---

**このデザインシステムに従って、統一感のある美しいLPを構築しましょう!**
