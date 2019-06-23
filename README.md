# docker测试demo

先安装docker

### 构建镜像

docker build -t docker_demo .

### 查看镜像

docker images

### 启动镜像

docker run -d -p 9000:3000 docker_demo

### 查看容器

docker ps

### 启动

http://localhost:9000/


### docker 更新线上代码
docker cp . 749905d0974d:/app/

然后重启

docker restart docker_demo