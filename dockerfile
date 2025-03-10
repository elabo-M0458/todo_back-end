# ベースイメージとして公式のNode.jsを使用
FROM node:20

# 作業ディレクトリを作成
WORKDIR /app

# package.json をコピー
COPY package*.json ./

# yarn.lock  をコピー
COPY yarn*.lock ./

# 依存関係をインストール
RUN yarn

# アプリケーションのソースコードをコピー
COPY . .

# Prisma のコード生成
#RUN npx prisma generate

# コンテナ起動時のデフォルトコマンド
CMD ["yarn", "start"]

# ホストとコンテナのポートをマッピング
EXPOSE 3000
