FROM nginx

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN REACT_API=$yarn build

COPY build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
