<h1 align="center"> Ecommerce </h1>
<h4 align="center"> Este projeto simula uma loja virtual onde temos a parte do cliente e tbm do admin </h4><br />

<h2 align="center"> Tecnologias usadas <span>FRONT-END</span> </h2>
<h4 align="center"> Angular 2+, HTML5, CSS3/SCSS, JWT, Bcrypt </h4><br />

<h2 align="center"> Como testar(necessario o back-end) </h2>
<h4 align="center">Primeiro rode npm install para instalar as dependencias</h4><br />
<p align="center">
<img src="https://img.shields.io/static/v1?label=angular&message=SERVE&color=red&style=for-the-badge&logo=ANGULAR"/>
</p>
<h4 align="center"> basta executar no terminal ng server e acessar o localost:4200 </h4><br />

<p align="center">
<img src="https://img.shields.io/static/v1?label=angular&message=BUILD&color=red&style=for-the-badge&logo=ANGULAR"/>
</p>
<h4 align="center"> basta executar no terminal ng build </h4><br />

<h2 align="center"><span>TUTORIAL</span> </h2>

<h4 align="center"> registre-se como admin </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/Y4cCn4GPhBusTlxLq0/giphy.gif"/>
</p><br />

<h4 align="center"> logo que se registrar vc sera redirecionado para a dashboard, aqui temos informações como vendas, estoque e contas, tudo zerado ainda </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/LnJ4WQn/Captura-de-tela-de-2020-08-12-05-45-23.png"/>
</p><br />

<h4 align="center"> acesse o menu lateral e clique em fornecedores, vamos adicionar um </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/ZE0cG7vuXSyIJpCwEd/giphy.gif"/>
</p><br />

<h4 align="center"> quando se adiciona um fornecedor uma conta é gerada automaticamente para ele, para ve acesse contas </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/JBs9Nzw/Captura-de-tela-de-2020-08-12-05-37-51.png"/>
</p><br />

<h4 align="center"> acesse o menu lateral e clique em marcas, vamos adicionar uma tbm </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/85cGHPh/Captura-de-tela-de-2020-08-12-05-38-13.png"/>
</p><br />

<h4 align="center"> agora que ja adicionamos um fornecedor e um marca podemos adicionar um produto, será necessario os ids tanto da marca quanto do fornecedor do produto, e caso vc queira que o produto seja mostrado na home pra o cliente sem precisar de filtro, adicione sim no input destaque no formulario de adicionar produto, insira varios produtos com e sem a opção de destaque como sim </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/sv739Yv/Captura-de-tela-de-2020-08-12-05-47-45.png"/>
</p><br />

<h4 align="center"> assim que adicionar os produtos volte na pagina home(dashboard), vc vera que o estoque ja esta atualizado assim como as contas, no caso das contas sempre que vc adiciona um produto com o id do fornecedor o valor do produto e adicionado na conta, em breve farei a opção de pagar  </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/jG4kW7H/Captura-de-tela-de-2020-08-12-05-39-21.png"/>
</p><br />


<h4 align="center"> agora acesse o home page do cliente em localhost:4200/home, vera que os produtos ja esta aqui, no caso os marcados com destaque </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/D4Vbnmp/Captura-de-tela-de-2020-08-12-05-38-41.png"/>
</p><br />


<h4 align="center"> para ve os produtos adicionado com nao no destaque escolha um filtro e aplique, todos os produtos da marca selecionada irão aparecer </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/JlqCZ3gSCsEO4wBVY0/giphy.gif"/>
</p><br />

<h4 align="center"> aqui agora a primeira coisa a se fazer é cadastrar um cliente, sera necessario um cliente logado para adicionar ao carrinho </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/J1ilYNsp80TVwoAQij/giphy.gif"/>
</p><br />

<h4 align="center"> assim que vc se logar vera que um link para o carrinho apareceu na barra de navegação </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/dG1h1yx/Captura-de-tela-de-2020-08-12-05-39-59.png"/>
</p><br />

<h4 align="center"> adicione um ou mais produtos no carrinho </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/mCDFKbn8fQJgYoHp64/giphy.gif"/>
</p><br />

<h4 align="center"> por enquanto temos apenas o metodo de pagamento do paypal </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/bz48mP9/Captura-de-tela-de-2020-08-12-05-40-20.png"/>
</p><br />

<h4 align="center"> clique no botão do paypal e insira seus dados(SANDBOX - conta para desenvolvedores), quando confirmar o pagamento vc sera redirecionado para uma pagina de confirmação bem simples, clique em home </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://media.giphy.com/media/YmaeuoQAY5g8nBUzd6/giphy.gif"/>
</p><br />

<h4 align="center">repare agora que o quantidade(informação ao lado do botão de adicionar ao carrinho) dos produtos diminui </h4><br />


<h4 align="center"> agora faça login com admin de novo e acesse o dashboard, aqui vc vera que a venda ja foi adicionada a tabela e o estoque atualizado </h4><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/6vz2c9X/Captura-de-tela-de-2020-08-12-05-34-46.png"/>
</p><br />

<h3 align="center"> DARK/LIGHT MODES </h3><br />
<p align="center"> 
<img width="400" height="300" src="https://i.ibb.co/cytRv8Q/Captura-de-tela-de-2020-08-12-05-58-16.png"/>
<img width="400" height="300" src="https://media.giphy.com/media/XCs357cKNd8R1nnTVt/giphy.gif"/>
</p><br />


