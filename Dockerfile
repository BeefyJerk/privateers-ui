FROM node:20-alpine

WORKDIR /app

# Copy the pre-built storybook
COPY apps/storybook/dist ./storybook-static

# Install serve (optimized for SPAs)
RUN npm install -g serve

# Railway uses PORT env variable
ENV PORT=3000
EXPOSE 3000

# Use serve with configuration
CMD ["sh", "-c", "serve storybook-static -l $PORT --config storybook-static/serve.json"]
