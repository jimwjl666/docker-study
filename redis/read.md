```
docker run --name myredis -p 6379:6379 -v /Users/wjl/Documents/wjl_demo/dockertest/redis/data:/data -v /Users/wjl/Documents/wjl_demo/dockertest/redis/conf/redis.conf:/etc/redis/redis.conf -d redis redis-server /etc/redis/redis.conf

```