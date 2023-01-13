FROM node:18.12.1
ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm ci --production --prefer-offline --no-audit

COPY dist/apps/api  /usr/src/app/dist/apps/api

USER node

EXPOSE 5002

CMD node dist/apps/api/main.js