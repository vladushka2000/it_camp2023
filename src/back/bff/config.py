import os

from pydantic_settings import BaseSettings


class Config(BaseSettings):
    ipr_name: str = os.environ.get("ipr_name", "ipr_service")
    ipr_host: str = os.environ.get("ipr_host", "http://localhost:8003")
    vlp_name: str = os.environ.get("vlp_name", "vlp_service")
    vlp_host: str = os.environ.get("vlp_host", "http://localhost:8002")
    node_name: str = os.environ.get("node_name", "node_service")
    node_host: str = os.environ.get("node_host", "http://localhost:8004")
    redis_host: str = os.environ.get("redis_host", "redis")


config = Config()
