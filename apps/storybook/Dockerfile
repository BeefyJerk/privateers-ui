# Build stage
FROM node:20-alpine AS builder

# Increase Node memory limit for TypeScript compilation
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy all workspace config files first
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json tsconfig.base.json ./
COPY packages/ui/package.json ./packages/ui/
COPY apps/storybook/package.json ./apps/storybook/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/ui ./packages/ui
COPY apps/storybook ./apps/storybook

# Build UI package (skip dts if it fails, Storybook doesn't need it)
RUN cd packages/ui && pnpm build || (echo "Full build failed, trying without dts" && npx tsup src/index.ts src/tailwind/preset.ts --format esm,cjs --no-dts)

# Build Storybook
RUN pnpm --filter storybook build

# Production stage - serve static files
FROM nginx:alpine

# Copy built storybook to nginx
COPY --from=builder /app/apps/storybook/dist /usr/share/nginx/html

# Copy nginx config for SPA routing
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
