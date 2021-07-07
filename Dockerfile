FROM node:14.16.0 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html