from fastapi import FastAPI

app = FastAPI(title="DevOps Assignment Backend")

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/message")
def get_message():
    return {"message": "Hello from backend"}
