> [!NOTE]
> O projeto como um todo é grande, então os assuntos abordados estão imcompletos/rasos.

# Planejamento do projeto:
## Indicies:
* [Objetivo](#objetivo)
* [Páginas/Caminhos](#paginas-caminhos)
    * [Caminhos obrigatórios](#caminhos-obrigatorios)
    * [Caminhos opcionais](#caminhos-opcionais)
    * [Especificações das Páginas/Caminhos](#especificacoes-das-paginas-caminhos)
<!-- * [Back-End](#back-end) -->

## Objetivo
* Desenvolver um sistema Back-End PDV (Ponto de Venda). O PDV  pode ser entendido como o local da execução de uma venda (como a finalização de uma compra em um caixa de um supermercado), com o objetivo de apurar dados das vendas, implementar estátiscas de produtos, lucros etc.

* O Back-End será feito com NodeJs com os módulos nativos para aprender a fundamento da ferramenta. Devido a isto, bíbliotecas externa como, Express, não serão utilizadas, porém excessões podem ser aplicadas para ferramentas de auxílio, como linters, JSDoc etc.

## Tecnologías
* Para a criação de interface do usuário ([`Front-End`](#front-end)):
    * `HTML`
    * `CSS`
    * `JavaScript`

* Api Rest ([`Back-End`](#back-end)):
    * `Node.js`

<!-- O link para esse subtítulo com a sinstaxe do markdown (##), não estava funcionando devido ao carctere "/". Por isso está sendo usado a tag HTML `h2` -->
<h2 id="paginas-caminhos">
    Páginas/Caminhos
</h2>

As páginas ou Caminhos São dividos em duas tipos:

* [Caminhos obrigatórios](#caminhos-obrigatorios)
* [Caminhos opcionais](#caminhos-opcionais)

<h3 id="caminhos-obrigatorios">Caminhos obrigatórios:</h3>

<!-- As tags HTMLs foram utilizadas devido a necessidade de usar o atributo `id` para servir de âncora para link -->
<ul>
<li id="pg-home">

**/home:** terá uma tela de boa vindas com botão de login;

</li>

<li>

**/estoque:** Consulta de produtos.

</li>

<li>

**/pdv:** Tela do PDV;

</li>
</ul>

### Caminhos opcionais:
* **/login:** Tela de login para identificações do funcionário;
* **/registar:** Registrar login;
* **/perfil:** Perfil do funcionário com nível abaixo do aministrador (Futuramente será especificado os níveis de privilégios de administração);
* **/admin-registrar:** Tela de registrar novos administradores;
* **/admin-login:** Tela de login do administrador;
* **/admin-perfil:** Perfil do administrador;
* **/admin:** Tela de administrador;

<h3 id="especificacoes-das-paginas-caminhos">
    Especificações das Páginas/Caminhos
</h3>


<dl>
<dt>

**/home**

</dt>
<dd>

Leia sobre na seção sobre na seção de [páginas home](#pg-home)

</dd>
<dt>

**/login**

</dt>
<dd>

Possuíra campos de e-mail e senha do funcionário
e um link para registrar funcionários.

**É preciso de confirmação 2FA obrigatória via E-mail questão de segurança.**

</dd>

<dt>

**/registar**

</dt>
<dd>

Possuíra os seguinte campos:

* Nome
* Data de nascimento
* Sexo
* Senha
* Conferir Senha
* Email

> [!important]
> Preciso de uma confirmação 2FA obrigatória via E-mail por questão de segurança.
</dd>

<dt>

**/perfil**

</dt>
<dd>

Exibe as seguintes informações funcionário:

* Nome
* Data de nascimento
* Sexo
* nome   
* nascimento
* sexo   
* cpf    
* email   
* telefone 
* cargo   

Terá um botão/link de mudar os dados pessoais, contém os mesmo campos do [endpoint de registro](#registar)

</dd>

<dt>

**/pdv**

</dt>
<dd>

O própro pdv, onde fica a tela de venda e pesquisa dos produtos, havendo duas seções:
<dl> <!-- Início Especificação dos elementos do pdv -->
<dt>

**Pesquisa de estoque:**

<dt>
<dd>

Traz informções de um determinado produto.
Possui uma entrada texto para pesquisa por nome, tags, ou SKU.

</dd>

<dt>

**Entrada dos produtos a serem vendidos:**

</dt>
<dd>

Nome ou SKU 
Além disso, a um botão para visualizar o estoque.

</dd>
</dl> <!-- Fim Especificação dos elementos do pdv -->

<dt>

**/admin-registrar**
    
</dt>
<dd>

Página para criar administradores. Possui as os mesmos campos do [login de funcionários](#registrar) comum, porém necessita de privilégios de administrador para criar.

</dd>

<dt>

**/admin-login**

</dt>
<dd>

Funciona da mesma forma do <a href="#login">login de um funcionário</a>

</dd>

<dt>

**/admin-perfil**

</dt>
<dd>

Reapreveita os tipos de informações exibidas no [perfil do usuário](#perfil) com a excessão que mostra os seus privilégios de administrador

</dd>

<dt>

**/admin**

</dt>
<dd>

Página de gerenciamento do sistema.

</dd>

<dt>

**/estoque**

</dt>
<dd>Exibição de todo o estoque</dd>
</dl>

## Banco de Dados
> [!info]
> Os usuários do Banco de Dados serão definidos após o Back-End estiver funcionando, ou o projeto estiver mais avançado.

O Banco de Dados tem duas opções para ambientes distintos:
    * Local: SQLite 3
    * Em Nuvem: PostgreSQL

### Definições de Tabelas/Entidades

<dl>
<dt>

**funcionario**

</dt>
<dd> <!-- Início definição funcionario -->

> [!NOTE]
> Os campos preenchidos com "`def. depois`" (definir depois), significam que o texto é extenso, logo é preciso descrever um páragrafo ao invez de estar no campo da tabela.

**Campos**

|    Nome    |     Tipo     | Pode ser vazio |  Restriç(ão/ões)  |
|:----------:|:------------:|:--------------:|:-----------------:|
|     id     |     int      |                |  Pr_key auto_incr.|
|    nome    | varchar(120) |      Não       |   Somente letras  |
| nascimento |     date     |      Não       |    def. depois    |
|    sexo    |    char(1)   |      Não       | check("m" \| "f") |
|    cpf     |   char(11)   |      Não       |    def. depois    |
|   email    | varchar(120) |      Não       |    def. depois    |
|  telefone  |   char(11)   |      Não       |    def. depois    |
|   cargo    |  varchar(30) |      Não       |    Foreign Key    |

**Definições dos `def. depois`:**

<dl>
<dt>

**nome**

</dt>
<dd>

Deve possuir no mínimo 10 caracteres alfabeticos e no máximo 120 (números, emojis etc. são proibidos), espaços, no início, no final ou duplos, ou mais, são proibidos.

</dd>

<dt>

**nascimento**

</dt>
<dd>

A data de nascimento deve realizar um cálculo para descobrir a idade atual do funcionário, caso seja menor que 16 Será negado.
</dd>

<dt>

**sexo**

</dt>
<dd>

Aceita dois valores:

* **"m"**: Sexo masculino;
* **"f"**: Sexo feminino.

<dt>

**cpf**

</dt>
<dd>

> [!warning]
> Requer conhecimento sobre validação deste campo. Devido a isto não será defindo no momento.

</dd>
<dt>

**email**

</dt>
<dd>

> [!warning]
> Requer conhecimento sobre validação deste campo. Devido a isto não será defindo no momento.

</dd>

<dt>

**telefone**

</dt>
<dd>

> [!warning]
> Requer conhecimento sobre validação deste campo. Devido a isto não será defindo no momento.

</dd>

<dt>

**cargo**

</dt>
<dd>

É uma chave estrangeira (Um campo de um outra tabela)
que se relaciona com a [tabela cargos](#cargos) no cammpo [cargo].

</dd>
</dl>

</dd> <!-- Fim definição funcionario -->

<dt id="cargos">

**cargos**

</dt>
<dd> <!-- Início definição cargos -->

| Nome |    Tipo     | Pode ser vazio |      Restrição    |
|:----:|:-----------:|:--------------:|:-----------------:|
|  id  |     int     |                | Pr_key auto_incr. |
| nome | varchar(30) |      Não       |    Unique Key     |

**Cargo pré-definidos**

* Adiministrador(a)

</dd> <!-- Fim definição cargos -->
</dl>

## Back-End
Essa seção consiste em definir os endpoints e os seus verbos HTTP. 

> [!NOTE]
> Antes, é preciso difinir quais são os atributos de uma tabela no banco de dados.

<dl>
<dt>

**/estoque**

</dt>
<dd>

<dt>

**Get**

</dt>
<dd>

* Sem body ou query string na requisição: Retorna todos os Produtos

</dd>

</dd>
</dl>
