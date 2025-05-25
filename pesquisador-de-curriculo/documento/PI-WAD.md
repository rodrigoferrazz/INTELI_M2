# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Pesquisador de Curriculo

#### Rodrigo Ferraz

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução

A solução Pesquisador de Currículo nasceu para ser um auxiliador para o time de RH, um site simples com um sistema de busca, onde o usuário terá que digitar as informações que deseja encontrar em um currículo. Todos os currículos que a empresa recebe estarão armazenados em uma base de dados que, posteriormente, será acessada para buscar os currículos que condizem com o que o usuário escreveu na busca. Como resultado, o sistema retorna as informações mais importantes para que o time de RH entre em contato com os possíveis futuros colaboradores: nome e número. 

Dessa forma, o time de RH não precisará mais perder tempo acessando pastas com quantidades imensas de pdf's e conseguirá ter mais assertividade na contratação contatando pessoas que realmente estão interessadas com as vagas que estão abertas.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas

Basicamente, personas são representações dos usuários da solução proposta, criadas com base nas características, necessidades e motivações do público-alvo, com isso, a equipe que realiza o projeto consegue analisar e entender os comportamentos de quem irá usar.

Para o meu projeto, usei o modelo de persona estatística, ou seja, usei dados de pesquisa feitas por mim com o público-alvo da aplicação.


<div align="center">
  <img src="../public/assets/persona1.png" width="75%" alt="Persona"><br>
</div>

### 2.2. User Stories

User Stories são descrições curtas e claras de funcionalidades, escritas do ponto de vista do usuário final. Elas ajudam a entender as necessidades do usuário, facilitando a criação de soluções que atendem diretamente aos seus objetivos e desafios.


| ID   | User Story Persona 1                                                                                                        | Critério de Aceite 1                                                                 | Critério de Aceite 2                                                                 |
|------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| US01 | Como assistente de RH, preciso encontrar os currículos que se encaixam com as áreas que estão disponíveis na FA Maringá, para que as vagas sejam preenchidas com pessoas que tem semelhança e aptidão para cumprir as demandas. | O sistema possui um campo de digitação. | O campo de digitação possui um guia para o usuário saber o que digitar.                       |
| US02 | Como assistente de RH, preciso pesquisar todos os currículos que temos acesso na empresa, para não esquecer nenhum possível colaborador. | O banco de dados possui todos currículos que a empresa possui. | O sistema mostra a quantidade total de currículos que está lendo no momento da requisição. |
| US03 | Como assistente de RH, quero ter acesso as informações do nome e número de todos os currículos que estiverem dentro dos critérios da vaga, para que eu possa mandar mensagem para os possíveis colaboradores. | O sistema deve informar o nome e número dos currículos que estão dentro dos critérios escritos pelo usuário no front-end do site. | O front-end deve ser intuitivo e ter possibilidade de copiar as informações com apenas um clique. |


---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados

A modelagem do banco de dados do projeto se baseia em apenas uma tabela que possui as colunas: id, nome, area_de_interesse, idade, numero e arquivo, todas essas colunas serão requisitadas pelo sistema por meio do método READ (do CRUD).

```sql
CREATE TABLE curriculos (
    id INT PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL, 
    area_de_interesse VARCHAR(50) NOT NULL,  
    idade INT NOT NULL,  
    numero VARCHAR(20) NOT NULL,
    arquivo VARCHAR(255) NOT NULL
);
```
<div align="center">
  <img src="../public/assets/dbschema.png" width="25%" alt="Schema"><br>
</div>


### 3.1.1 BD e Models

O model `curriculoModel.js` é necessário para filtrar os currículos por meio da palavra-chave digitada pelo usuário na barra de pesquisa da tela `home.ejs`, por meio desse código:

````js
  SELECT id, nome, area_de_interesse, idade, numero, arquivo
  FROM curriculos
  WHERE area_de_interesse ILIKE $1
````

### 3.2. Arquitetura

<div align="center">
  <img src="../public/assets/diagrama.png" width="65%" alt="Diagram"><br>
</div>


### 3.3. Wireframes

Abaixo está um protótipo de baixa fidelidade (wireframe) do visual (front-end) do projeto, a partir deste protótipo é possível ter uma mínima noção daquilo que será o projeto final.

Legenda: a tela da esquerda se refere a tela inicial do site, onde o usuário terá que digitar aquilo que deseja buscar, para seguir à tela da direita é necessário licar no triângulo. Ao abrir a segunda tela, o usuário se depara com a lista de currículos que condizem com a busca feita, ao clicar nos triângulos da lateral as informações dos currículos são expostas (nome, telefone e nome do arquivo), para voltar a tela inicial, é necessário clicar no botão que está na abaixo do último currículo.

<div align="center">
  <img src="../public/assets/Wireframe.png" width="95%" alt="Wireframe"><br>
</div>

Link do figma: https://www.figma.com/design/zVCDQ15z9j5WyamLHekpmi/Projeto-Individual---Pesquisador-de-Curriculos?node-id=0-1&t=UdQrFp4fQ5gFKE3a-1

### 3.4. Guia de estilos

Para produzir o prototipo de alta fidelidade e desenvolver a solução final é necessário seguir o padrão estabelecido abaixo, tanto em relação as cores, tamanhos e espaçamentos

<div align="center">
  <img src="../public/assets/guide.png" width="95%" alt="Guide"><br>
</div>

<div align="center">
  <img src="../public/assets/grids.png" width="95%" alt="Grids"><br>
</div>



### 3.5. Protótipo de alta fidelidade

Abaixo estão as imagens e o link que se refere ao protótipo de alta fidelidade da solução.

Link para acessar o figma: https://www.figma.com/design/zVCDQ15z9j5WyamLHekpmi/Projeto-Individual---Pesquisador-de-Curriculos?node-id=63-12&t=NNVAFKirNzCrt2SY-1

<div align="center">
  <img src="../public/assets/prototipo.png" width="95%" alt="Prototipo"><br>
</div>

### 3.6. WebAPI e endpoints

- GET /curriculos
  - Descrição: Lista todos os currículos.
  - Resposta: JSON com todos os currículos registrados.

- GET /curriculos/search?query=Marketing
  - Descrição: Procura currículos pela palavra-chave de um cargo.
  - Exemplo: GET /curriculos/search?query=Financeiro

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
