FROM node:lts-alpine

RUN mkdir -p /app/ui

WORKDIR /app

COPY entrypoint.sh /usr/src/app/entrypoint.sh

RUN chmod +x /usr/src/app/entrypoint.sh

RUN apk update \
    && apk upgrade \
    && apk add --no-cache --upgrade bash

EXPOSE 3000