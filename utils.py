import tiktoken
from openai import OpenAI

def extract_relevant_keywords(text: str) -> str:
    client = OpenAI()
    prompt = f'''Voici le document:
        - {text}
        Veuillez extraire les cinq mots clés les plus pertinents de cette liste. Chaque mot clé doit contenir au maximum deux mots.

        TA REPONSE DOIT RESPECTER LE FORMAT SUIVANT :
        key_word1, key_word2, key_word3, key_word4, key_word5
    '''

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

def count_tokens(input_string: str) -> int:
    tokenizer = tiktoken.get_encoding("cl100k_base")
    tokens = tokenizer.encode(input_string)
    return len(tokens)