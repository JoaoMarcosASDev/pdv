# Planejamento do proceto:

## Indicies:

[Objetivos](#objetivos)
[Planejamento](#planejamentos)
[Front-End](#front-end)
[Back-End](#back-end)

## Objetivos
* Projetar um PDV
* Preciso fazer o [Back-End](#back-end) (Principal objetivo)
  1. [Definir endpoints](#endpoints)
* Front-End HTML e CSS

## Planejamentos
O projeto como um todo será um PDV, não precisará de um sistema muito robusto para aguentar várias requeisições (pois só servirá para poucos funcionários). 

### Front-End

#### Páginas
<ul>
    <li id="pg-home">/home : terá uma tela de boa vindas com botão de login;</li>
    <li>/login/: Tela de login para identificações do funcionário;</li>
    <li>/registar/: Registrar login;</li>
    <li>/perfil/: Perfil do funcionário com nível abaixo do aministrador (Futuramente será especificado os níveis de privilégios de administração);</li>
    <li>/pdv/: Tela do PDV;</li>
    <li>/admin-registrar/: Tela de registrar novos administradores;</li>
    <li>/admin-login/: Tela de login do administrador;</li>
    <li>/admin/: Tela de administrador;</li>
    <li>/admin-perfil/: Perfil do administrador;</li>
    <li>/estoque/: Consulta de produtos.</li>
<ul>

##### Especificações das Páginas
<dl>
    <dt>
        <b>/home</b>
    </dt>
    <dd>
        Leia sobre na seção sobre <a href="#pg-home">Páginas</a>
    </dd>
    <dt>
        <b>/login/</b>
    </dt>
    <dd>
        Possuíra campos de e-mail e senha do funcionário
        e um link para registrar funcionários.</br>
        <b>
            É preciso de confirmação 2FA obrigatória via E-mail questão de segurança.
        </b>
    </dd>
    <dt>
        <b>/registar/</b>
    </dt>
    <dd>
        Possuíra os seguinte campos:
        <ul>
            <li>Nome</li>
            <li>Data de nascimento</li>
            <li>Sexo</li>
            <li>Senha</li>
            <li>Conf. Senha</li>
        </ul>
        Preciso de uma confirmação 2FA obrigatória via E-mail por questão de segurança.
    </dd>
    <dt>
        <b>/perfil/</b>
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
        <b>/pdv/</b>
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
    </dd>   
    <dt>
        <b>/admin-registrar/</b>
    </dt>
    <dd>
        Página para criar administradores. Possui as os mesmos campos do <a href="#registrar">login de funcionários</a> comum, porém necessita de privilégios de administrador para criar.
    </dd>
    <dt>
        <b>/admin-login/</b>
    </dt>
    <dd>
        Funciona da mesma forma do <a href="#login">login de um funcionário</a>
    </dd>
    <dt>
        <b>/admin-perfil/</b>
    </dt>
    <dd>
        Reapreveita os tipos de informações exibidas no <a href="#perfil">perfil do usuário</a> com a excessão que mostra os seus privilégios de administrador
    </dd>
    <dt>
        <b>/admin/</b>
    </dt>
    <dd>
        Página de gerenciamento do sistema.
    </dd>
</dl>
