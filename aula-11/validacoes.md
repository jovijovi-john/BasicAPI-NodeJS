para trabalhar com verificações existe uma biblioteca que se chama yup:

    yarn add yup

    docs: https://github.com/jquense/yup

    é uma validação em formato de schema 

    import * as Yup from "yup"

    use .required() para campos obrigatórios

    ao inves de ficar verificando um por um, pode verificar logo o body inteiro de uma vez

    para validar emails:

        Yup.string().email()

    
    caso tenha o seguinte erro: ERR_HTTP_HEADERS_SENT

    https://cursos.alura.com.br/forum/topico-error-err_http_headers_sent-cannot-set-headers-after-they-are-sent-to-the-client-82217

    provavelmente é porque tem dois res.json ou res.send no mesmo codigo. Ve se nao ta faltando um return...