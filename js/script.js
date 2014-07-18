var globe_image_path = "http://46.255.163.33/partez_avec_leglobetrotteur/concorso_turista_curioso/";

function menu(id){

	/*var selelezione_viaggio = $("div#form").parent().attr("id");
	$("input#selection").val(selelezione_viaggio);*/

	/* MENU HOVER EFFECT */
	if($(document).width() > 640){
		$(id).mouseover(function() {
			$("div.menu:not("+id+")").stop(true, false).animate({ width: '20%'}, 380);
			$(id).stop(true, false).animate({ width: '40%'}, 380);
			$("div"+id+" .overlay").stop(true, false).animate({ opacity: '0'}, 380);
			$("div"+id+" .select").stop(true, false).animate({ opacity: '1'}, 380);
			
		}).mouseout(function() {
			$("div"+id+" .overlay").stop(true, false).animate({ opacity: '1'}, 380);
			$("div"+id+" .select").stop(true, false).animate({ opacity: '0.5'}, 380);
		});
	}
	// resetta l'apertura del menu sull'hover quando esci dal documento (pagina)
	/*$(document).mouseout(function(){
		$("div.menu").stop().animate({ width: '25%'}, 400);
	});*/
	

	$(id).one("click", function(){
	
		if($(document).width() < 641){
			$("div#adsense").appendTo("div.box3");
			
			//var img_path = $("div#right_title").next().css("background-image");
			var img_path = "";
			
			if(id == "#londra")
				img_path = "lnd_mob.jpg";
			else if(id == "#newyork")
				img_path = "ny_mob.jpg";			
			else if(id == "#messico")
				img_path = "mx_mob.jpg";
			else if(id == "#mykonos")
				img_path = "myk_mob.jpg";
			
			$(id).attr('style', 'background-image: none !important');

			$("div#logo").hide();
			$("body").css("background-image", "url('"+globe_image_path+img_path+"')");
			$("div#form").css({"width": "180%", "padding-top": "0vw", "margin-top": "-62%"});
			
			$("div.box3").css({"width": "111%", "margin-left": "0"});
			$("div.top").css({"background-image": "none", "border":"none", "font-size": "43px"}) 
    
			$("input").css("width", "90%");
			//$("div#logo").parent().remove();
			$("div#central_title").remove();
			
			$("div#facebook-login").css({"font-size": "20px", "height": "53px", "margin": "0 auto", "padding-left": "12%", "width": "81%"  });
			$("div#bottom").css({"padding": "16px 6px 6px"});
			$("div.privacy_button").css({"height": "0"});
			$("div.privacy_button input").css({"width": "auto"});
			$("div.privacy_txt").css({"width": "auto", "margin-left": "75px", "font-size": "9px", "line-height": "11px"});

		}else{
			$("body").css("height", "100vh");
			$("div#footer").css("height", "30px");
		}
		
		$("<div class='clear spacer'></div>").appendTo("div#form");
		$("div#footer").css({"background-image": "none", "border": "none", "position": "static"}).appendTo("div#form");
		
		change_dest("init",id);

		
		/* animazione di apertura */
		$("div.menu:not("+id+")").stop(true, false).animate({ width: '0%' }, 380);
		$(id).stop(true, false).animate({ width: '100%' }, 380, function(){	
					$("div#central_title").hide();
		//$("div#central_title").addClass('animated fadeOut');

		$("div#facebook").remove();
	
		var pageurl = "form.php";
		
		
		if(pageurl!=window.location){
			window.history.pushState({path:pageurl},'',pageurl);	
		}
		

		
		//window.history.back();
		
		
		$(".select").remove();
			
			$(id).css("background-size", "100%");
			
			//sposta il contenuto del form nel menu selezionato
			$("div#form").appendTo(id).fadeIn();	
			//imposta il background
			$(".box1 div:first-child").html("<img src='"+globe_image_path+"parti_"+id.replace('#','')+".png' title='Vola a "+id.replace('#','')+"' alt='Vola a "+id.replace('#','')+"' />");

			//nasconde il nome della selezione
			$(".overlay, div.menu:not("+id+")").remove();					
		});
		
		//$("#central_title").hide("drop", {direction: "up"}, 300).remove();
		
		/* disabilita il mousehover*/
		$("div.menu, .overlay, .select").css("background-position", "0 0").css("cursor", "default").unbind('mouseout').unbind('mouseover');
		
		/* modifica il footer */
		if($(document).width() > 640){
			$("div#footer")
				.css({
					"background-image": "url('"+globe_image_path+"282b37.png')",
					"border": "none",
					"width": "100%",
					"left": "0",
					"right": "0",
					"bottom": "0",
					"padding-left": "20px",
					"padding-right": "20px"
				})
				
			$("<iframe src='addsense/passo2.html' frameborder='0'></iframe>").load(function(){
				$("#adsense img").hide()
			}).appendTo("div#adsense")
				
		}else{
			$("<iframe src='addsense/passo2_mob.html' frameborder='0'></iframe>").load(function(){
				$("#adsense img").hide()
			}).appendTo("div#adsense")
			$("#adsense iframe, #adsense2 iframe").css("margin", "0 auto");
		}
		//return false;
		
			
	});
	

	
	/* RESOLUTIONS OPTIMIZATION */
	/*$(window).resize(function(){
		if($(document).width() >= 900 && $(document).width() <= 1300){
			$("div.menu").css("background-size", "130%");
		
		}		
	})*/
	/* ************************ */	
}

function change_dest(arrow, id_get){

	var id = "#"+$("div#right_title").next().attr("id");
	if(!id_get){
		id_get = id;
	}
	
	/* CAMBIO DESTINAZIONI/SFONDO DA FORM */
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	
	if(is_chrome || is_safari){
		var destinazioni = [
			'url('+globe_image_path+'newyork.jpg)',
			'url('+globe_image_path+'londra.jpg)', 
			'url('+globe_image_path+'mykonos.jpg)', 
			'url('+globe_image_path+'messico.jpg)'
		];
	}else{
		var destinazioni = [
			'url("'+globe_image_path+'newyork.jpg")',
			'url("'+globe_image_path+'londra.jpg")', 
			'url("'+globe_image_path+'mykonos.jpg")', 
			'url("'+globe_image_path+'messico.jpg")'
		];	
	}
	var destinazioni_txt = [
		globe_image_path+'parti_newyork.png',
		globe_image_path+'parti_londra.png',
		globe_image_path+'parti_mykonos.png',
		globe_image_path+'parti_messico.png'
	];
	
	var destinazioni_descrizione = [
		'“New York est un modèle parfait d\'une ville, pas le modèle d\'une ville parfaite.” <span class="autore">(Lewis Mumford)</span><div class="clear spacer"></div>“Il n\'y a rien comme l\'automne à New York, non seulement les feuilles changent, mais quelque chose dans l\'air fait rejaillir leurs véritables couleurs.” <span class="autore">(gossip girl)</span><div class="clear spacer"></div>“Vous êtes à New York: Si vous pouvez le faire ici, vous pouvez le faire n\'importe où.” <span class="autore">(Lawrence Block)</span><div class="clear"></div>',
		'“Je ne pense pas que vous pourrez trouver quelque chose qui mérite plus le nom de société en dehors de Londres.” <span class="autore">(William Hazlitt)</span><div class="clear spacer"></div>“Quand un homme est fatigué de Londres, il est fatigué de la vie, car il y a à Londres tout ce que la vie peut offrir.” <span class="autore">(Samuel Johnson)</span><div class="clear"></div>',
		'“Le vent de Mykonos effleure les yeux des golfes, les dômes célestes et des murs blancs pénètrent au paradis sans patience, transformant le sable et poussant l\'eau turquoise sur les mythes des Cyclades” <span class="autore">(extrait du poème "Le vent de Mykonos")</span><div class="clear"></div>',
		'“Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.” <span class="autore">(Marcel Proust)</span><div class="clear spacer"></div>“Le voyageur, ce sage, apprend à ne pas répéter les succès mais à en trouver d’autres dans de nouveaux lieux.” <span class="autore">(Paul Fussell)</span><div class="clear spacer"></div>'
	];
	
	
	
	
	/* FRECCIA SINISTRA */
	//da mouse
	if(arrow == "left"){
		var posizione = destinazioni.indexOf($(id).css("background-image"));
		if(posizione == 0) 
			posizione = 4;			
		$(id).css("background-image", destinazioni[posizione-1]);
		$(".box1 div img").attr("src", destinazioni_txt[posizione-1]);
		$(".box1 div:first-child + div + div").html(destinazioni_descrizione[posizione-1])
	}else if(arrow == "right"){
		var posizione = destinazioni.indexOf($(id).css("background-image"));
		//alert(posizione+" "+(posizione+1));
		if(posizione == 3) 
			posizione = -1;			
			
		$(".box1 div img").attr("src", destinazioni_txt[posizione+1]);			
		$(id).css("background-image", destinazioni[posizione+1]);
		$(".box1 div:first-child + div + div").html(destinazioni_descrizione[posizione+1])
	}else if(arrow == "init"){
		var posizione = destinazioni.indexOf($(id_get).css("background-image"));
		$(".box1 div:first-child + div + div").html(destinazioni_descrizione[posizione])
	}else if(arrow == "final"){
		var posizione = destinazioni.indexOf($(id_get).css("background-image"));
		$(".box1 div img").attr("src", destinazioni_txt[posizione]);
		$(".box1 div:first-child + div + div").html(destinazioni_descrizione[posizione])
	};		

}

function start(){
/*
	$("#central_title").animate({ left:"none", right: "20px", top: "20px", width: "150px"});
	$("div#logo").parent().after("<div id='new_title'></div>");
	$("div#new_title").fadeIn();
		
	$(".select").animate({ marginTop: "+=-15vw", opacity: "0.5" }, 380);*/
	
	menu("#londra");
	menu("#newyork");	
	menu("#messico");	
	menu("#mykonos"); 	
	

	
	/* fix error jquery user interface (jquery UI) */
	$(".ui-effects-wrapper").remove();
	
	
	
}

function condividiHome(){
	FB.ui(
	{
		method: 'feed',
		name: 'Scegli e Vinci il Viaggio dei tuoi sogni',
		link: ' http://127.0.0.1:8080/inviaggio_col_turista/',
		picture: globe_image_path+'180x115.jpg',
		caption: 'Scrivici cosa non dovrebbe mai mancare nella tua valigia per una vacanza perfetta.',
		description: 'Vincerai il viaggio dei tuoi sogni!',
		message: ''
	});
}

function is_mail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function controlfoo(){
	if(!foo){
		$("#comune").val("")
	}
}
/*
function empty(){
	$("#comune").removeAttr("readonly");
	$("#comune").val("");
	foo=false
}
*/
 


function vai(){
	$("input#comune").val("Ville introuvable!").css("color", "#FF8080"); 
	var id_obj = "div#sbHolder_"+$("select#comune").attr("sb");
	//$(id_obj).html("<a class='sbSelector' style='color:#fff'>Cap Inesistente!</a>");
}

function trovaprovincia(e){
	if(e==""||e.length<5){
		vai();
	}else{
		intRegex=/[0-9 -()+]+$/;
		if(intRegex.test(e)){
			//if(e.length==5){
				$.ajax({
					type:"POST",
					url:"comuni/find_city.php",
					dataType:"json",
                                        converters: {"text html": false, 'text json': jQuery.parseJSON},
					data:{cap:e},
					success:function(e)
                                        {
                                                console.log(e);
						if(e.error === false)
                                                {
                                                    if (e.msg != '0')
                                                    {
                                                        if (typeof e.msg === 'string')
                                                        {
                                                            $("#aggiunta").html("<input id='comune' name='comune' type='text' value='"+e.msg+"' readonly style='color:#fff'/>").show("fast");
                                                            
                                                        }
                                                        else
                                                        {
                                                            var city_select = "";
                                                            for(var i=0; i < e.msg.length; i++)
                                                                    city_select += "<option value='"+e.msg[i]+"'>"+e.msg[i]+"</option>";
                                                            $("#aggiunta").html("<select id='comune' name='comune'><option value=''>Choisissez une ville</option>"+city_select+"</select><script>$('#comune').selectbox().next().css({'width': '199px', 'left': '169px'});</script>").show("fast");
                                                        }
                                                    }
                                                    else
                                                        $("#aggiunta").html("<input onclick=';if (this.value == 'Comune*') {this.value = '';}' onblur='controlfoo(); if (this.value == '') {this.value = 'Comune*';}' id='comune' name='comune'  type='text' />").show("fast");
                                                    if(e.focus=="0")
                                                    {
							$("#comune").focus();
                                                            vai();
                                                    }
                                                    else
                                			$("#comune").next("input").focus();
						}
					},
					error:function(e,t,n){}
				})
			//}
		}else{
			vai();
		}
	}
}var foo=false;


function vai_b(){
	$("#position").attr("value", "b");
	$("div#form .box2")
			.css("margin-top", "40px")
			.contents()
			.filter(function() {
				return this.nodeType == 3; //Node.TEXT_NODE
			}).remove();
	$("div#form .box2 span").remove();
	$( ".target" ).hide();
	$(".box2 div#passo").remove();

	$("div.top").css({"background-image": "url('"+globe_image_path+"3c3e4b.png')", "border": "none"});
	$("div.top").css("max-width", "641px").html('<div id="title_frase_final" style="float:left;"><img src="http://registro.correodirect.com/campaigns/42221/obseques.png"></div><div style="float:right; max-width:200px"><b style="font-size:8px; color:#000;" >Pour protéger vos proches, organisez et financez vos obsèques dès aujourd\'hui !</b></div><div class="clear spacer"></div><div id="title_frase_final"><img src="http://registro.correodirect.com/campaigns/42221/obseques.png"></div>').insertBefore(".box2 div#adsense");
	/*
		<div class="cdcr_campaign_description" style="overflow:hidden; text-align:left;">
		<b style="font-size:13px; color:#000;" class="title">Pour protéger vos proches, organisez et financez vos obsèques dès aujourd\'hui !</b>
		<div class="cdcr_campaign_terms" style="text-align:left;">
        <div class="cdcr_campaign_terms_text" style="overflow:hidden;">
        <span style="font-size:12px"> 
        <a style="font-size:12px">Souhaitez-vous être contacté par téléphone par un professionnel de l\'assurance santé pour une estimation gratuite et sans engagement de votre part ?</a></span></div><div style="overflow:hidden;float:left" class="cdcr_campaign_terms_input"><div class="cdcr_form_radio_option" style="overflow:hidden;"><a style="font-size:12px"><label>Oui</label><input type="radio" name="infocomercial-42221" id="infocomercialsi-42221" value="si" onclick="__cdcr_campaign_accept_42221();"></a></div><a style="font-size:12px">
        <div class="cdcr_form_radio_option" style="overflow:hidden;">
        <label>Non</label>
        <input type="radio" name="infocomercial-42221" id="infocomercialno-42221" value="no" onclick="__cdcr_campaign_reject_42221();">
        </div></a></div>
        <a style="font-size:12px">
    	</a></div>
    	<a style="font-size:12px">
		</a></div><a style="font-size:12px">
		</a></div>');*/
	//$("div#form .box3").remove();
}

function vai_c()
{
	window.scrollTo(0, 0);
	
	$("#adsense iframe").attr("src", "addsense/passo4.html");
    var via = "";
    var via_select = "";    
	var giorni_select = "";
	
	for (var i=1; i<32; i++)
	{
		if(i<10)
			giorni_select += "<option value='0"+i+"'>0"+i+"</option>";
		else
			giorni_select += "<option value='"+i+"'>"+i+"</option>";
	}
	
	var mesi_select = "";

	for (var i=1; i<13; i++)
	{
		if(i<10)
			mesi_select += "<option value='0"+i+"'>0"+i+"</option>";		
		else
			mesi_select += "<option value='"+i+"'>"+i+"</option>";
	}
	
	var anni_select = "";

	for (var i=1995; i>1915; i--)
		anni_select += "<option value='"+i+"'>"+i+"</option>";
	
	var sesso_fb = $("input#sesso_fb").val();
	var sex_select = "";

	if (sesso_fb != '')
	{
		if(sesso_fb == "m")
			sex_select = "<option selected value='m'>Monsieur</option><option value='f'>Madame</option>";
		else
			sex_select = "<option value='m'>Monsieur</option><option selected value='f'>Madame</option>";
	}
	else
		sex_select = "<option value='m'>Monsieur</option><option value='f'>Madame</option>";
	
	$("#position").attr("value", "c");
	$("div.box2 span").html("3");	
	$("div#step").html("<img src='"+globe_image_path+"ajax-loader.gif' id='loader_gif' alt='caricamento, attendi qualche secondo' title='caricamento, attendi qualche secondo' />CONTINUER");
	$("label.nb").css({"margin-right": "32px", "font-weight": "500px", "font-size": "15px"});
	$("div.privacy_button").html("").show();
        $("div.privacy_txt").html("").css({"width": "336px", "line-height": "16px", "margin-top": "-10px", "margin-bottom": "15px"}).show();			
	$(".box2 div#passo").css("background-position", "39px -100px");
	$("div.top").html("<span class='white'>COMPLETEZ ET </span>PARTEZ!<br />\n\
        <select name='gg' id='gg' tabindex='1'>\n\
            <option value=''>Jour*</option>"+giorni_select+"</select>\n\
        <select name='mm' id='mm'>\n\
            <option value=''>Mois*</option>"+mesi_select+"</select>\n\
        <select name='aaaa' id='aaaa'>\n\
            <option value=''>Année*</option>"+anni_select+"</select>\n\
        <div class='clear spacer'></div>\n\
        <select name='sesso' id='sesso'>\n\
            <option value =''>Civilité*</option>"+sex_select+"</select>\n\
        <div class='clear spacer'></div>\n\
        <input type='text' name='civico' id='civico' placeholder='N&deg;*' maxlength=5>\n\
        <select name='via' id='via'><option value='via'>Voie</option>\n\
        <option value='viale'>rue</option>\n\
        <option value='piazzale'>place</option>\n\
        <option value='circolo'>Boulevard</option>\n\
        <option value='vicolo'>Avenue</option>\n\
        <option value='corso'>Corso</option>\n\
        <option value='strada'>Strada</option>\n\
        <option value='localita'>Localit&agrave;</option>\n\
        <option value='largo'>Largo</option></select>\n\
        <input type='text' name='indirizzo' id='indirizzo' placeholder='Adresse*'>\n\
        <div class='clear spacer'></div>\n\
        <input type='text' name='cap' id='cap' placeholder='CP*' maxlength=5 onblur='trovaprovincia(this.value)'>\n\
        <div id='aggiunta'>\n\
        <input type='text' name='comune' id='comune' value='Ville (auto)' readonly disabled>\n\
        </div>\n\
        <div class='clear spacer'></div>\n\
        <input type='text' name='cellulare' id='cellulare' placeholder='Téléphone*' maxlength=12>\n\
        <label class='nb'>* champs obbligatoires</label><div class='clear'></div>");
	$("div#step").css("margin-top", "0");	

	
	if(sesso_fb != '')
		$("select#sesso").attr("disabled", true);	
	
	
	var data_fb = $("input#datanascita_fb").val();
	
	if(data_fb != ''){
		data_fb = data_fb.split("/");
		
		//$("a#sbSelector_"+$("select#gg").attr("sb")).text(data_fb[0]);
		//$("a#sbSelector_"+$("select#mm").attr("sb")).text(data_fb[1]);
		//$("a#sbSelector_"+$("select#aaaa").attr("sb")).text((data_fb[2]));		
		$("select#gg").val(data_fb[1]);
		$("select#mm").val(data_fb[0]);
		$("select#aaaa").val(data_fb[2]);
		
		//$("select#gg, select#mm, select#aaaa").attr('disabled', true);
	}
	
	/* TRASFORMAZIONE DELLE SELECT CON JQUERY */
	$("select").each(function(){
		$(this).selectbox().next().css({
			"width": $(this).css("width"),
			"margin-left": $(this).css("margin-left"),
			"float": $(this).css("float")
		});
		
		//console.log($(this).attr("disabled"));
		
		/*if($(this).attr("disabled") == "disabled")
			$(this).selectbox("disable");*/
	});
	
	if($(document).width() < 641){
		if(data_fb != ''){
			$("a#sbSelector_"+$("select#gg").attr("sb")).text(data_fb[0]);
			$("a#sbSelector_"+$("select#mm").attr("sb")).text(data_fb[1]);
			$("a#sbSelector_"+$("select#aaaa").attr("sb")).text((data_fb[2]));	
		}
		
		$("div.privacy_txt").css({"width": "auto", "margin-left": "auto"});
		
		$("select#gg, select#mm, select#aaaa").next().css({"width": "28%"});
		$("select#gg").next().css({"margin-left": "6%"});
		$("select#mm, select#aaaa").next().css({"margin-left": "2%"});

		$("select#sesso").next().css({ "margin-left": "6%", "width": "88%"});

		$("select#via").next().css({"margin-left": "6%", "width": "22%"});
		$("input#indirizzo").css({"margin-left": "2%", "width": "46%"});
		$("input#civico").css({"margin-left": "2%", "width": "12%"});

		$("input#cap").css({"margin-left": "6%", "width": "32%"});
		$("input#comune").css({"margin-left": "2%", "width": "50%"});

		$("select#operatore").next().css({"margin-left": "6%", "width": "34%"});
		//$("input#cellulare").css({"margin-left": "2%", "width": "50%"});

		$("input#cellulare").css({"margin-left": "6%", "width": "86%"});

		$("div#privacy_txt").css({"line-heigth": "9px", "font-size": "8px"});
		
		$("#adsense iframe").attr("src", "addsense/passo4_mob.html");		
	}		
	
	/* cambio colore comune */
	$("input#comune").change(function(){
		//alert("sto cambiando");
		if($(this).val() == 'Comune (auto)')
			$(this).css("color", "#878787");
		else
			$(this).css("color", "#fff");
	});
}

function vai_finale(frase, viaggio, pixel){

	window.scrollTo(0, 0);

	$("div.top").css({"background-image": "url('"+globe_image_path+"3c3e4b.png')", "border": "none"});
	 

	if($(document).width() > 640){
		$("div#right_title").next().css("background-image", "url('"+globe_image_path+viaggio+".jpg')");

		//alert("Step finale: da inserire l'ultimo step con il condividi su facebook");
		$(".box1 div:first-child + div").html("VOTRE DESTINATION").css("background-image", "none");
		
		
		$("div#form .box2")
			.css("margin-top", "40px")
			.contents()
			.filter(function() {
				return this.nodeType == 3; //Node.TEXT_NODE
			}).remove();
		$("div#form .box2 span").remove();
		$(".box2 div#passo").remove();
		
		
		$(".box2 div#adsense").css("float", "left").after("<div id='adsense2'></div>");
		
		$("div.top").css("max-width", "641px").html("<div id='title_frase_final'>Merci de votre participation!</div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div.bottom").css("padding", "10px 0 0").html("<div class='clear spacer'></div><div id='facebook-cond' onclick=\"postToFeed(); return false;\">PARTAGER SUR <span class='bold'>FACEBOOK</span></div><div id='facebook-inv' onclick=\"login_button_fb('amici')\">INVITER DES AMIS</div><div class='clear spacer'></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div#form .box3").remove();
		
		$("#adsense iframe").attr("src", "addsense/passo_fine_sx.html");
		$("div#adsense2").html("<iframe src='addsense/passo_fine_dx.html' frameborder='0'></iframe>");
		
		change_dest("final", false);
	
	}else{
		$("div.top").css("max-width", "641px").html("<div id='title_frase_final'>Frase scelta:</div><div id='frase_final'><span>&ldquo; </span>"+frase+"<span> &rdquo;</span></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div.bottom").css("padding", "10px 0 0").html("<div class='clear spacer'></div><div id='facebook-cond' onclick=\"postToFeed(); return false;\">CONDIVIDI SU <span class='bold'>FACEBOOK</span></div><div id='facebook-inv' onclick=\"login_button_fb('amici')\">INVITER DES AMIS</div><div class='clear spacer'></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div#facebook-inv").css("margin-top", "10px");
		
		$("#adsense iframe").attr("src", "addsense/passo_fine_sx_mob.html");
	}
} 
 
function step(){
	$("div#step").click(function(){
		var position = $("#position").val();
		switch(position){
			case "a": 
				var nome = $("input#nome").val();
				var cognome = $("input#cognome").val();
				var email = $("input#email").val();
				var ref = $("input#ref").val();
				var privacy = $("input[name='privacya']:checked").val();
				var messaggio_utente = "Veuillez cocher les champs suivants:\n";
				var lunghezza_messaggio = messaggio_utente.length;
				if(nome == "" || !isNaN(nome))
					messaggio_utente += "* Prénom\n";
				if(cognome == "" || !isNaN(cognome))
					messaggio_utente += "* Nom\n";				
				if(email == "" || !is_mail(email))
					messaggio_utente += "* Email\n";
				if(privacy == "" || privacy == null)
					messaggio_utente += "\n* Cochez la case relative au règlement\n";					
				if(lunghezza_messaggio != messaggio_utente.length){
					alert(messaggio_utente);
					return false;
				}
                                else{
					$("img#loader_gif").css("visibility", "visible");

					$("input#mail_temp").val(email);
					$("input#nome_temp").val(nome);
					$("input#cognome_temp").val(cognome);
                                        
                                        //Don't forget to uncomment the function below once the form is set
                                        
					/*
					$.post( "engine/send_data.php", { data_access: true, position: position, nome: nome, cognome: cognome, email: email, ref:ref })
						.done(function(data){
							alert(data);
							if(data != ""){
								console.log(data);
								var data_obtain = jQuery.parseJSON(data);
								vai_finale(data_obtain.frase, data_obtain.viaggio, data_obtain.pixel_alan_partners);
							}else
								vai_c();
								$("img#loader_gif").css("visibility", "hidden");
					}).fail(function(data) {
						console.log('fail!');
						console.log(data.getAllResponseHeaders());
						console.log('status=' + data.status);              
						console.log('data.responseText=' + data.responseText);
						console.log(data);
					});*/
                        
                                        //stuff to remove when the registration file is set
                                        vai_c();
					$("img#loader_gif").css("visibility", "hidden");
				}
				break;
			case "b":
				alert("this is the last step");
				if ($('#messico').attr('id'))
					var viaggio = "messico";
				else if ($('#londra').attr('id'))
					viaggio = "londra";
                else if ($('#newyork').attr('id'))
                	viaggio = "newyork";
                else if ($('#mykonos').attr('id'))
                	viaggio = "mykonos";
				vai_finale("", viaggio, "null");			
				$("img#loader_gif").css("visibility", "hidden");
				break;
			case "c": 
				var messaggio_utente = "Les champs suivants n'ont pas été remplis correctement\n";
				var lunghezza_messaggio = messaggio_utente.length;
			
				var email = $("input#mail_temp").val();
				var nome = $("input#nome_temp").val();
				var cognome = $("input#cognome_temp").val();
				
				$("input#mail_temp").val("");				
				$("input#nome_temp").val("");
				$("input#cognome_temp").val("");
				
				
				var giorno = $("a#sbSelector_"+$("select#gg").attr("sb")).text();
				var mese = $("a#sbSelector_"+$("select#mm").attr("sb")).text();
				var anno = $("a#sbSelector_"+$("select#aaaa").attr("sb")).text();
				var sesso = $("a#sbSelector_"+$("select#sesso").attr("sb")).text();
				var via = $("a#sbSelector_"+$("select#via").attr("sb")).text();
				
				var indirizzo = $("input#indirizzo").val();
				var civico = $("input#civico").val();
				var cap = $("input#cap").val();
				var comune = "";
				if($("select#comune").css("display") == "none"){
					comune = $("a#sbSelector_"+$("select#comune").attr("sb")).text();
				}else{
					comune = $("input#comune").val();
				}
				var provincia = $("input#prov").val();
				var operatore = $("a#sbSelector_"+$("select#operatore").attr("sb")).text();
				var cellulare = $("input#cellulare").val();
				var tel_fisso = $("input#fisso").val();
				var ref = $("input#ref").val();
				
				if(giorno == "GG*")
					messaggio_utente += "* Giorno\n";
				if(mese == "MM*")
					messaggio_utente += "* Mese\n";		
				if(anno == "AAAA*")
					messaggio_utente += "* Anno\n";		
				if(sesso == "Sesso*")
					messaggio_utente += "* Sesso\n";					
				if(indirizzo == "")
					messaggio_utente += "* Indirizzo\n";	
				if(civico == "")
					messaggio_utente += "* Civico\n";
				if(cap == "" || isNaN(cap))
					messaggio_utente += "* Cap\n";	
				if(comune == "Ville (auto)" || comune == "Ville introuvable!" || comune == "Seleziona comune" || comune == "" || comune == "Comune*")	
					messaggio_utente += "* Comune\n";						
				if(operatore == "Op.*")
					messaggio_utente += "* Operatore\n";				
				if(cellulare == "" || isNaN(cellulare))
					messaggio_utente += "* Cellulare\n";	
				/*if(isNaN(tel_fisso))
					messaggio_utente += "* Telefono fisso\n";*/
					
				if(lunghezza_messaggio != messaggio_utente.length)
				{
					alert(messaggio_utente);
				}
                else 
                {
					$("img#loader_gif").css("visibility", "visible");
					
					var sesso_invio = "f";
					if(sesso == "Maschio")
						sesso_invio = "m";
					
					
					//popola i campi nascosti per correo direct
					$("#sesso_cor").append("<option value='"+sesso_invio+"' selected></option>");
					$("#cap_cor").val(cap);
					$("#comune_cor").val(comune);
					$("#aaaa_cor").append("<option value='"+anno+"' selected></option>");
					$("#mm_cor").append("<option value='"+mese+"' selected></option>");
					$("#gg_cor").append("<option value='"+giorno+"' selected></option>");
					$("#operatore_cor").append("<option value='"+operatore+"' selected></option>");
					$("#cellulare_cor").val(cellulare);
					$("#via_cor").append("<option value='"+via+"' selected></option>");
					$("#indirizzo_cor").val(indirizzo);
					$("#civico_cor").val(civico);
					vai_b();
					/*$("#sesso_cor").val(sesso_invio);
					$("#cap_cor").val(cap);
					$("#comune_cor").val(comune);
					$("#aaaa_cor").val(anno);
					$("#mm_cor").val(mese);
					$("#gg_cor").val(giorno);
					$("#operatore_cor").val(operatore);
					$("#cellulare_cor").val(cellulare);
					$("#via_cor").val(via);
					$("#indirizzo_cor").val(indirizzo);
					$("#civico_cor").val(civico);*/
					
					
					/*
					$.post( "engine/send_data.php", { data_access: true, position: position, nome: nome, cognome: cognome, email: email, data_nascita: anno+"-"+mese+"-"+giorno, sesso: sesso_invio, indirizzo: via+" "+indirizzo+ " "+civico, cap: cap, comune: comune, provincia: provincia, operatore: operatore, cellulare:cellulare, tel_fisso:tel_fisso, ref:ref  })
						.done(function(data){
							var data_obtain = jQuery.parseJSON(data);*/
                           
							
							/*
							coregs system save manually (there is no OnSubmit so it is manually
							CDCR.checksave_allcoregs();
							coregs system does not make the submit, delegates it to our function
							CDCR.flowcontrol.delegate_submit = true;
							
					}).fail(function(data) {
						console.log('fail!');
						console.log(data.getAllResponseHeaders());
						console.log('status=' + data.status);              
						console.log('data.responseText=' + data.responseText);
						console.log(data);
					});*/
				}
				break;
		}
	});
}

$(document).ready(function(){
	
		/*$(window).resize(function(){
			console.log("ciao");
			$('*[style*=-moz-transform:translate3d(0, 0, 0)').css('-moz-transform', '');
			$('*[style*=-webkit-transform:translate3d(0, 0, 0)').css('-webkit-transform', '');
			$('*[style*=-o-transform:translate3d(0, 0, 0)').css('-o-transform', '');
			$('*[style*=-ms-transform:translate3d(0, 0, 0)').css('-ms-transform', '');
		}).trigger();	*/
		
		window.resizeTo($(window).width(), $(window).height())
	
	
	start();	

	step();
	

	
	window.fbAsyncInit = function() {
		FB.init({appId: '1446295998937934', status: true, cookie: true,
		xfbml: true});
	};
	
	(function() {
		var e = document.createElement('script'); e.async = true;
		e.src = document.location.protocol +
		'//connect.facebook.net/en_US/all.js';
		document.getElementById('fb-root').appendChild(e);
	}());
				
	
	$(window).load(function() {
		
		/*var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		var is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
		
			
		var prefix = (is_firefox) ? 'moz' : (is_safari || is_chrome) ? 'webkit' : (is_opera) ? 'o' : 'ms';	*/		
			

	});
	
	

});




