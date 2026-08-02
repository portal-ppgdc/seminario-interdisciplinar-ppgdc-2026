# Seminário Interdisciplinar 2026 do PPGDC

Microsite institucional estático do **Seminário Interdisciplinar 2026 do PPGDC**, preparado para publicação pelo GitHub Pages diretamente a partir da raiz do repositório.

O projeto usa somente HTML5, CSS3 e JavaScript puro. Não há dependências externas, etapa de build, CMS ou banco de dados.

## Estrutura de arquivos

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    └── images/
        ├── logo-ppgdc.png
        ├── djalma-thurler.jpg
        ├── eduardo-freitas-jorge.jpg
        ├── fatima-hanaque.jpg
        └── urania-maia.jpg
```

Os cinco arquivos oficiais ficam em `assets/images/` com os nomes indicados acima. Caso algum deles esteja ausente, o site mostra um identificador tipográfico neutro e informa que a imagem está pendente, sem substituir as pessoas por fotografias genéricas.

## Executar localmente

Na raiz do projeto, inicie um servidor HTTP. Com Python 3:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000/`. Não é necessário instalar pacotes nem compilar arquivos.

## Inserir ou substituir imagens

1. Salve cada arquivo em `assets/images/` usando exatamente os nomes indicados na estrutura acima.
2. Preserve o logo oficial sem recorte, deformação, redesenho ou alteração de cores. O CSS usa `object-fit: contain` para o logo.
3. Use retratos com resolução e proporções semelhantes sempre que possível. O layout aplica o mesmo tamanho, enquadramento e peso visual às quatro pessoas.
4. Recarregue a página e revise o enquadramento em celular e desktop.

Não altere os caminhos no HTML. Os caminhos das fotografias também estão registrados em `EVENT_DATA`, no início de `script.js`.

## Atualizar os dados do evento

O objeto `EVENT_DATA`, no início de `script.js`, centraliza:

- título, tema, situação, data, horário e local;
- URL de inscrição e URL do Google Maps;
- texto de apresentação e informações de certificado;
- participantes e respectivos retratos;
- programação completa;
- organização e equipe organizadora.

Edite os valores do objeto mantendo a estrutura das propriedades. Não remova `target="_blank"` nem `rel="noopener noreferrer"` dos links externos.

## Publicar no GitHub Pages

1. Confirme que todos os arquivos estão na raiz da branch que será publicada.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch desejada e a pasta **/(root)**.
5. Salve e aguarde a URL pública ser disponibilizada.

O arquivo `.nojekyll` evita processamento desnecessário pelo Jekyll. Nenhuma etapa de build é necessária.

## URLs oficiais usadas

- Inscrição: <https://forms.gle/QNzUyheT1ZPk66xF6>
- Localização: <https://maps.app.goo.gl/VHeKD7UGJdAHbzjx6>

## Checklist antes da publicação

- [ ] Inserir e revisar o logo oficial.
- [ ] Inserir os quatro retratos com os nomes de arquivo corretos.
- [ ] Confirmar data, horário, local e situação da programação.
- [ ] Revisar todos os itens da programação e nomes próprios.
- [ ] Testar os links de inscrição e do Google Maps em nova aba.
- [ ] Testar menu, âncoras e botão “Voltar ao topo” por mouse e teclado.
- [ ] Conferir foco visível e navegação por teclado.
- [ ] Verificar o console do navegador.
- [ ] Revisar as larguras de 375, 768, 1024 e 1440 px.
- [ ] Confirmar ausência de rolagem horizontal, cortes e sobreposições.
- [ ] Confirmar que Djalma, Eduardo, Fátima e Urânia têm o mesmo peso visual.
- [ ] Validar a versão publicada após a ativação do GitHub Pages.
