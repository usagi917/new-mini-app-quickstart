# ウェイトリスト Mini App クイックスタート

Farcaster / Base 上で動く「ウェイトリスト登録ミニアプリ」のデモです。OnchainKit と Farcaster SDK を使って、メール登録→Farcaster 本人確認→共有キャスト投稿までの最小フローを体験できます。

> **重要**: このリポジトリは学習用デモです。Cubey / Base / Coinbase 公式のトークンやアプリは存在しません（詳細は末尾の注意書きを参照）。

## 事前に必要なもの
- Base App アカウント
- Farcaster アカウント
- Vercel アカウント（ホスティング用）
- Coinbase Developer Platform の Client API Key

## セットアップ（ローカル実行）
1. 依存関係をインストール
   ```bash
   npm install
   ```
2. 環境変数を設定（`.env.local` を作成）
   ```bash
   NEXT_PUBLIC_PROJECT_NAME="Your App Name"
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=<あなたのCDP APIキー>
   NEXT_PUBLIC_URL=http://localhost:3000
   ```
3. 開発サーバーを起動
   ```bash
   npm run dev
   ```
4. ブラウザで `http://localhost:3000` を開く

## このアプリがすること
- `/` でメール入力フォームを表示し、`useQuickAuth` で Farcaster 署名を検証。OK なら `/success` に遷移。
- `/success` では `useComposeCast` で「参加したよ」をキャスト投稿するボタンを提供。
- バックエンドは `app/api/auth/route.ts` が JWT を検証し FID を返すだけの軽い API。データ保存部分は TODO（自分のDBやWebhookに差し替えてください）。

## マニフェストの設定（Base / Farcaster へ公開する情報）
`minikit.config.ts` にアプリアイコン・ヒーロー画像・homeUrl などを定義します。`accountAssociation` は Farcaster の Manifest ツールで署名して取得した値を入れます。

## デプロイ（Vercel）
1. 本番用 URL を発行
   ```bash
   vercel --prod
   ```
2. `.env.local` の `NEXT_PUBLIC_URL` をデプロイ先の URL に更新
3. Vercel に環境変数をアップロード
   ```bash
   vercel env add NEXT_PUBLIC_PROJECT_NAME production
   vercel env add NEXT_PUBLIC_ONCHAINKIT_API_KEY production
   vercel env add NEXT_PUBLIC_URL production
   ```

## Base / Farcaster での確認と公開
1. [base.dev/preview](https://base.dev/preview) にデプロイ URL を入れて表示・起動を確認
2. Manifest ツールで `accountAssociation` を生成し、`minikit.config.ts` に反映
3. 問題なければ Base App で URL を投稿して公開

## 参考ドキュメント
- Mini App 作成チュートリアル: https://docs.base.org/docs/mini-apps/quickstart/create-new-miniapp/

---
## 注意書き（ディスクレーマー）
このプロジェクトは **Base / Coinbase Developer Relations チームによるデモ** です。Cubey / Base / Coinbase に公式トークンや投資商品はありません。関連を名乗る第三者トークンやアプリは無関係であり、売買・接続しないでください。公式情報: https://base.org / https://docs.base.org
