> [!NOTE]
> O projeto como um todo é grande, então os assuntos abordados estão imcompletos/rasos.

# Planejamento do projeto:

## Indicies:
Páginas/Caminhos
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

### Caminhos obrigatórios:

<!-- As tags HTMLs foram utilizadas devido a necessidade de usar o atributo `id` para servir de âncora para link -->
<ul>
    <li id="pg-home">
        <b>/home</b> : terá uma tela de boa vindas com botão de login;
    </li>
    <li>
        <b>/estoque:</b> Consulta de produtos.
    </li>
    <li>
        <b>/pdv:</b> Tela do PDV;
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
        <b>/home</b>
    </dt>
    <dd>
        Leia sobre na seção sobre <a href="#pg-home">Páginas</a>
    </dd>
    <dt>
        <b>/login</b>
    </dt>
    <dd>
        Possuíra campos de e-mail e senha do funcionário
        e um link para registrar funcionários.</br>
        <b>
            É preciso de confirmação 2FA obrigatória via E-mail questão de segurança.
        </b>
    </dd>
    <dt>
        <b>/registar</b>
    </dt>
    <dd>
        Possuíra os seguinte campos:
        <ul>
            <li>Nome</li>
            <li>Data de nascimento</li>
            <li>Sexo</li>
            <li>Senha</li>
            <li>Conferir Senha</li>
        </ul>
        Preciso de uma confirmação 2FA obrigatória via E-mail por questão de segurança.
    </dd>
    <dt>
        <b>/perfil</b>
    </dt>
    <dd>
        Exibe as seguintes informações funcionário:
        <ul>
            <li>Nome</li>
            <li>Data de nascimento</li>
            <li>Sexo</li>
        </ul>
    </dd>
    <dd>
        Terá um botão/link de mudar os dados pessoais, contém os mesmo campos do [endpoint de registro](#registar)
    </dd>
    <dt>
        <b>/pdv</b>
    </dt>
    <dd>
        O própro pdv, onde fica a tela de venda e pesquisa dos produtos, havendo duas seções:
        <dl>
            <dt>
                <b>Pesquisa de estoque:</b>
            <dt>
            <dd>
                Traz informções de um determinado produto.</br>
                Possui uma entrada texto para pesquisa por nome, tags, ou SKU.
            </dd>
            <dt>
                Entrada dos produtos a serem vendidos:
            </dt>
            <dd>
                Nome ou SKU
            </dd>
        </dl>
        Além disso, a um botão para visualizar o estoque.
    </dd>   
    <dt>
        <b>/admin-registrar</b>
    </dt>
    <dd>
        Página para criar administradores. Possui as os mesmos campos do <a href="#registrar">login de funcionários</a> comum, porém necessita de privilégios de administrador para criar.
    </dd>
    <dt>
        <b>/admin-login</b>
    </dt>
    <dd>
        Funciona da mesma forma do <a href="#login">login de um funcionário</a>
    </dd>
    <dt>
        <b>/admin-perfil</b>
    </dt>
    <dd>
        Reapreveita os tipos de informações exibidas no <a href="#perfil">perfil do usuário</a> com a excessão que mostra os seus privilégios de administrador
    </dd>
    <dt>
        <b>/admin</b>
    </dt>
    <dd>
        Página de gerenciamento do sistema.
    </dd>
    <dt>
        <b>/estoque</b>
    </dt>
    <dd>
        Exibição de todo o estoque
    </dd>
</dl>

## Back-End
Essa seção consiste em definir os endpoints e os seus verbos HTTP. 

> [!NOTE]
> Antes, é preciso difinir quais são os atributos de uma tabela no banco de dados.

<dl>
    <dt>
        <b>/estoque</b>
    </dt>
    <dd>
        <dt>
            <b>Get</b>
        </dt>
        <dd>
            <ul>
                <li>
                    Sem body ou query string na requisição: Retorna todos os Produtos
                </li>
            </ul>
        </dd>
    </dd>
</dl>
