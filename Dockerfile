FROM node:14.15.2

# host /var/lib/docker/volumes/{volume_name} 에 볼륨 생성
VOLUME /raor_dev_volume

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true

# app dependencies, install 및 caching
ADD ./package.json /package.json

# 앱 실행
CMD ["npm", "start"]