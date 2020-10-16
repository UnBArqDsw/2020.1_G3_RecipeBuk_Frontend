FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json /app
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
COPY . .
CMD ["ng" ,"test"]
EXPOSE 9876
# sudo docker build -t front -f dev.Dockerfile .
# sudo docker run --rm -p 4200:4200 -it front