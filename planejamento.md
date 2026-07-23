# Planejamento do processo:

## Indicies:

[Objetivos](#objetivos)
[Back-End](#back-end)

## Objetivos
- Projetar um PDV
- Preciso fazer o [Back-End](#back-end) (Principal objetivo)
  1. [Definir endpoints](#endpoints)
- Front-End HTML e CSS

## Planejamentos

O projeto como um todo será um PDV, não precisará de um sistema muito robusto para aguentar várias requeisições (pois só servirá para poucos usuários). 

### Front-End

#### Diretórios
- / (raiz): terá uma tela de boa vindas com botão de login;
- /login/: Tela de login para identificações do usuário;
- /registar/: Registrar login;
- /perfil/: Perfil do usuário com nível abaixo do aministrador (Futuramente será especificado os níveis de privilégios de administração);
- /caixa/: Tela do PDV;
- /admin-login/: Tela de login do administrador
- /admin/: Tela de administrador;
- /estoque/: Consulta de produtos.

##### Especificações dos diretórios

Esse tópico descrevera somente diretórios mais complexos, logo a possíbilidade de diretórios mais simples (como o /, raiz) não seja descritos.

###### / (raiz)
Leia na seção de [Diretórios](#especificacoes-dos-diretorios)

###### /login/
Possuíra campos de e-mail e senha do usuário; e um link para registrar novos usuários.

###### /registar/
Possuíra os seguinte campos:
 
- Nome
- Idade
- Sexo
- Senha
- Conf. Senha

#### Endpoints
- / (Root): 
- GET
- POST
- PUT
- DELETE
