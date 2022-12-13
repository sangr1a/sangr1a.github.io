$(document).ready(function(){
    
    (function($) {
        "use strict";

    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "У тебя же есть имя или псевдоним...",
                    minlength: "Имя должно быть хотя бы больше 2-х символов"
                },
                subject: {
                    required: "У тебя же есть тема письма...",
                    minlength: "Тема письма должна быть больше хотя бы 4-х символов"
                },
                email: {
                    required: "Нет почты - нет письма"
                },
                message: {
                    required: "Тебе нужно что-нибудь написать...",
                    minlength: "Это... всё?"
                }
            },
        })
    })
        
 })(jQuery)
})