FROM node:20-alpine

WORKDIR /app

# Copy the pre-built storybook
COPY apps/storybook/dist ./storybook-static

# Install serve globally
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Simple serve command - Railway sets PORT env var
CMD ["sh", "-c", "serve storybook-static -s -p ${PORT:-3000}"]
