from pathlib import Path
p=Path(r'C:\Users\INTEL\OneDrive - fcmsantacasasp.edu.br\spacecasepersonalizados\word plass\docs\caderno.html')
t=p.read_text(encoding='utf-8')
idx=t.find('<section class="hero">')
print('hero_start', idx)
print('hero_end', t.find('</section>', idx))
print('has snippet', 'Cadernos que impressionam' in t)
