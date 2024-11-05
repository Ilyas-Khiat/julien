from audit import *


text = "Le texte à auditer"

audit_text : GlobalAudit = audit_text(text)

print(f"Nombre de tokens : {audit_text.audit.number_of_tokens}")
print(f"Nombre de mots : {audit_text.audit.number_of_words}")
print(f"Mots clés : {audit_text.audit.key_words}")
print(f"Contenu : {audit_text.content}")