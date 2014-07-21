var arraysexo=new Array("","Miss","Mrs","Mr");
var coregmetlife_obj = document.getElementsByName('checkPI368');

function devuelve_provincia()
{
        var codigopostal_obj = document.getElementById('codigopostal');
        var provincia_obj = document.getElementById('provincia');
	if(!codigopostal_obj || codigopostal_obj.value == '' || codigopostal_obj.value == '*CODE POSTAL ...')
        {
		alert("Veuillez remplir le champ code postal");
		codigopostal_obj.focus();
		return false;
	}
        departement01 = "Ain";
        departement02 = "Aisne";
        departement03 = "Allier";
        departement04 = "Alpes-de-Haute-Provence";
        departement05 = "Hautes-Alpes";
        departement06 = "Alpes-Maritimes";
        departement07 = "Ardèche";
        departement08 = "Ardennes";
        departement09 = "Ariège";
        departement10 = "Aube";
	departement11 = "Aude";
        departement12 = "Aveyron";
        departement13 = "Bouches-du-Rhône";
        departement14 = "Calvados";
        departement15 = "Cantal";
        departement16 = "Charente";
        departement17 = "Charente-Maritime";
        departement18 = "Cher";
        departement19 = "Corrèze";
        departement21 = "Côte-d'Or";
        departement22 = "Côtes-d'Armor";
        departement23 = "Creuse";
        departement24 = "Dordogne";
        departement25 = "Doubs";
        departement26 = "Drôme";
        departement27 = "Eure";
        departement28 = "Eure-et-Loir";
        departement29 = "Finistère";
        departement2A = "Corse-du-Sud";
        departement2B = "Haute-Corse";
        departement30 = "Gard";
        departement31 = "Haute-Garonne";
        departement32 = "Gers";
        departement33 = "Gironde";
        departement34 = "Hérault";
        departement35 = "Ile-et-Vilaine";
        departement36 = "Indre";
        departement37 = "Indre-et-Loire";
        departement38 = "Isère";
        departement39 = "Jura";
	departement40 = "Landes";
        departement41 = "Loir-et-Cher";
        departement42 = "Loire";
        departement43 = "Haute-Loire";
        departement44 = "Loire-Atlantique";
        departement45 = "Loiret";
        departement46 = "Lot";
        departement47 = "Lot-et-Garonne";
        departement48 = "Lozère";
        departement49 = "Maine-et-Loire";
        departement50 = "Manche";
        departement51 = "Marne";
        departement52 = "Haute-Marne";
        departement53 = "Mayenne";
        departement54 = "Meurthe-et-Moselle";
        departement55 = "Meuse";
        departement56 = "Morbihan";
        departement57 = "Moselle";
        departement58 = "Nièvre";
        departement59 = "Nord";
        departement60 = "Oise";
        departement61 = "Orne";
        departement62 = "Pas-de-Calais";
        departement63 = "Puy-de-Dôme";
        departement64 = "Pyrénées-Atlantiques";
        departement65 = "Hautes-Pyrénées";
        departement66 = "Pyrénées-Orientales";
        departement67 = "Bas-Rhin";
        departement68 = "Haut-Rhin";
        departement69 = "Rhône";
        departement70 = "Haute-Saône";
        departement71 = "Saône-et-Loire";
        departement72 = "Sarthe";
        departement73 = "Savoie";
        departement74 = "Haute-Savoie";
        departement75 = "Paris";
        departement76 = "Seine-Maritime";
        departement77 = "Seine-et-Marne";
        departement78 = "Yvelines";
        departement79 = "Deux-Sèvres";
        departement80 = "Somme";
        departement81 = "Tarn";
        departement82 = "Tarn-et-Garonne";
        departement83 = "Var";
        departement84 = "Vaucluse";
        departement85 = "Vendée";
        departement86 = "Vienne";
        departement87 = "Haute-Vienne";
        departement88 = "Vosges";
        departement89 = "Yonne";
        departement90 = "Territoire de Belfort";
        departement91 = "Essonne";
        departement92 = "Hauts-de-Seine";
        departement93 = "Seine-Saint-Denis";
        departement94 = "Val-de-Marne";
        departement95 = "Val-d'Oise";

        minombre= "departement" + codigopostal_obj.value.substring(0,2) ;
        provincia_obj.value = eval(minombre);
}


function register_validation(  validate_terms ) {
    validate_terms = typeof(validate_terms) != 'undefined' ? validate_terms : true;
    var validate_text = /^[a-zA-ZÀ-ÿ]{1}[a-zA-ZÀ-ÿ '-]{1,}$/

    var nombre_obj = document.getElementById('nombre');
    if(!nombre_obj || nombre_obj.value == '' || nombre_obj.value.toLowerCase() == 'prenom...' || !validate_text.test(nombre_obj.value) || !differentLetters(nombre_obj.value ) ) {
        alert("Merci de corriger les erreurs ci-dessous :\nLes donn\xe9es entr\xe9es dans le champ 'Pr\xe9nom' sont incorrectes.");
        nombre_obj.focus();
        return false;
    }

    var apellidos_obj = document.getElementById('apellido1');
    if(!apellidos_obj || apellidos_obj.value == '' || apellidos_obj.value.toLowerCase() == 'nom...'  || apellidos_obj.value == '*NOM...' || !validate_text.test(apellidos_obj.value) || !differentLetters(apellidos_obj.value )  ) {
        alert("Merci de corriger les erreurs ci-dessous :\nLes donn\xe9es entr\xe9es dans le champ 'Nom' sont incorrectes.");
        apellidos_obj.focus();
        return false;
    }


        var dia_obj = document.getElementById('dia');
	if(!dia_obj || dia_obj.value == '0') {
		alert("Merci de corriger les erreurs ci-dessous :\nMerci d'indiquer votre Date de naissance.");
		dia_obj.focus();
		return false;
	}

        var mes_obj = document.getElementById('mes');
	if(!mes_obj || mes_obj.value == 'option1') {
		alert("Merci de corriger les erreurs ci-dessous :\nMerci d'indiquer votre Date de naissance.");
		mes_obj.focus();
		return false;
	}
        var ano_obj = document.getElementById('anio');
	if(!ano_obj || ano_obj.value == 'option1') {
		alert("Merci de corriger les erreurs ci-dessous :\nMerci d'indiquer votre Date de naissance.");
		ano_obj.focus();
		return false;
	}

        if (!esFechaValida_sep(dia_obj.value,mes_obj.value,ano_obj.value))
		return false;

    var usu_18anos = new Date();
    var usu_edad = new Date();
    usu_18anos.setFullYear(usu_18anos.getFullYear()-18);
    usu_edad.setFullYear(parseInt(ano_obj.value));
    usu_edad.setMonth(parseInt(mes_obj.value));
    usu_edad.setDate(parseInt(dia_obj.value));
    
    if (usu_edad > usu_18anos) {
        alert("Merci de corriger les erreurs ci-dessous :\nPour pouvoir vous inscrire sur Ofelix vous devez \xeatre majeur(e)  (plus de 18 ans).");
        nacimiento_obj.focus();
        return false;
    }


	var email_obj = document.getElementById('email');
	if(!email_obj || email_obj.value == '') {
		alert("Le format de l'email n'est pas reconnu");
		email_obj.focus();
		return false;
	}
	else {
		var email_msg = validarEmail(email_obj.value);
		if (!email_msg == '') {
			alert(email_msg);
			email_obj.focus();
			return false;
		}
	}

	if ( document.getElementById('confirmaremail') ){
		var confirmaremail_obj = document.getElementById('confirmaremail');
		if(!confirmaremail_obj || confirmaremail_obj.value == '') {
			alert("L'email de confirmation est vide");
			confirmaremail_obj.focus();
			return false;
		}
		else {
			var email_msg = validarEmail(confirmaremail_obj.value);
			if (!email_msg == '') {
				alert(email_msg);
				confirmaremail_obj.focus();
				return false;
			}
		}

		if(email_obj.value != confirmaremail_obj.value) {
			alert("Merci de corriger les erreurs ci-dessous :\nL\u0027email et la confirmation d\u0027email ne correspondent pas")
			confirmaremail_obj.focus();
			return false;
		}
	}

 
	    var sexo_name = document.getElementsByName("sexo");
	    var i = 0;
	    var ok = 0;
            for(i=0; i<sexo_name.length;i++){		
                if(sexo_name[i].checked){
                  ok = 1;			
		  break;
                }    
            }	   
            if(ok == 0){
            alert("Merci de corriger les erreurs ci-dessous :\nMerci d'indiquer votre Civilit\xe9.");		
		return false;
            }
	
	var codigopostal_obj = document.getElementById('codigopostal');
	if(!codigopostal_obj || codigopostal_obj.value == '' || codigopostal_obj.value == 'code postal...') {
		alert("Merci de corriger les erreurs ci-dessous :\nLe code postal doit comporter 5 chiffres");
		codigopostal_obj.focus();
		return false;
	}
	if(codigopostal_obj.value.length != 5) {
		alert("Merci de corriger les erreurs ci-dessous :\nLe code postal doit comporter 5 chiffres");
		codigopostal_obj.focus();
		return false;
	}
	if (!comprueba_numero(codigopostal_obj,5,'code postal')){
		return false;
	}

	
	if ( document.getElementById('provincia') ){
            var provincia_obj = document.getElementById('provincia');
            if(!provincia_obj || provincia_obj.value == '' || provincia_obj.value == '*DEPARTEMENT ...') {
                    alert("Merci de corriger les erreurs ci-dessous :\nVeuillez remplir le champ departement");
                    provincia_obj.focus();
                    return false;
            }
        }

	if ( document.getElementById('direccion') ){
            var direccion_obj = document.getElementById('direccion');
            if(!direccion_obj || direccion_obj.value == '' || direccion_obj.value.toLowerCase() == 'adresse...' || direccion_obj.value == ' ' || direccion_obj.value.length < 5 || !differentLetters(direccion_obj.value )) {
                    alert("Merci de corriger les erreurs ci-dessous :\nVeuillez remplir le champ adresse");
                    direccion_obj.focus();
                    return false;
            }
	}
	if ( document.getElementById('ciudad') ){
	    var ciudad_obj = document.getElementById('ciudad');
	    if(!ciudad_obj || ciudad_obj.value == ''|| ciudad_obj.value.toLowerCase() == 'ville...' || ciudad_obj.value == ' ' || ciudad_obj.value.length < 2 || !validate_text.test(ciudad_obj.value) || !differentLetters(ciudad_obj.value ) ) {
		    alert("Merci de corriger les erreurs ci-dessous :\nVeuillez remplir le champ ville");
		    ciudad_obj.focus();
		    return false;
	    }
	}
	if ( document.getElementById('localidad') ){
	    var ciudad_obj = document.getElementById('localidad');
	    if(!ciudad_obj || ciudad_obj.value == ''|| ciudad_obj.value.toLowerCase() == 'ville...' || ciudad_obj.value == ' ' || ciudad_obj.value.length < 2 || !validate_text.test(ciudad_obj.value) || !differentLetters(ciudad_obj.value ) ) {
		    alert("Merci de corriger les erreurs ci-dessous :\nVeuillez remplir le champ ville");
		    ciudad_obj.focus();
		    return false;
	    }
	}
	if ( document.getElementById('telefono') ){
		var telefono_obj = document.getElementById('telefono');
		if( !regexp_phone_fr(telefono_obj.value)  || telefono_obj.value.length > '10' ) {
			alert("Merci de corriger les erreurs ci-dessous :\nMerci d'indiquer un num\xe9ro de t\xe9l\xe9phone valide");
			telefono_obj.focus();
			return false;
		}
	}


	var log_legal_terms_obj = document.getElementById('log_legal_terms');
	if(log_legal_terms_obj.checked  == false && validate_terms ) {
		alert("Merci de corriger les erreurs ci-dessous :\nVous devez accepter le r\xe8glement pour participer au jeu concours.");
		log_legal_terms_obj.focus();
		return false;
	}
        if ( document.getElementById('nacimiento') ){
            var nacimiento_obj = document.getElementById('nacimiento');
            nacimiento_obj.value = dia_obj.value + "/" + mes_obj.value + "/" + anio_obj.value;
            //return true;
	}
	if ( document.getElementById('sexe') ){
            var sexe_obj = document.getElementById('sexe');
            sexe_obj.value = sexo_obj.value;
        }


            
            //document.getElementById('formu').submit();
            return true;

}

function function_exists (func_name) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Steve Clay
    // +   improved by: Legaev Andrey
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: function_exists('isFinite');
    // *     returns 1: true
    
    if (typeof func_name === 'string') {
        func_name = this.window[func_name];
    }
    return typeof func_name === 'function';
}

function differentLetters(str){
	if ( contarVocales(str) == 0 || contarVocales(str) == str.length )
		return false;
	return true;
}

function contarVocales(str){
	var validate_vocales = /^[aeiouAEIOUÀ-ÿ]{1}$/
	if (str+"" == "undefined" || str+"" == "null" || str+"" == "")
	return 0;
	cont = 0;
	for (i = 0; i < str.length; i++){
		if(validate_vocales.test(str.charAt(i)))
			cont++;
	}
	return cont;
}

function regexp_phone_fr(value) {     
    var regexp_number = /^0[1-7]+\d{8}$/i
    return regexp_number.test(value);
}


function validarEmail(email) {
    var msg = "Merci de corriger les erreurs ci-dessous :\nLe format de l'email n'est pas reconnu";
    var email_test = /^[A-Za-z0-9\._-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}$/;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s{2,3,4}]+)+$/;
    //var c = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (email_test.test(email)){
       if ( function_exists('validateEmailFvalidator') ){
            validated = validateEmailFvalidator(email);
            if ( !validated )
                return msg;
        }
        return '';
    }
    else
        return msg;
}

function comprueba_numero(elemento,longitud,texto){
   var element=elemento;
   var checkStr = element.value;
   var checkOK = "0123456789";
   var allValid = true;
   var decPoints = 0;
   var allNum = "";
   if (checkStr.length == longitud){
	   for (i = 0; i < checkStr.length; i++) {
	     ch = checkStr.charAt(i);
	     for (j = 0; j < checkOK.length; j++)
	       if (ch == checkOK.charAt(j))
		 break;
	     if (j == checkOK.length) {
	       allValid = false;
	       break;
	     }
	     allNum += ch;
	   }
   }
   else{
	allValid = false;
   }
   if (!allValid) {
     alert("Merci de corriger les erreurs ci-dessous :\nLe "+texto+" doit comporter "+longitud+" chiffres");
     element.focus();
     return false;
   }

   return true;

}

function esFechaValida(fecha){
alert(fecha);
	if (fecha != undefined && fecha.value != "" ){
		if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha.value)){
			alert("Le Format de date n'est pas valide (dd/mm/aaaa)");
			return false;
		}
		var dia  =  parseInt(fecha.value.substring(0,2),10);
		var mes  =  parseInt(fecha.value.substring(3,5),10);
		var anio =  parseInt(fecha.value.substring(6),10);
		switch(mes){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				numDias=31;
				break;
			case 4: case 6: case 9: case 11:
				numDias=30;
				break;
			case 2:
				if (comprobarSiBisisesto(anio)){ numDias=29 }else{ numDias=28};
				break;
			default:
				alert("Le format de la date n'est pas valide (dd/mm/aaaa)1");
				return false;
		}
		if (dia>numDias || dia==0){
			alert("Le format de la date n'est pas valide (dd/mm/aaaa)2");
			return false;
		}
		return true;
	}
}

function comprobarSiBisisesto(anio){
	if ( ( anio % 100 != 0) && ((anio % 4 == 0) || (anio % 400 == 0))) {
		return true;
		}
	else {
		return false;
		}
}

function windowpopup(url){
   // "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0";
   window.open(url, "mywindow", "status=1,scrollbars=1,width=800,height=400" );
}

function validar_intereses(){
	f = document.getElementById('formu');
	for (i = 0;i<=f.elements.length;i++){
		if (f[i] && f[i].type == 'checkbox' && f[i].checked){
			f.submit();
			return false;
		}
	}
	alert('Por favor, selecciona alg?n inter?s');
	return false;
}

function validar_correos(){
	envio = true;
	for (i = 1; i<=5; i++){
		email = document.getElementById('amigo'+i);
		if ( email.value != '' ){
			if (validarEmail(email.value) == '')
				envio = true;
			else{
				alert("Le format de l'email "+i+" est incorrect");
				envio = false;
				break;
			}
		}
	}
	return envio;
	//if (envio)
	//	document.getElementById('formu').submit();
	//else
	//	return envio;
}


function second_validation() {

        var sexo1_obj = document.getElementById('sexo1');
	if(sexo1_obj.selectedIndex == 0) {
		alert("S\u00e9lectionnez votre civilit\u00e9");
		sexo1_obj.focus();
		return false;
	}

	var clave1_obj = document.getElementById('clave1');
	var clave2_obj = document.getElementById('clave2');
	if (clave1_obj.value != clave2_obj.value) {
		alert("Vos mots de passe ne sont pas identiques");
		clave1_obj.focus();
		clave1_obj.value = '';
		clave2_obj.value = '';
		return false;
	}

		// COR
	if ( window.coreg_list  ){
		a = coreg_list.split(',');
		for(i=0;i<a.length-1;i++){
			coreg = a[i];
			if ( document.getElementById('log_legal_terms_'+coreg ) ){
				var log_legal_terms_cor = document.getElementById( 'log_legal_terms_'+coreg );
				if (!log_legal_terms_cor.checked){
					//if ( confirm( "\xbfQuieres recibir informaci\xf3n sobre "+ucfirst( coreg )+"?" ) ){
					alert("Vous devez accepter les Conditions G\xe9n\xe9rales de Vente de Showroom Priv\xe9");
					log_legal_terms_cor.focus();
					log_legal_terms_cor.style.border = '2px solid red';
					return false;
				}
			}
		}
	}
	// FIN - COR
	if ( document.getElementById('url_webservice') ){
        	var showroompriveUrl = document.getElementById('url_webservice');
		showroompriveUrl.value = showroompriveUrl.value + "&Mdp=" + clave1_obj.value + "&Civilite=" + sexo1_obj.value;
	}

        if ( document.getElementById('log_legal_terms_showroomprivee') ){
		var log_legal_terms_showroomprivee_obj = document.getElementById('log_legal_terms_showroomprivee');
		if(!log_legal_terms_showroomprivee_obj.checked  == true) {
			alert("Vous ne pouvez pas poursuivre sans accepter les termes et conditions de Showroomprive");
			log_legal_terms_showroomprivee_obj.focus();
			return false;
		}
	}



	//return true;
	document.getElementById('formu').submit();

}

function second_validationShowroomprive() {

        var clave1_obj = document.getElementById('clave1');
        var clave2_obj = document.getElementById('clave2');
        if (clave1_obj.value != clave2_obj.value) {
            alert("Las contraseñas no son iguales");
            clave1_obj.focus();
            clave1_obj.value = '';
            clave2_obj.value = '';
            return false;
        }

	// COR
	if ( window.coreg_list  ){
		a = coreg_list.split(',');
		for(i=0;i<a.length-1;i++){
			coreg = a[i];
			if ( document.getElementById('log_legal_terms_'+coreg ) ){
				var log_legal_terms_cor = document.getElementById( 'log_legal_terms_'+coreg );
				if (!log_legal_terms_cor.checked)
					if ( confirm( "\xbfQuieres recibir informaci\xf3n sobre "+ucfirst( coreg )+"?" ) ){
						log_legal_terms_cor.focus();
						log_legal_terms_cor.style.border = '2px solid red';
						return false;
					}
			}
		}
	}
	// FIN - COR

	//return true;

        var showroompriveUrl = document.getElementById('url_webservice');
        //showroompriveUrl.value = showroompriveUrl.value + "&Mdp="+clave1_obj.value;
	document.getElementById('formu').submit();

}



function esFechaValida_sep(dia, mes, ano){

        numDias=0;
        //var dia  =  parseInt(dia.value);
	//var mes  =  parseInt(mes.value);
	//var anio =  parseInt(ano.value);

        switch(mes){
		case "01": case "03": case "05": case "07": case "08": case "10": case "12":
                        numDias=31;

			break;
		case "04": case "06": case "09": case "11":
			numDias=30;

			break;
		case "02":
			if (comprobarSiBisisesto(ano)){ numDias=29 }else{ numDias=28};

			break;
		default:
		//	alert("Le Format de date n'est pas valide");
		//	return false;
	}

	if (dia>numDias || dia==0){
		alert("Le Format de date n'est pas valide");
		return false;
	}
	return true;
}


function fill_field( name ){ 
	if( document.getElementById(name+'_aux') && document.getElementById(name) )
		document.getElementById(name+'_aux').value = document.getElementById(name).value;
}

function check_all_fields(){ 
	var fields = new Array('nombre','apellido1','sexo','email','dia','mes','anio','direccion','localidad','codigopostal', 'telefono');
	for( var i=0; i< fields.length;i++){
		if ( document.getElementById(fields[i]+'_aux') && document.getElementById(fields[i]) && document.getElementById(fields[i]+'_aux').value=='' )
			document.getElementById(fields[i]+'_aux').value = document.getElementById(fields[i]).value;
	}
}

