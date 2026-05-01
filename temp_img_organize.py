from pathlib import Path

root = Path('docs') / 'img'
if not root.exists():
    raise SystemExit('img folder not found')

folders = {
    'logos': ['logo.png', 'logo 2.png', 'Copilot_20260422_130623.png'],
    'banners': ['BANNER TESTE 1.png', 'BANNER TESTE 2.png', 'BANNER TESTE 3.png'],
    'products': [
        'CADERNOS INICIAL.png', 'COPOS 473.png', 'COPOS ADWDW.png', 'copos.png', 'CUIA.png', 'GARRAFA.png',
        'PAG CADERNO.png', 'PAG GARRAFA 2.png', 'PAG GARRAFA.png', 'CANETAS.png',
        'CANETA azul claro APRESENTAÇÃO.png', 'CANETA lilás APRESENTAÇÃO.png', 'amarelo.png',
        'garrafas TRANSPARENTE.png', 'garrafas TRANSPARENTE-P19909.png'
    ],
    'kits': ['kit mochila.png', 'KIT PRETO 01.png', 'kit3.png', 'cadernogarrafas.png', 'sample-kit-01.svg', 'sample-kit-02.svg'],
    'gallery': [
        '1.jpg', '2.jpg', 'whats1.jpeg', 'whats2.jpeg', 'whats3.jpeg', 'whats4.jpeg', 'whats5.jpeg',
        'whats7.jpeg', 'whats8.jpeg', 'whats9.jpeg', 'whats10.jpeg', 'whats11.jpeg', 'whats12.jpeg',
        'whats13.jpeg', 'whats14.jpeg', 'whats16.jpeg', 'vermelho todos.jpg', 'whats15.mp4'
    ],
    'icons': ['whats.png'],
    'models': ['copo azul.glb', 'copo vermelho.glb'],
    'source': ['Untitled.blend1']
}

for folder, names in folders.items():
    target = root / folder
    target.mkdir(parents=True, exist_ok=True)
    for name in names:
        src = root / name
        if src.exists():
            dest = target / name
            if not dest.exists():
                src.rename(dest)
                print(f'Moved {src} -> {dest}')
            else:
                print(f'Skipping existing {dest}')
        else:
            print(f'Not found: {name}')

exts = ['.html', '.js', '.css']
for path in Path('docs').rglob('*'):
    if path.suffix.lower() in exts and path.is_file():
        text = path.read_text(encoding='utf-8')
        changed = False
        for folder, names in folders.items():
            for name in names:
                old = f'img/{name}'
                new = f'img/{folder}/{name}'
                if old in text:
                    text = text.replace(old, new)
                    changed = True
        if changed:
            path.write_text(text, encoding='utf-8')
            print(f'Updated refs in {path}')
