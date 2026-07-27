# Planejamento do proceto:

## Indicies:

[Objetivos](#objetivos)
[Planejamento](#planejamentos)
[Front-End](#front-end)
[Back-End](#back-end)

## Objetivos
- Projetar um PDV
- Preciso fazer o [Back-End](#back-end) (Principal objetivo)
  1. [Definir endpoints](#endpoints)
- Front-End HTML e CSS

## Planejamentos

O projeto como um todo será um PDV, não precisará de um sistema muito robusto para aguentar várias requeisições (pois só servirá para poucos funcionários). 

### Front-End

#### Diretórios
- / (raiz): terá uma tela de boa vindas com botão de login;
- /login/: Tela de login para identificações do funcionário;
- /registar/: Registrar login;
- /perfil/: Perfil do funcionário com nível abaixo do aministrador (Futuramente será especificado os níveis de privilégios de administração);
- /caixa/: Tela do PDV;
- /admin-login/: Tela de login do administrador
- /admin/: Tela de administrador;
- /estoque/: Consulta de produtos.

##### Especificações dos diretórios

Esse tópico descrevera somente diretórios mais complexos, logo a possíbilidade de diretórios mais simples (como o /, raiz) não seja descritos.

###### /(raiz)
Leia na seção de [Diretórios](#especificacoes-dos-diretorios)

###### /login/
Possuíra campos de e-mail e senha do funcionário; e um link para registrar um novo funcionários.

###### /registar/
Possuíra os seguinte campos:
- Nome
- Data de nascimento
- Sexo
- Senha
- Conf. Senha

###### /perfil/
Exibe as seguintes informações funcionário:
- Nome
- Data de nascimento
- Sexo

Terá um botão/link de mudar os dados pessoais, contém os mesmo campos do [endpoint de registro](#registar)

###### /caixa/

