from typing import Dict, Any
import hashlib
import json


def hash_by_service_name(data: Dict[str, Any], service_name: str) -> str:
    dhash = hashlib.md5()
    encoded = json.dumps(data, sort_keys=True).encode()
    dhash.update(encoded)

    return f"{dhash.hexdigest()}{service_name}"
