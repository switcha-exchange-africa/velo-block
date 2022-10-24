# FROM node:alpine
# WORKDIR /app
# COPY package.json ./
# COPY yarn.lock ./
# COPY ./ ./
# RUN yarn install
# RUN npm run build
# EXPOSE 4000
# CMD ["npm", "run", "start"]

# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 14 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:14-alpine as builder

USER node
WORKDIR /home/node/staging-exchange-switcha
RUN chown -R node:node /home/node && chmod -R 770 /home/node

COPY package*.json ./
COPY yarn.lock ./
#COPY ./ ./

#RUN npm ci
COPY --chown=node:node . .

RUN yarn install

RUN npm run build \
   && npm prune --production

#RUN npm run build \
#    && npm prune --production

# ---

FROM node:14-alpine

USER node
WORKDIR /home/node/staging-exchange-switcha
# ADD  --chown=node:node /home/node/env_nhjnrz.txt ./.env
COPY --from=builder --chown=node:node /home/node/staging-exchange-switcha/package*.json ./
COPY --from=builder --chown=node:node /home/node/staging-exchange-switcha/yarn.lock ./
COPY --from=builder --chown=node:node /home/node/staging-exchange-switcha/node_modules ./node_modules/
COPY --from=builder --chown=node:node /home/node/staging-exchange-switcha/.next ./next/
COPY --from=builder --chown=node:node /home/node/staging-exchange-switcha/env-staging_auh5so.txt ./.env.local
EXPOSE 4000

CMD ["npm", "run", "start"]
