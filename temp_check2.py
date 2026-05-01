from pathlib import Path
path=Path(r'C:\Users\INTEL\OneDrive - fcmsantacasasp.edu.br\spacecasepersonalizados\word plass\docs\caderno.html')
text=path.read_text(encoding='utf-8')
marker='    </section>\n\n    <section class="cta">'
print('marker_in_text', marker in text)
print(repr(text[text.find(marker)-50:text.find(marker)+50]))
