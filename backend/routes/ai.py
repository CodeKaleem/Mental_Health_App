from fastapi import APIRouter
from pydantic import BaseModel
from ai_engine import get_ai_response

router = APIRouter()

class MessageInput(BaseModel):
    text: str

@router.post("/ai/analyze")
def analyze_message(data: MessageInput):
    return get_ai_response(data.text)
