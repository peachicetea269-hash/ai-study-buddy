import os
from typing import Literal
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from google import genai
from google.genai.errors import APIError

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="AI Study Buddy API",
    description="API for generating AI-powered study guides.",
    version="1.0.0"
)

# Configure CORS
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
origins = [
    FRONTEND_URL,
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(set(origins)), # Remove duplicates if any
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudyRequest(BaseModel):
    topic: str = Field(..., min_length=2, max_length=200, json_schema_extra={"strip_whitespace": True})
    difficulty: Literal["Beginner", "Intermediate", "Advanced"]

class StudyResponse(BaseModel):
    topic: str
    difficulty: str
    result: str

@app.get("/")
def health_check():
    """Health check endpoint."""
    return {"message": "AI Study Buddy API is running"}

@app.post("/generate", response_model=StudyResponse)
def generate_study_guide(request: StudyRequest):
    """Generate a study guide using Gemini."""
    api_key = os.getenv("GEMINI_API_KEY")
    
    if not api_key or api_key == "your_gemini_api_key_here":
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI service is not configured."
        )

    try:
        client = genai.Client(api_key=api_key)
        model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

        # Clean the topic
        clean_topic = request.topic.strip()

        system_prompt = (
            "You are a student-friendly study assistant. "
            "For the supplied topic and difficulty, generate: \n"
            "1. Simple explanation\n"
            "2. Key concepts\n"
            "3. Real-world example\n"
            "4. One multiple-choice question\n"
            "5. Four options\n"
            "6. Correct answer\n"
            "7. Short explanation of why the answer is correct\n\n"
            "Keep the answer concise enough for a student to read quickly. "
            "Do NOT return HTML. Do NOT return Markdown that requires special frontend rendering. "
            "Preserve useful headings and line breaks in the plain text.\n\n"
        )

        if request.difficulty == "Beginner":
            system_prompt += "Difficulty level: Beginner. Use simple language, minimal jargon, and intuitive examples."
        elif request.difficulty == "Intermediate":
            system_prompt += "Difficulty level: Intermediate. Use moderate technical detail."
        elif request.difficulty == "Advanced":
            system_prompt += "Difficulty level: Advanced. Provide a deeper technical explanation and use appropriate terminology."

        response = client.models.generate_content(
            model=model,
            contents=f"Topic: {clean_topic}",
            config=genai.types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.7,
                max_output_tokens=800,
            )
        )
        
        result_text = response.text
        
        return StudyResponse(
            topic=clean_topic,
            difficulty=request.difficulty,
            result=result_text.strip()
        )
        
    except APIError:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI service is temporarily unavailable. Please try again."
        )
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred while generating the study guide."
        )
