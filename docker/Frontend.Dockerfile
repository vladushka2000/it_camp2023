FROM node:latest as build-stage
WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build
#CMD [ "npm", "start" ]
FROM nginx:1.19-alpine

# Копируем собранные файлы React приложения в Nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# Копируем файл конфигурации Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Экспонируем порт 80 для входящих соединений
#EXPOSE 8001

# Запускаем Nginx внутри контейнера при запуске контейнера
CMD ["nginx", "-g", "daemon off;"]