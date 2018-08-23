FROM node:9

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /usr/src/app/
ADD . /usr/src/app
RUN cd /usr/src/app/

# install yarn and set ENV var
RUN yarn install

# Bundle app source
ENV NODE_ENV=production
# Note our config is at build time, so we are building with env params, suboptimal
CMD [ "yarn", "start" ]
