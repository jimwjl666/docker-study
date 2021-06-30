# from 是构建镜像的基础源镜像
FROM nginx
#RUN 在容器中执行的命令
#WORKDIR 定位到容器的工作目录
#将本地文件复制到容器
COPY ./index.html /usr/share/nginx/html/index.html
#将容器某个端口导出提供给外部访问
EXPOSE 80
RUN echo '234'

FROM node:10.0
RUN mkdir -p /usr/src/nodejs/
WORKDIR /usr/src/nodejs
COPY package.json /usr/src/nodejs/package.json
COPY index.js /usr/src/nodejs/
RUN npm install -g nodemon
RUN cd /usr/src/nodejs/
EXPOSE 30010

CMD npm run dev 
