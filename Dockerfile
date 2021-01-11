FROM node:14.15.2-alpine

# host /var/lib/docker/volumes/{volume_name} 에 볼륨 생성
VOLUME /sbor_dev_volume

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /app/node_modules/.bin:$PATH

# app dependencies, install 및 caching
ADD package.json /app/package.json

# 앱 실행
ENTRYPOINT ["npm", "start"]