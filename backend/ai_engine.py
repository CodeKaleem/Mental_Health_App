import os
import openai
from dotenv import load_dotenv
from nltk.sentiment.vader import SentimentIntensityAnalyzer

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")
analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(text: str):
    score = analyzer.polarity_scores(text)["compound"]
    if score >= 0.5:
        return "positive"
    elif score <= -0.5:
        return "negative"
    else:
        return "neutral"

def get_ai_response(text: str):
    sentiment = analyze_sentiment(text)

    prompt = f"""
    You are a mental health support AI.
    The user feels: {sentiment}.
    They said: "{text}"
    
    Respond with empathy, advice, and encourage self-care:
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150,
        temperature=0.8
    )

    return {
        "sentiment": sentiment,
        "response": response.choices[0].message.content.strip()
    }
