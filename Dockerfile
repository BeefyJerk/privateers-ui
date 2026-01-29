# Build stage
FROM node:20-alpine AS builder

# Increase memory for Node
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages/ui/package.json ./packages/ui/
COPY apps/storybook/package.json ./apps/storybook/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/ui ./packages/ui
COPY apps/storybook ./apps/storybook

# Build UI first
RUN pnpm --filter @privateers/ui build

# Build Storybook with increased memory
RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm --filter storybook build

# Production stage - lightweight
FROM node:20-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/apps/storybook/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
