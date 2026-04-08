FROM node:20 AS base

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

FROM node:20 AS release

WORKDIR /usr/src/app

COPY --from=base /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 5000