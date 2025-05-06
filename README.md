<h1>🍔🍟 Um Restaurante Totalmente Funcional e Escalável! 🚀</h1>

<b>A interface desse projeto é aplicação web moderna e interativa construída com React.js, utilizando:</b>

♻️ Componentes reutilizáveis para construir a interface de forma modular.
Hooks e Context API para gerenciar o estado e compartilhar dados.

🌐 Roteamento para permitir a navegação entre diferentes seções.

🎨 Styled-Components para definir os estilos da aplicação.

⚙️ Vite foi utilizado como ferramenta de desenvolvimento e build.

Essa estrutura permite que nossa aplicação seja bem organizada, seguindo boas práticas de desenvolvimento, o que facilitará a criação de uma experiência de usuário fluida e agradável!


<h2>No Back-End, foi utilzado Node.js com arquitetura MVC, o que isso significa?</h2>

💜 Coração da Operação (Models): Seus produtos, categorias, usuários e pedidos ganham vida aqui! Definições precisas de como os dados são armazenados e organizados, garantindo a integridade do seu cardápio digital. 

📝 Ordem (Controllers): Eles orquestram todo o fluxo! Recebem os pedidos online, consultam o cardápio (Models), preparam as informações e enviam tudo de volta para o cliente. Agilidade e controle total em cada etapa! 

🖥️ Vitrine Digital (Respostas da API): Embora não haja uma "tela" tradicional, as respostas JSON ricas e bem estruturadas são a vitrine que seus clientes veem no aplicativo ou site. Informações claras sobre cada item do menu! 

🛣️ Conexão (Rotas): Caminhos bem definidos para cada funcionalidade! Quer listar os burgers? /burgers. Criar um pedido? /orders. Tudo organizado para uma comunicação eficiente entre o cliente e o servidor. 

🛡️ Guardiões da Segurança (Middlewares): Protegendo cada etapa! Autenticação robusta para garantir a privacidade dos usuários e a segurança das transações. 

🔒 Cofre de Dados (Banco de Dados + Sequelize): Seus dados mais preciosos armazenados com segurança e fácil acesso através do Sequelize, garantindo a troca de informação com o banco de dados. 

<b>Estrutura MVC: Cada parte no seu devido lugar! A separação clara entre Models, View e Controllers torna o código fácil de entender, manter e expandir.</b>

<h2>Em resumo, este backend MVC é a base sólida e organizada que sua hamburgueria online precisa para:</h2>

📌 Gerenciar seu cardápio e estoque com eficiência.

📌 Processar pedidos de forma rápida e segura.

📌 Autenticar e gerenciar seus clientes.

📌 Escalar e evoluir sua plataforma digital com facilidade.

<h2>Em resumo:</h2>

<b>Na parte do back-end foi criado um CRUD, para o cadastro de usuario.

Utilizei o <i>Node.js, Express, Sequelize </i> para conectar ao banco de dados <i>MongoDB</i>, facilitando a comunicação com os dados, tornando as consultas mais seguras e performáticas, tambem utilizei o <i>bcrypt</i> para encriptar as senhas o <i>jwt</i> para autenticação e acesso mais seguro as rotas.

Foi criado dois Conteiners <i>DOCKER</i>. Um banco de dados <i>MongoDB</i> para os pedidos e outro <i>Postgres</i> para guardar informações dos produtos e usuários.

No Front-end utilizei o <i>React+Vite<</i> para criar a aplicação, com o objetivo de praticar a integração de algumas bibliotecas muito utilizadas. 

Para estilização dos componentes, utilizei o <i>Styled-Components</i>, o que me permitiu criar uma interface moderna e responsiva diretamente no <i>JavaScript</i>. Também foi utilizado o <i>Axios</i> para fazer a comunicação com a API, enviando as informações de login de forma simples e segura. 

Para a navegação entre as páginas, implementei o <i>React Router DOM</i>, permitindo o redirecionamento automático após o Login.</b>

<h2>Tela de Cadastro de Usuários</h2>

![Captura de tela 2025-05-05 202840](https://github.com/user-attachments/assets/e7138105-dc14-455f-a11b-f3a9bb392e72)

<h2>Tela de Login</h2>

![Captura de tela 2025-05-05 202915](https://github.com/user-attachments/assets/3cb32506-68d8-4b22-aba3-a8f823a9b94a)

<h2>Menu Principal</h2>

📌 Header com links do Cardápio, Carrinho e Logout.

📌 Carrosel de Categorias e Ofertas do Dia!

![Captura de tela 2025-05-05 203011](https://github.com/user-attachments/assets/7e197cb6-77e4-4284-ad38-abf71e6c9511)
![Captura de tela 2025-05-05 203033](https://github.com/user-attachments/assets/d952deb8-de93-4ccb-8368-7cbe46db9dfe)

<h2>Cardápio</h2>

📌 Lista de Categorias de Produtos: Todos, Entradas, Hambúrgueres, Bebidas e Sobremesas.

📌 Ao clicar no botão de compra é gerado um alerta Toast! Deixando a experiência do usuário mais satisfatória e intuitiva.

![Captura de tela 2025-05-05 203150](https://github.com/user-attachments/assets/7a56b3fb-c085-4dab-83d6-8e7456a43eb8)
![Captura de tela 2025-05-05 203215](https://github.com/user-attachments/assets/1e1caf73-7b87-4c44-93b6-038f0dd1c324)
![Captura de tela 2025-05-05 203401](https://github.com/user-attachments/assets/eac716fa-22ac-4a1a-b414-0460d356046a)

<h2>Carrinho</h2>

📌 Podemos ver um resumo de todos os items do pedido. Inclusive aumentar/reduzir a quantidade, excluir os items, ver o total do pedido.

📌 Aumentar/Reduzir a quantidade, excluir os items e ver o total do pedido.

📌 Ao finalizar a compra o pedido é enviado para o Banco de Dados MongoDB, com todas as informações necessárias.


![Captura de tela 2025-05-05 203515](https://github.com/user-attachments/assets/05dac09e-94f5-406d-bbc1-22f1f268cd5a)

![Captura de tela 2025-05-05 203546](https://github.com/user-attachments/assets/cad2ede9-5d81-4485-a1ab-19f8676f9775)

![Captura de tela 2025-05-05 204209](https://github.com/user-attachments/assets/c5f3bc56-5eaa-453d-b548-4b59ae5749f1)

<h2>Painel Admin</h2>

⚙️ Somente usuários Admin tem acesso a essa página! Ao realizar login, é redirecionado automaticamente.

📌 Podemos ver o histórico de todos os pedidos, inclusive mudar o status de cada um.

📌 Editar os Produtos.

📌 Adicionar Novos Items ao Cardápio.

![Captura de tela 2025-05-05 203952](https://github.com/user-attachments/assets/a4629a32-707f-4d49-affd-135e7dc3dd58)
![Captura de tela 2025-05-05 204022](https://github.com/user-attachments/assets/87b000dd-d06b-463a-b9a1-1aca6bd607f6)
![Captura de tela 2025-05-05 204042](https://github.com/user-attachments/assets/f3647265-75d8-48f9-aff3-3a55f58e6321)
![Captura de tela 2025-05-05 204057](https://github.com/user-attachments/assets/1cec2d23-d944-475c-8dd9-e7252b7850a0)







