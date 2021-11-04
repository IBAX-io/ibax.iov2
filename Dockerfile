FROM node:lts as builder
WORKDIR /app
COPY . .
RUN rm -rf .nuxt
RUN rm -rf node_modules
RUN rm -rf dist
RUN yarn install
RUN yarn build
ENV HOST 0.0.0.0
EXPOSE 8084
CMD [ "yarn", "start" ]
