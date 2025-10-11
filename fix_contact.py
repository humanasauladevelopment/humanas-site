from pathlib import Path

path = Path("src/components/Contact.tsx")
text = path.read_text(encoding="utf-8")

replacements = {
    "OlÃ¡": "Olá",
    "informaÃ§Ãµes": "informações",
    "VocÃª": "Você",
    "serÃ¡": "será",
    "dÃºvidas": "dúvidas",
    "vocÃª": "você",
    "alcanÃ§ar": "alcançar",
    "ReforÃ§o": "Reforço",
    "tÃ©cnicos": "técnicos",
    "DÃºvidas": "Dúvidas",
    "HorÃ¡rio": "Horário",
    "Ã s": "às",
    "SÃ¡bados": "Sábados"
}

for bad, good in replacements.items():
    text = text.replace(bad, good)

path.write_text(text, encoding="utf-8")
