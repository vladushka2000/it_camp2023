from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from routers.intersection import router as intersection_calc_router

app = FastAPI(prefix="api")
app.include_router(intersection_calc_router)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "node service"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8004, log_level="info")
