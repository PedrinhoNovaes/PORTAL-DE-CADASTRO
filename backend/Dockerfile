FROM node:10-alpine

ADD . /backend
WORKDIR /backend

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE 3000

RUN npm install --no-optional
RUN npm cache clean --force

CMD ["npm", "start"]
