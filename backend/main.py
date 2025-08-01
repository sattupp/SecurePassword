from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random
import string

app = FastAPI()

# CORS: Allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://securepassword-2.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PasswordRequest(BaseModel):
    minLength: int
    numbers: bool = True
    specialCharacters: bool = True

@app.post("/generate-password")
def generate_password(req: PasswordRequest):
    letters = string.ascii_letters
    digits = string.digits
    special_chars = string.punctuation

    characters = letters
    if req.numbers:
        characters += digits
    if req.specialCharacters:
        characters += special_chars

    if req.minLength < 1 or not characters:
        return {"error": "Invalid request parameters."}

    pwd = ""
    meet_criteria = False
    has_numbers = False
    has_special_characters = False

    while not meet_criteria or len(pwd) < req.minLength:
        new_char = random.choice(characters)
        pwd += new_char

        if new_char in digits:
            has_numbers = True
        elif new_char in special_chars:
            has_special_characters = True

        meet_criteria = True
        if req.numbers:
            meet_criteria = has_numbers
        if req.specialCharacters:
            meet_criteria = meet_criteria and has_special_characters

    return {"password": pwd}
