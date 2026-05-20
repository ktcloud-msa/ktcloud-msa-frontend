# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:24.15.0-alpine AS build
WORKDIR /app

COPY market-msa-app/package.json market-msa-app/package-lock.json ./
RUN npm ci

COPY market-msa-app/ ./
RUN npm run build

# ---- Deploy stage ----
FROM nginx:alpine AS deploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
