### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
VOLUME /var/cache/nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/app /usr/share/nginx/html