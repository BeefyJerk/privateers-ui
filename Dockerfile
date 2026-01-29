# Simple static file server for Storybook
FROM node:20-alpine
RUN npm install -g http-server
WORKDIR /app
COPY apps/storybook/dist ./dist
EXPOSE 3000
CMD ["http-server", "dist", "-p", "3000", "-c-1", "--cors"]
