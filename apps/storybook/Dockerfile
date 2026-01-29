# Build stage
FROM node:20-alpine AS builder

# Increase Node memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy all files (monorepo structure)
COPY . .

# Install dependencies with legacy peer deps to avoid React version conflicts
RUN pnpm install --no-frozen-lockfile

# Build UI package first
RUN pnpm --filter @privateers/ui build

# Build Storybook
RUN pnpm --filter storybook build

# Production stage - serve static files
FROM nginx:alpine

# Copy built storybook to nginx
COPY --from=builder /app/apps/storybook/dist /usr/share/nginx/html

# Nginx config
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
