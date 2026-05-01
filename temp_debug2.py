from pathlib import Path
p=Path(r'C:\Users\INTEL\OneDrive - fcmsantacasasp.edu.br\spacecasepersonalizados\word plass\docs\caderno.html')
t=p.read_text(encoding='utf-8')
idx=t.find('<section class="hero">')
idx2=t.find('</section>', idx)
print('after hero', repr(t[idx2:idx2+220]))
print('hero sentinel', t[idx2-40:idx2+10])
