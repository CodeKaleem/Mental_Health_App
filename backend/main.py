from fastapi import FastAPI
from routes import user
from routes import ai


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(ai.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

app.include_router(user.router, prefix="/users", tags=["Users"])