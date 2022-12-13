$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(ddd) xxxxx-xxxx'
    }) 
    
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail'
        }
    })
})