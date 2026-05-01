from pathlib import Path
base=Path(r'C:\Users\INTEL\OneDrive - fcmsantacasasp.edu.br\spacecasepersonalizados\word plass\docs')
entries={
'index.html':'''<section class="section">
        <h2 class="animate">Nossos segmentos</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Cadernos e planners</h3>
                <p>Layouts personalizados para escolas, marcas e eventos corporativos.</p>
            </div>

            <div class="card animate zoom">
                <h3>Brindes e kits</h3>
                <p>Canecas, copos e garrafas com identidade visual completa.</p>
            </div>

            <div class="card animate right">
                <h3>Projetos especiais</h3>
                <p>Produtos premium com design exclusivo e acabamento de alto impacto.</p>
            </div>
        </div>
    </section>''',
'caderno.html':'''<section class="section">
        <h2 class="animate">Cadernos que impressionam</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Capa personalizada</h3>
                <p>Impressão de alta qualidade com opções de acabamento profissional.</p>
            </div>

            <div class="card animate zoom">
                <h3>Conteúdo sob medida</h3>
                <p>Layouts internos adaptáveis para eventos, brindes ou merchandising.</p>
            </div>

            <div class="card animate right">
                <h3>Distribuição fácil</h3>
                <p>Pedidos eficientes para escolas, empresas e feiras promocionais.</p>
            </div>
        </div>
    </section>''',
'caneta.html':'''<section class="section">
        <h2 class="animate">Canetas com identidade</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Marca duradoura</h3>
                <p>Logos e frases que permanecem visíveis por mais tempo.</p>
            </div>

            <div class="card animate zoom">
                <h3>Opções de cores</h3>
                <p>Modelos variados com acabamento brilhante ou fosco.</p>
            </div>

            <div class="card animate right">
                <h3>Brindes corporativos</h3>
                <p>Perfeitas para eventos, clientes e campanhas promocionais.</p>
            </div>
        </div>
    </section>''',
'copos.html':'''<section class="section">
        <h2 class="animate">Copos personalizados</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Uso cotidiano</h3>
                <p>Perfeitos para bares, festas e promoções com alta visibilidade.</p>
            </div>

            <div class="card animate zoom">
                <h3>Acabamento resistente</h3>
                <p>Impressões que suportam água e lavagem leve.</p>
            </div>

            <div class="card animate right">
                <h3>Identidade visual</h3>
                <p>Criar peças que transmitam sua marca em cada evento.</p>
            </div>
        </div>
    </section>''',
'garrafas.html':'''<section class="section">
        <h2 class="animate">Garrafas ideais para brindes</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Design sofisticado</h3>
                <p>Linhas modernas com impressão nítida para marcas premium.</p>
            </div>

            <div class="card animate zoom">
                <h3>Uso corporativo</h3>
                <p>Perfeitas para academias, workshops e campanhas de marketing.</p>
            </div>

            <div class="card animate right">
                <h3>Personalização completa</h3>
                <p>Modelos com logo, frase ou arte na cor que você escolher.</p>
            </div>
        </div>
    </section>''',
'cuia.html':'''<section class="section">
        <h2 class="animate">Cuias com estilo</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Acabamento premium</h3>
                <p>Detalhes que valorizam sua marca e seu presente.</p>
            </div>

            <div class="card animate zoom">
                <h3>Ideal para eventos</h3>
                <p>Perfeito para festas, feiras e lembranças corporativas.</p>
            </div>

            <div class="card animate right">
                <h3>Gravação personalizada</h3>
                <p>Arte exclusiva ou logo com alto contraste e elegância.</p>
            </div>
        </div>
    </section>''',
'kits.html':'''<section class="section">
        <h2 class="animate">Kits completos</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Combinações prontas</h3>
                <p>Itens selecionados para eventos, brindes e campanhas.</p>
            </div>

            <div class="card animate zoom">
                <h3>Montagem personalizada</h3>
                <p>Escolha o mix de produtos que melhor representa sua marca.</p>
            </div>

            <div class="card animate right">
                <h3>Entrega prática</h3>
                <p>Envio rápido e embalagens prontas para distribuição.</p>
            </div>
        </div>
    </section>''',
'blog.html':'''<section class="section">
    <h2 class="animate">No blog</h2>

    <div class="blog">
        <div class="card animate left">
            <h3>Tendências de brindes</h3>
            <p>Veja o que está em alta para eventos e ações promocionais.</p>
        </div>

        <div class="card animate zoom">
            <h3>Como escolher</h3>
            <p>Dicas práticas para selecionar produtos com impacto visual.</p>
        </div>

        <div class="card animate right">
            <h3>Inspiração criativa</h3>
            <p>Ideias para personalizar campanhas com estilo espacial.</p>
        </div>
    </div>
</section>''',
'atacado.html':'''<section class="section">
        <h2 class="animate">Atacado com condições especiais</h2>

        <div class="blog">
            <div class="card animate left">
                <h3>Preços competitivos</h3>
                <p>Descontos por volume para compras maiores e revendas.</p>
            </div>

            <div class="card animate zoom">
                <h3>Produção escalável</h3>
                <p>Capacidade para atender grandes demandas com prazos claros.</p>
            </div>

            <div class="card animate right">
                <h3>Atendimento dedicado</h3>
                <p>Consultoria para montar pedidos alinhados ao seu negócio.</p>
            </div>
        </div>
    </section>'''
}
for name,snippet in entries.items():
    path=base/name
    text=path.read_text(encoding='utf-8')
    hero_start=text.find('<section class="hero"')
    if hero_start==-1:
        print(name, 'no hero')
        continue
    hero_end=text.find('</section>', hero_start)
    if hero_end==-1:
        print(name, 'no hero end')
        continue
    if snippet in text:
        print(name, 'already has snippet')
        continue
    new_text=text[:hero_end+len('</section>')] + '\n\n' + snippet + text[hero_end+len('</section>'):]
    path.write_text(new_text, encoding='utf-8')
    print('updated', name)
