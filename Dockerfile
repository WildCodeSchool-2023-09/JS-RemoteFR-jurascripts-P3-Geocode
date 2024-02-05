# Dockerfile backend
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./ .

RUN npm install
