# AI Study Buddy

An AI-powered learning assistant that generates simple explanations, key concepts, real-world examples, and quizzes tailored to the selected difficulty level.

## Features

- AI-powered explanations
- Difficulty-aware learning
- AI-generated quizzes
- Responsive UI

## Architecture

React + Vite
FastAPI
Google Gemini
Netlify
Render

## Local Development

Frontend:

```sh
cd frontend
npm install
npm run dev
```

Backend:

```sh
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Environment Variables

- `backend/.env` contains Gemini credentials (`GEMINI_API_KEY`, `GEMINI_MODEL`).
- `frontend` uses `VITE_API_URL` to point to the backend URL.

## API

GET `/` - Health check
POST `/generate` - Generate a study guide

## Deployment

Frontend → Netlify
Backend → Render
