from pathlib import Path

path = Path("humanas-website/src/components/Contact.tsx")
text = path.read_text(encoding="utf-8")

replacements = {
    "Olǭ": "Olá",
    "informa����es": "informações",
    "VocǦ": "Você",
    "serǭ": "será",
    "dǧvidas": "dúvidas",
    "vocǦ": "você",
    "alcan��ar": "alcançar",
    "Refor��o": "Reforço",
    "tǸcnicos": "técnicos",
    "Dǧvidas": "Dúvidas",
    "Horǭrio": "Horário",
    "��s": "às",
    "Sǭbados": "Sábados"
}

for bad, good in replacements.items():
    text = text.replace(bad, good)

path.write_text(text, encoding="utf-8")
