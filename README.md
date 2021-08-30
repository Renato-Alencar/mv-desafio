# Desafio MV

## Pontos importantes

- O link abaixo contém o protótipo para a aplicação. Com base nesse protótipo, sinta-se livre para estilizar a aplicação da forma que desejar.
- Link para o protótipo: https://www.figma.com/proto/Sx91UoPSVmCzmuw3a8x82n/MV-Starter?node-id=6%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=6%3A3
- Você receberá um arquivo .zip contendo a estrutura básica do projeto, contendo a configuração básica das bibliotecas vue-router (Usado para navegação na aplicação) e vuex (Usado para controlar o estado da aplicação).

## Pré-Requisitos para a realização do desafio

- Instalação do VueJs de forma global (Instruções de instalação estão disponíveis na documentação do VueJs)
- Caso você utlize o Visual Studio Code, instale as seguintes extensões para facilitar o processo de desenvolvimento
  - Vetur (Autor: Pine Wu, Versão: 0.34.1)
  - Stylus (Autor: AlanCezarAraujo, Versão: 0.0.4)
  - ESLint (Autor: Dirk Baeumer, Versão: 2.1.23)
  - TSLint (Autor: Microsoft, Versão: 1.3.3)

## Requisitos obrigatórios por componente

### Menu
- Você deverá utilizar o vue-router para realizar a navegação através dos itens do menu

### Catálogo de vinhos
- Você deverá realizar a requisição através da API fornecida e deverá armazenar o resultado da mesma na store da aplicação utilizando o Vuex (Segue descrição do uso no tópico abaixo)
- Todo o fluxo de requisição deverá estar dentro da store da aplicação:
  - As requisições deverão estar nas "Actions"
  - A resposta das requisições deverão ser armazenadas no "State" através do uso das "Mutations"
  - A leitura das informações deverá ser feita através dos "Getters"
- A api que deverá ser chamada é a seguinte: https://api.sampleapis.com/wines/reds
- Os cards deverão conter duas abas conforme mostrado no protótipo permitindo a navegação entre a descrição e as avaliações do produto
- A lista dos produtos deverá estar ordenada por ordem alfabética
- Você deverá criar um filtro para que o usuário possa pesquisar produtos

### Cadastro de produtos
- O cadastro do produto não será funcional, apenas queremos que você estilize o formulário e crie algumas funcionalidades básicas tais como:
  - Ao clicar no botão de cancelar, o formulário deverá ser resetado e o usuário redirecionado para o catálogo de produtos
  - Ao clicar no botão de salvar, execute o mesmo comportamento do botão de cancelar, porém exiba uma notificação em tela informado que o produto foi cadastrado com sucesso.
    - Sugerimos a utilização da seguinte biblioteca vue-notification (https://github.com/euvl/vue-notification), para o controle das notificações. Contudo, sinta-se livre para utlizar bibliotecas de sua preferência

## Principais pontos a serem avalidos
- Criatividade para criação e estilização de componentes
- Boas práticas na escrita do código
- Boa utilização das bibliotecas auxiliares do VueJs tais como Vuex e Vue router
- Facilidade de adaptação a novas tecnologias

## Links úteis

- Documentação VueJs - https://vuejs.org/v2/guide/
- Documentação Vue Router - https://router.vuejs.org/guide/
- Documentação Vuex - https://vuex.vuejs.org/guide/
