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
<img width="600" height="400" src="https://i.ibb.co/5Ly9Qf5/admin-register.gif"/>
</p><br />

<h4 align="center"> logo que se registrar vc sera redirecionado para a dashboard, aqui temos informações como vendas, estoque e contas, tudo zerado ainda </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> acesse o menu lateral e clique em fornecedores, vamos adicionar um </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/nDXFp0q/add-fornecedor.gif"/>
</p><br />

<h4 align="center"> quando se adiciona um fornecedor uma conta é gerada automaticamente para ele, para ve acesse contas </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> acesse o menu lateral e clique em marcas, vamos adicionar uma tbm </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> agora que ja adicionamos um fornecedor e um marca podemos adicionar um produto, será necessario os ids tanto da marca quanto do fornecedor do produto, e caso vc queira que o produto seja mostrado na home pra o cliente sem precisar de filtro, adicione sim no input destaque no formulario de adicionar produto, insira varios produtos com e sem a opção de destaque como sim </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> assim que adicionar os produtos volte na pagina home(dashboard), vc vera que o estoque ja esta atualizado assim como as contas, no caso das contas sempre que vc adiciona um produto com o id do fornecedor o valor do produto e adicionado na conta, em breve farei a opção de pagar  </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />


<h4 align="center"> agora acesse o home page do cliente em localhost:4200/home, vera que os produtos ja esta aqui, no caso os marcados com destaque </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />


<h4 align="center"> para ve os produtos adicionado com nao no destaque escolha um filtro e aplique, todos os produtos da marca selecionada irão aparecer </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/9NkN841/filtro.gif"/>
</p><br />

<h4 align="center"> aqui agora a primeira coisa a se fazer é cadastrar um cliente, sera necessario um cliente logado para adicionar ao carrinho </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/sFQJQfN/register-client.gif"/>
</p><br />

<h4 align="center"> assim que vc se logar vera que um link para o carrinho apareceu na barra de navegação </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> adicione um ou mais produtos no carrinho </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/0DMRRN7/add-cart.gif"/>
</p><br />

<h4 align="center"> por enquanto temos apenas o metodo de pagamento do paypal </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> clique no botão do paypal e insira seus dados(SANDBOX - conta para desenvolvedores) </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> quando confirmar o pagamento vc sera redirecionado para uma pagina de confirmação bem simples, clique em home </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/M1gpYrv/pagamento.gif"/>
</p><br />

<h4 align="center">repare agora que o quantidade(informação ao lado do botão de adicionar ao carrinho) dos produtos diminui </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />

<h4 align="center"> agora faça login com admin de novo e acesse o dashboard, aqui vc vera que a venda ja foi adicionada a tabela e o estoque atualizado </h4><br />
<p align="center"> 
<img width="600" height="400" src="https://i.ibb.co/Vxn5yG3/asdas.png"/>
</p><br />
