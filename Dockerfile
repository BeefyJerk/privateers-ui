FROM nginx:alpine

# Copy built storybook
COPY apps/storybook/dist /usr/share/nginx/html

# Create nginx config template that uses PORT env variable
RUN cat > /etc/nginx/templates/default.conf.template << 'EOF'
server {
    listen ${PORT:-80};
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
