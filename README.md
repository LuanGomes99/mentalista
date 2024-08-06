## Mentalista - Game de Adivinhação

### Descrição

O Mentalista é um jogo de adivinhação no qual o jogador deve tentar descobrir um número secreto gerado aleatoriamente pelo sistema. O jogador tem um número limitado de tentativas para acertar o número. A cada tentativa, o sistema informa se o número digitado é maior ou menor que o número secreto.

### Funcionalidades

- **Gerar Número Secreto**: O jogo gera um número aleatório entre 1 e 100 no início de cada rodada.
- **Verificar Tentativa**: O jogador pode digitar um número e verificar se é o número secreto. O sistema fornece feedback se o número é maior ou menor.
- **Contagem de Tentativas**: O jogador tem um máximo de 7 tentativas para adivinhar o número secreto.
- **Reiniciar Jogo**: O jogador pode reiniciar o jogo a qualquer momento, restaurando o número de tentativas e gerando um novo número secreto.
- **Mensagens de Feedback**: Mensagens visuais informam o jogador sobre o progresso do jogo e o resultado das tentativas.
- **Interface Responsiva**: A interface do jogo é responsiva e adaptável a diferentes tamanhos de tela.

### Detalhes dos Arquivos

#### `index.html`

Este arquivo contém a estrutura HTML do jogo. Ele inclui:

- Um campo de entrada para o jogador digitar um número.
- Botões para verificar a tentativa e reiniciar o jogo.
- Elementos para exibir as mensagens de feedback e o número de tentativas restantes.

#### `script.js`

Este arquivo contém a lógica principal do jogo, incluindo:

- Geração do número secreto.
- Manipulação das tentativas restantes.
- Verificação da tentativa do jogador.
- Atualização da interface com mensagens de feedback.
- Funções auxiliares para limpar entradas, atualizar mensagens e remover classes de resultado.

#### `style.css`

Este arquivo contém o estilo visual do jogo, incluindo:

- Estilos para o corpo e o fundo da página.
- Estilos para os elementos principais do jogo, como o campo de entrada, botões e mensagens.
- Estilos responsivos para adaptar a interface a diferentes tamanhos de tela.

### Como Jogar

1. Digite um número entre 1 e 100 no campo de entrada.
2. Clique no botão "ENVIAR" para verificar sua tentativa.
3. Receba feedback sobre se o número secreto é maior ou menor que o número digitado.
4. Continue tentando até adivinhar o número secreto ou até que suas tentativas se esgotem.
5. Clique no botão "Reiniciar" para começar um novo jogo a qualquer momento.

### Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Aproveite o jogo!

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções de bugs ou novas funcionalidades.

### Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
