#language: pt
Funcionalidade: Entrar no site do gov.br
                acessar o login

Contexto: teste de login no gov.br
    Dado que o usuário está na página do gov.br

    Cenário: Usuário entra na pagina de login
    Quando o usuário clica no botão "Entrar com gov.br"
    Então o usuário deve ver a página de login do gov.br

