FROM node:20-alpine

WORKDIR /app

# Copy the pre-built storybook
COPY apps/storybook/dist ./storybook-static

# Install serve
RUN npm install -g serve

# Railway uses PORT env variable
ENV PORT=3000
EXPOSE 3000

# Serve static files - serve uses -l for listen
CMD serve storybook-static -s -l tcp://0.0.0.0:${PORT}
