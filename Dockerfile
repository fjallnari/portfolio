FROM oven/bun

WORKDIR /app
COPY package.json package.json
RUN bun install

COPY . .
RUN bun --bun run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
ENTRYPOINT ["bun", "--bun", "./dist/server/entry.mjs"]

# FROM node:lts AS runtime
# WORKDIR /app

# COPY . .

# RUN npm install -g pnpm

# RUN pnpm install --frozen-lockfile
# RUN pnpm run build

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321
# CMD node ./dist/server/entry.mjs


# FROM node:20

# WORKDIR /app

# RUN npm install -g pnpm

# COPY package*.json ./pnpm-lock.yaml ./

# RUN pnpm install --frozen-lockfile

# COPY . .

# ENV HOST=0.0.0.0
# ENV PORT=3000
# EXPOSE 3000

# CMD pnpm run build && node ./dist/server/entry.mjs
