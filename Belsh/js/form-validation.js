jQuery(document).ready(function($) {

	// hide messages 
	$("#error").hide();
	$("#success").hide();

	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//Nombre
		var nombre = $("input#nombre").val();
		if(nombre == ""){
			$("#error").fadeIn().text("* Ingrese su Nombre.");
			$("input#nombre").focus();
			return false;
		}
		
			// phone
		var phone = $("input#phone").val();
		if(phone == ""){
			$("#error").fadeIn().text("* Ingrese su Telefono.");
			$("input#phone").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("* Ingrese su email.");
			$("input#email").focus();
			return false;
		}

	

		// nombre
		var nombre = $("#nombre").val();
		// phone
		var phone = $("#phone").val();
		// email
		var email = $("#email").val();
	// comments
		var mensaje = $("#mensaje").val();
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
	
		// data string
		var dataString = 'nombre='+ nombre
						+ '&phone=' + phone
						+ '&email=' + email
						+ '&mensaje=' + mensaje
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;
									         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#success").fadeIn();
	 	$("#contactForm").fadeOut();
	 	

	 }
	
    return false;
});

