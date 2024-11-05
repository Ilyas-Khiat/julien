from utils import count_tokens, extract_relevant_keywords
from pydantic import BaseModel

class Audit(BaseModel):
    number_of_tokens: int
    number_of_words: int
    key_words: str
        
class GlobalAudit(BaseModel):
    audit: Audit
    content: str


def audit_text(text: str) -> GlobalAudit:

    key_words= extract_relevant_keywords(text)
    
    audit = Audit(
        number_of_tokens=count_tokens(text),
        number_of_words=len(text.split()),
        key_words=key_words
    )

    return GlobalAudit(audit=audit, content=text)