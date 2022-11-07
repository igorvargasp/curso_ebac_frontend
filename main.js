$('#telefone').mask('(00) 00000-0000')

$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        cpf: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true,
        }

    },
    messages: {
        nome: 'Por favor, insira seu nome completo.'
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }

})