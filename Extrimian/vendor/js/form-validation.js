jQuery(document).ready(function($) {
    // hide messages 
    $("#error").hide();
    $("#success").hide();
    // on submit...
    $("#contactForm #submit").click(function() {
        $("#error").hide();
        //required:
        //Nombre
        var name = $("input#name").val();
        if (name == "") {
            $("#error").fadeIn().text("Enter Your name");
            $("input#name").focus();
            return false;
        }
        //appelido
        var surname = $("input#surname").val();
        if (surname == "") {
            $("#error").fadeIn().text("Enter your Surname");
            $("input#surname").focus();
            return false;
        }
        //Company
        var company = $("input#company").val();
        if (company == "") {
            $("#error").fadeIn().text("Enter your Comapny name");
            $("input#company").focus();
            return false;
        }
        // email
        var email = $("input#email").val();
        if (email == "") {
            $("#error").fadeIn().text("Enter your email.");
            $("input#email").focus();
            return false;
        }
        // nombre
        var name = $("#name").val();
        // apellido
        var surname = $("#surname").val();
        // email
        var email = $("#email").val();
        // company
        var company = $("#company").val();
        // comments
        var message = $("#message").val();
        // send mail php
        var sendMailUrl = $("#sendMailUrl").val();
        //to, from & subject
        var to = $("#to").val();
        var from = $("#from").val();
        var subject = $("#subject").val();
        // data string
        var dataString = 'name=' + name +
            '&surname=' + surname +
            '&email=' + email +
            '&company=' + company +
            '&message=' + message +
            '&to=' + to +
            '&from=' + from +
            '&subject=' + subject;
        // ajax
        $.ajax({
            type: "POST",
            url: sendMailUrl,
            data: dataString,
            success: success()
        });
    });
    // on success...
    function success() {
        $("#success").fadeIn();
        $("#contactForm").fadeOut();
    }
    return false;
});