# Super simple - just serve the pre-built static files
FROM node:20-alpine
RUN npm install -g serve
WORKDIR /app
COPY apps/storybook/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
