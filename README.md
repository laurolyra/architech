# Projeto Architech

Este projeto consiste num MVP de uma aplicação fullstack, construida com `nodeJS` junto com seu framework `express`. No front, foi utilizada a biblioteca `React` juntamente com `Styled components` para estiilização. O banco de dados foi o `postgreSQL` e tanto o front quando o back-end se valeram do superset `Typescript`

## Instalação
Primeiramente, é importante que a máquina possua o `postgres` instalado.

Feito isso, deve-se seguir os passos a seguir:

1- clonar este repositório;

2- entrar nas pastas `api` e `client` e, dentro de cada uma, executar o comando `npm install`

3- na pasta `api`, deve-se rodar as migrações e/ou seeders através dos comandos `sequelize db:migrate` e `sequelize db:seed`, respectivamente

4- finalmente, para iniciar a aplicação, devem ser abertos dois terminais: o primeiro navegará até a pasta api e executará `npm run dev`. No front, a navegação é até a pasta `client` e o comando é `npm run start`

## O que foi desenvolvido
Trata-se de uma aplicação MVP onde clientes podem se cadastrar e enviar propostas de projetos para arquitetos. Estes, por sua vez, podem aceitar ou recusar a proposta. Os clientes têm acesso a todas as propostas feitas, acompanhando seu status o tempo inteiro - podendo visualizar inclusive as que foram deletadas pelo próprio usuário. A solicitações são guardadas no banco com uma chave _status_, sendo -1 a apagada, 0 a criada, 1 a aceitada e as demais caem no caso de recusada.

## Como foi desenvolvido
Além das tecnologias a serem mencionadas abaixo, é importante destacar que desenvolvi a aplicação tendo como norte os princípios de _git flow_ e de _conventional commits_, de forma que tenho feito os desenvolvimentos em _branches_ que visam alterar a branch _develop_ - tanto isso é verdade que configurei regras específicas para impedir o envio de informações (_push_) direto para a branch _main_.
Além disso, cada branch e cada commit tentam dar um resumo do que aconteceu em cada mudança - quer a criação de uma nova _feature_ ou o conserto de outras funções, bem como o envio desta documentação.
### back-end
A aplicação possui um backend com endpoints visando atender às três grandes entidades planejadas para essa aplicação: 
- `clients`, a qual comporta os clientes, com dados pessoais atrelados e senha criptografada com aucílio da biblioteca `bcrypt`;
- `architects` que, mesmo recebendo os exatos valores da entidade `clients` entendeu-se por bem mantê-los em separado, para que um cliente possa acessar a aplicação como arquiteto e vice versa, a fim de usufruir de todas as funcionalidades;
- `tickets`, por sua vez, trata-se de uma entidade a qual unde ambos os bancos, pois ela possui a proposta, o usuário que fez a dita proposta e o profissional que a recebeu - ou seja, recebe as chaves de ambos os lados do banco.

Nos endpoints, foram criados arquivos específicos parfa as rotas de cada entidade, indo do `get`, ao `put`, o `post` e um `delete` diferente, pois como fora pensada na funcionalidade de que o cliente poderia acessar solicitações apagadas. Assim, não há verdadeiramente um `delete` de tickets, mas tão somente um `put` cujo front-end trata de deixar seus campos totalmente desabilitados.

Para garantir a segurança, fora criado, também, um `middleware` de autenticação, o qual é utilizado na maioria maciça das rotas. Basicamente, No momento do login o usuário recebe um cookie chamado `auth_token`, cujo código é decodificado por meio da biblioteca `jsonwebtoken`. Este token acompanha o usuário até o momento dele realizar o _logout_ - momento em que o referido token é destruído.

Além dos controllers e métodos exclusivos de cada entidade, há o controller _auth_, que nos permite criar novos usuários, logar e deslogar do sistema.

### front-end
A apicação conta com o uso do `React` com o superset `typescript`. Nela, temos uma tela principal e outras duas mais, sendo uma de cadastro de usuário e outra que é o _dashboard_ e, no caso do cliente, formulário para envio de propstas e visualização das propostas já enviadas.

Valendo-se do conceito de `JS in CSS`, tomei a liberdade de criar um tema com algumas regrras padrão de CSS, além de componentes estilizados que eram utilizados em muitos locais - tudo visando evitar um código repetitivo, verboso e com responsabilidades acumuladas.

Com auxílio da biblioteca `react-router-dom`, criei as três rotas e, ainda,  criei um componente de rota privada, onde as pessoas não autenticadas que porventura tentem acessar a nossa aplicação são imediatamente redirecionadas para a página de login;

É interessante notar que, em que pesem as informações distintas de cada tipo de usuáriod a aplicação, o componente `Dashboard` é o mesmo utilizado pelos dois, renderizando componentes distintos a depender da chave `role` do estado `currentUser`. Esse estado fica salvo no contexto da aplicação e é reutilizado em vários lugares - utilizando, portanto, o gerenciador de estados `ContextAPI` da forma que deve ser utilizado.

## Pontos de melhoria
Como afirmado mais acima, esta aplicação não está adequada ainda para uso do grande público - trata-se de um MVP onde é sabido, sim, que há pontos de melhoria para serem atacados com maior prioridade, porém, com o prazo estipulado não foi possível implementar. Até o presente momento, consigo visualizar as seguintes demandas:

### back-end
- Apresentar todo o ambiente de desenvolvimento em um container docker;
- Criar um refresh token, a fim de limitar o acesso do usuário à aplicação ao longo do tempo;
- Aumentar a cobertura de testes unitários e criar os de integração, utilizando jest e cypress, nessa ordem;
- Utilizar o sequelize em toda a sua essência e, não só para a criação das migrações e popular o banco.
### front-end
- Fazer uma validação rígida nos campos de cadastro e login - aplicando um esquema de validação por bibliotecas específicas como a `yup`;
- Criar testes unitários e de integrçaão, a exemplo do back-end;
- Melhorar a aparência de componentes comuns à aplicação, como o botão e os campos de `input`;
- Fazer um tratamernto de erros mais detalhado, trazendo diferentes mensagens a depender do erro encontrado.


Por fim, agradeço pela oportunidade de desenvolver essa aplicação para que eu pudesse exibir um pouco das minhas habilidades e me permitiu aprender um pouco mais a cada dia.

Agradeço, também, pela atenção e informo que permaneço à disposição para tirar qualquer dúvida de setup ou para conversar sobre o que foi feito e o que ainda poderá ser implementado.
