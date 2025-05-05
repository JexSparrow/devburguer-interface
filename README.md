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

<b>Na parte do back-end foi criado um CRUD, para o cadastro de usuario.</b>

Utilizei o node.js, express, Sequelize para conectar ao banco de dados MongoDB, facilitando a comunicação com os dados, tornando as consultas mais seguras e performáticas, tambem utilizei o bcrypt para encriptar as senhas o jwt para autenticação e acesso mais seguro as rotas.

No Front-end utilizei o react+vite para criar a aplicação, com o objetivo de praticar a integração de algumas bibliotecas muito usadas. 

Para estilização dos componentes, utilizei o styled-components, o que me permitiu criar uma interface moderna e responsiva diretamente no JavaScript. Também uso o Axios para fazer a comunicação com a API, enviando as informações de login de forma simples e segura. 

Para a navegação entre as páginas, implementei o React Router DOM, permitindo o redirecionamento automático após o login.

