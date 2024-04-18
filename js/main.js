$(document).ready(function () {
    aplicandoMascara();
    validandoFormulario();
    acaoDoFormulario();
});


function aplicandoMascara() {
    $('#telefone').mask('(00) 0000-0000');
    $('#cep').mask('00000-000');
     $('#cpf').mask('000.000.000-00');
}


function validandoFormulario() {

    $('form').validate({

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            SuporteDeInteresse: {
                required: true
            },
        },

        messages: {
            nome: 'Por favor, informe o seu nome',
            email: 'Por favor, informe o seu E-mail',
            telefone: 'Por favor,informe o seu telefone',
            mensagem: 'Por favor, informe sua mensagem',
            SuporteDeInteresse: 'Por favor, informe o problema'
        },
 

        submitHandler: function (form) {
            console.log(form);
        },

        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos incorretos`);
        },

    });

}

function acaoDoFormulario() {

    $('.lista-suporte button').click(function () {

        const nomeSuporte = $(this).parent().find('h3').text();
        $('#SuporteDeInteresse').val(nomeSuporte);

        const destino = $('#contato');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
}
   
