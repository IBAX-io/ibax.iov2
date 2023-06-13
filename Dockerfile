FROM node:16 as builder

WORKDIR /app

RUN wget https://github.com/IBAX-io/ibax.iov2/archive/main.zip && \
 unzip main.zip && \
 rm main.zip && \
 cd ibax.iov2-main && \
 npm install -g pnpm && \
 pnpm install && \
 pnpm run build:prod

FROM node:16-alpine

COPY --from=builder /app /app

WORKDIR /app/ibax.iov2-main

ENV HOST 0.0.0.0

EXPOSE 8084

CMD [ "pnpm","run", "start" ]
