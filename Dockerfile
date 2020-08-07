FROM keymetrics/pm2:12-jessie

RUN apt-get update && apt-get install -y ffmpeg vim cron

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN yarn install

CMD ["pm2-runtime", "ecosystem.config.js"]
