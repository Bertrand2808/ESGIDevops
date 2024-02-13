FROM node:20.11.0
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./index.js /app/
LABEL version="Une image avec NPM et Node préconfiguré"
ENV PATH $PATH:/app/node_modules/jshint/bin
