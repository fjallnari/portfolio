FROM node:24-slim AS runtime
WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=5000

CMD node ./dist/server/entry.mjs