import redis

import config


class RedisTools:
    __redis_connect = redis.Redis(host=config.config.redis_host, port=6379)

    @classmethod
    def set_val(cls, hashed: str, val: str):
        cls.__redis_connect.set(hashed, val)

    @classmethod
    def get_val(cls, hashed):
        return cls.__redis_connect.get(hashed)
