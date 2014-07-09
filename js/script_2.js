var globe_image_path = "http://img.webnation.it/concorso_turista_curioso/";

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
			$("div#footer").css({"background-image": "none", "border": "none"}).appendTo("div#form");
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

		}
		
		change_dest("init",id);

		
		/* animazione di apertura */
		$("div.menu:not("+id+")").stop(true, false).animate({ width: '0%' }, 380);
		$(id).stop(true, false).animate({ width: '100%' }, 380, function(){	
					$("div#central_title").hide();
		//$("div#central_title").addClass('animated fadeOut');

		$("div#facebook").remove();
		
		var pageurl = "form.php";
		
		//cambia l'url del browser in 'pageurl'
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
		'“New York est un modèle parfait d\'une ville, pas le modèle d\'une ville parfaite.” <span class="autore">(Lewis Mumford)</span><div class="clear spacer"></div>“Non c\'è niente come l\'autunno a New York: non sono solo le foglie a cambiare, qualcosa nell\'aria porta alla luce i veri colori di ognuno.” <span class="autore">(gossip girl)</span><div class="clear spacer"></div>“Qui siamo a New York: se ce la fai qui, ce la puoi fare ovunque.” <span class="autore">(Lawrence Block)</span><div class="clear"></div>“A New York si ha l\'impressione che le cose avvengano più velocemente che altrove.” <span class="autore">(dal film Qualcosa è cambiato)</span><div class="clear"></div>',
		'“Non credo che si possa trovare niente che meriti il nome di società fuori di Londra.” <span class="autore">(William Hazlitt)</span><div class="clear spacer"></div>“Quando un uomo è stanco di Londra, è stanco della vita, perché a Londra si trova tutto ciò che la vita può offrire.” <span class="autore">(Samuel Johnson)</span><div class="clear"></div>',
		'“Il vento di Mykonos sfiora gli occhi dei golfi, le cupole celesti e i muri bianchi poi addenta i paradisi senza pazienza sforma la sabbia spinge l\'acqua verde sui miti delle Cicladi” <span class="autore">(dalla poesia "Il vento di Mykonos")</span><div class="clear"></div>',
		'“Il vero viaggio di scoperta non consiste nel cercare nuove terre, ma nell\'avere nuovi occhi.” <span class="autore">(Marcel Proust)</span><div class="clear spacer"></div>“Il viaggiatore, quello saggio, impara a non cercare di ripetere i successi ma a trovarne altri in nuovi luoghi.” <span class="autore">(Paul Fussell)</span><div class="clear spacer"></div>“Se è questo il Messico, sono contenta di essere venuta, sono contenta di fermarmi.” <span class="autore">(Nancy Hartwell)</span><div class="clear"></div>'
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
	}else{
		var posizione = destinazioni.indexOf($(id_get).css("background-image"));
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
		link: ' http://localhost:8080/landings/inviaggio_col_turista/',
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
	$("input#comune").val("Cap Inesistente!").css("color", "#fff"); 
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
					url:"comuni/trova_comune_new.php",
					dataType:"json",
					data:{cap:e},
					success:function(e){
						if(e.error===false){
							$("#aggiunta").html(e.msg).show("fast");
							if(e.focus=="0"){
								$("#comune").focus();vai();
							}else{
								$("#comune").next("input").focus();
							}
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
	window.scrollTo(0, 0);
	/*$("#adsense iframe").remove(function(){
		$("#adsense img").show();
	});
	
	$("<iframe src='addsense/passo3.html' frameborder='0'></iframe>").load(function(){
		$("#adsense img").hide()
	}).appendTo("div#adsense")*/
	
	
	$("#adsense iframe").attr("src", "addsense/passo3.html");
	/* passa alla posizione b */
	$("#position").attr("value", "b");
	
	$(".box2 span").text("3");
	
	$(".box2 div#passo").css("background-position", "39px -49px");
	$(".privacy_button, .privacy_txt").hide();
	$("div#step").css("margin-top", "0");
	$("div.top").html("<img src='"+globe_image_path+"la valigia del turista perfetto.png' class='turista_perfetto' /><div class='tre_oggetti'>Scrivi <span>3 cose a cui non potresti mai rinunciare</span> nella tua vacanza perfetta!</div><textarea class='frase' maxlength='140'></textarea><label class='nb'>* N.B Massimo 140 caratteri</label><div class='clear'></div>");
	
	if($(document).width() < 641){
		$("textarea.frase").css({"width": "90%", "height": "130px"});
		$("div.tre_oggetti").css({"width": "88%"});
		$("img.turista_perfetto").css({"margin-top": "-14px", "width": "150px"});
		$("#adsense iframe").attr("src", "addsense/passo3_mob.html");
	}
	
	
}

function vai_c(){
	/*$("div#step").after("<script language=\"javascript\" src=\"http://registro.correodirect.com/getcode.php?web_id=15834\" id=\"cdcrjs\"></script><input  type=\"submit\" class=\"buttonStep\" id=\"step\" />");
	$("div#step").remove();*/

	// coregs system is initialized before going step4
	// it needs to be initialized here manually because it is ajax, and doesnt fire automatically as usual
	CDCR.events.document.OnLoad();
	cdcr_AffiliateGuaranteesThatUserAcceptedPrivacyPolicyOfAllSponsors(1);

	window.scrollTo(0, 0);
	
	$("#adsense iframe").attr("src", "addsense/passo4.html");

	var data_fb = $("input#datanascita_fb").val().split("/");
	var selected = "";
	
	var giorni_select = "";
	for(var i=1; i<32; i++){
		if(data_fb[0] == i){
			selected = "selected";
		}
		
		if(i<10)
			giorni_select += "<option "+selected+" value='0"+i+"'>0"+i+"</option>";
		else
			giorni_select += "<option "+selected+" value='"+i+"'>"+i+"</option>";
	}
	
	var mesi_select = "";
	for(var i=1; i<13; i++){
		if(data_fb[1] == i){
			selected = "selected";
		}
		
		if(i<10)
			mesi_select += "<option "+selected+" value='0"+i+"'>0"+i+"</option>";		
		else
			mesi_select += "<option "+selected+" value='"+i+"'>"+i+"</option>";
	}
	
	var anni_select = "";
	for(var i=1995; i>1915; i--){
		if(data_fb[2] == i){
			selected = "selected";
		}		
		
		anni_select += "<option "+selected+" value='"+i+"'>"+i+"</option>";
	}
	
	var sesso_fb = $("input#sesso_fb").val();
	var sex_select = "";
	if(sesso_fb != ''){
		if(sesso_fb == "m")
			sex_select = "<option selected value='m'>Maschio</option><option value='f'>Femmina</option>";
		else
			sex_select = "<option value='m'>Maschio</option><option selected value='f'>Femmina</option>";
	}else
		sex_select = "<option value='m'>Maschio</option><option value='f'>Femmina</option>";
	
	$("#position").attr("value", "c");
	$("div.box2 span").html("FINALE");	
	$("div#step").html("<img src='"+globe_image_path+"ajax-loader.gif' id='loader_gif' alt='caricamento, attendi qualche secondo' title='caricamento, attendi qualche secondo' /> PARTECIPA");
	$("label.nb").css({"margin-right": "32px", "font-weight": "500px", "font-size": "15px"});
	$("div.privacy_txt").html("Desidero partecipare al concorso di cui ho acquisito e accetto integralmente <a href='regolamento_inviaggio_col_turista.pdf' target='_blank'>il regolamento</a>. Richiedo contestualmente l'iscrizione ai servizi di postadiretta.it dando il consenso ai trattamento per finalità di Tipo B, descritte <a href='regolamento_inviaggio_col_turista.pdf' target='_blank'>nell'informativa privacy</a> che ho acquisito, in quanto condizione necessaria per la partecipazione.").css({"width": "336px", "line-height": "16px", "margin-top": "-10px", "margin-bottom": "15px"}).show();			
	$(".box2 div#passo").css("background-position", "39px -100px");
	$("div.top").html("<span class='white'>COMPILA E </span>PARTI!<div class='clear spacer'></div><div class='clear spacer'></div><div class='clear spacer'></div><input type='text' name='fisso' id='fisso' placeholder='Telefono Fisso' maxlength=12><label class='nb'>* campi obbligatori</label><div class='clear'></div>");
	$("div#step").css("margin-top", "0");	
	
	if(data_fb != '')
		$("select#gg, select#mm, select#aaaa").attr('disabled', true);
	
	if(sesso_fb != '')
		$("select#sesso").attr("disabled", true);	
	
	
	/* TRASFORMAZIONE DELLE SELECT CON JQUERY */
	$("select").each(function(){
		$(this).selectbox().next().css({
			"width": $(this).css("width"),
			"margin-left": $(this).css("margin-left"),
			"float": $(this).css("float")
		});
		
		//console.log($(this).attr("disabled"));
		
		if($(this).attr("disabled") == "disabled")
			$(this).selectbox("disable");
	});
	
	if($(document).width() < 641){
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
		$("input#cellulare").css({"margin-left": "2%", "width": "50%"});

		$("input#fisso").css({"margin-left": "6%", "width": "86%"});

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

function vai_finale(frase, viaggio){

	window.scrollTo(0, 0);

	$("div.top").css({"background-image": "url('"+globe_image_path+"3c3e4b.png')", "border": "none"});
	
	if($(document).width() > 640){
		$("div#right_title").next().css("background-image", "url('"+globe_image_path+viaggio+".jpg')");

		//alert("Step finale: da inserire l'ultimo step con il condividi su facebook");
		$(".box1 div:first-child + div").html("LA TUA SCELTA").css("background-image", "none");
		
		
		$("div#form .box2")
			.css("margin-top", "40px")
			.contents()
			.filter(function() {
				return this.nodeType == 3; //Node.TEXT_NODE
			}).remove();
		$("div#form .box2 span").remove();
		$(".box2 div#passo").remove();
		
		
		$(".box2 div#adsense").css("float", "left").after("<div id='adsense2'></div>");
		
		$("div.top").css("max-width", "641px").html("<div id='title_frase_final'>Frase scelta:</div><div id='frase_final'><span>&ldquo; </span>"+frase+"<span> &rdquo;</span></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div.bottom").css("padding", "10px 0 0").html("<div class='clear spacer'></div><div id='facebook-cond' onclick=\"postToFeed(); return false;\">CONDIVIDI SU <span class='bold'>FACEBOOK</span></div><div id='facebook-inv' onclick=\"login_button_fb('amici')\">INVITA I TUOI AMICI</div><div class='clear spacer'></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div#form .box3").remove();
		
		$("#adsense iframe").attr("src", "addsense/passo_fine_sx.html");
		$("div#adsense2").html("<iframe src='addsense/passo_fine_dx.html' frameborder='0'></iframe>");	
	
	}else{
		$("div.top").css("max-width", "641px").html("<div id='title_frase_final'>Frase scelta:</div><div id='frase_final'><span>&ldquo; </span>"+frase+"<span> &rdquo;</span></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
		$("div.bottom").css("padding", "10px 0 0").html("<div class='clear spacer'></div><div id='facebook-cond' onclick=\"postToFeed(); return false;\">CONDIVIDI SU <span class='bold'>FACEBOOK</span></div><div id='facebook-inv' onclick=\"login_button_fb('amici')\">INVITA I TUOI AMICI</div><div class='clear spacer'></div><div class='clear spacer'></div>").insertBefore(".box2 div#adsense");
		
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
				var messaggio_utente = "I campi di seguito non sono stati compilati correttamente\n";
				var lunghezza_messaggio = messaggio_utente.length;
				if(nome == "" || nome.length < 3 || !isNaN(nome))
					messaggio_utente += "* Nome\n";
				if(cognome == "" || cognome.length < 3 || !isNaN(cognome))
					messaggio_utente += "* Cognome\n";				
				if(email == "" || !is_mail(email))
					messaggio_utente += "* Email\n";
				if(privacy == "" || privacy == null || privacy == "no")
					messaggio_utente += "* Devi accettare l'informativa sulla privacy\n";					
				if(lunghezza_messaggio != messaggio_utente.length){
					alert(messaggio_utente);
					return false;
				}else{
					$("img#loader_gif").css("visibility", "visible");

					$("input#mail_temp").val(email);
					$("input#nome_temp").val(nome);
					$("input#cognome_temp").val(cognome);
					
					$.post( "engine/send_data.php", { data_access: true, position: position, nome: nome, cognome: cognome, email: email, ref:ref })
						.done(function(data){
							//alert(data);
							if(data != ""){
								var data_obtain = jQuery.parseJSON(data);
								vai_finale(data_obtain.frase, data_obtain.viaggio);
							}else
								vai_b();
								$("img#loader_gif").css("visibility", "hidden");
					});
				}
				break;
			case "b": 
				var frase = $("textarea.frase").val();
				var viaggio = $("div#form").parent().attr("id");
				
				if(!frase){
					alert("Devi scrivere una frase!");
					return false;
				}
				if(frase.length<5){
					alert("La frase è troppo corta!");
					return false;
				}
				
				$("img#loader_gif").css("visibility", "visible");
				
				$.post( "engine/send_data.php", { data_access: true, position: position, frase: frase, viaggio: viaggio })
					.done(function(){
						vai_c();	
						$("img#loader_gif").css("visibility", "hidden");
				});				
				
				
				break;
			case "c": 
				var messaggio_utente = "I campi di seguito non sono stati compilati correttamente\n";
				var lunghezza_messaggio = messaggio_utente.length;
			
				var email = $("input#mail_temp").val();
				var nome = $("input#nome_temp").val();
				var cognome = $("input#cognome_temp").val();
				
				$("input#mail_temp").val("");				
				$("input#nome_temp").val("");
				$("input#cognome_temp").val("");
				
				/*var giorno = $("#sbSelector_"+$("select#gg").attr("sb")).text();
				var mese = $("#sbSelector_"+$("select#mm").attr("sb")).text();
				var anno = $("#sbSelector_"+$("select#aaaa").attr("sb")).text();		
				var sesso = $("#sbSelector_"+$("select#sesso").attr("sb")).text();
				var via = $("#sbSelector_"+$("select#via").attr("sb")).text();*/
				
				var giorno = $("select#gg option:selected").val();
				var mese = $("select#mm option:selected").val();
				var anno = $("select#aaaa option:selected").val();
				var sesso = $("select#sesso option:selected").val();
				var via = $("select#via option:selected").val();
				
				var indirizzo = $("input#indirizzo").val();
				var civico = $("input#civico").val();
				var cap = $("#cap").val();
				var comune = "";
				if($("select#comune").css("display") == "none"){
					//comune = $("#sbSelector_"+$("select#comune").attr("sb")).text();
					comune = $("select#comune option:selected").val();
				}else{
					comune = $("input#comune").val();
				}
				var provincia = $("input#prov").val();
				//var operatore = $("#sbSelector_"+$("select#operatore").attr("sb")).text();
				var operatore = $("select#operatore option:selected").val();
				var cellulare = $("input#cellulare").val();
				var tel_fisso = $("input#fisso").val();
				var ref = $("input#ref").val();
				
				if(giorno == "")
					messaggio_utente += "* Giorno\n";
				if(mese == "")
					messaggio_utente += "* Mese\n";		
				if(anno == "")
					messaggio_utente += "* Anno\n";		
				if(sesso == "")
					messaggio_utente += "* Sesso\n";					
				if(indirizzo == "")
					messaggio_utente += "* Indirizzo\n";	
				if(civico == "")
					messaggio_utente += "* Civico\n";
				
				if(comune == "Comune (auto)" || comune == "Cap Inesistente!" || comune == "Seleziona comune" || comune == "" || comune == "Comune*")	
					messaggio_utente += "* Comune\n";						
				if(operatore == "")
					messaggio_utente += "* Operatore\n";				
				
				if(isNaN(tel_fisso))
					messaggio_utente += "* Telefono fisso\n";
					
				if(lunghezza_messaggio != messaggio_utente.length){
					alert(messaggio_utente)
				}else{
					$("img#loader_gif").css("visibility", "visible");
					
					// coregs system save manually (there is no OnSubmit so it is manually
					CDCR.checksave_allcoregs();
					// coregs system does not make the submit, delegates it to our function
					CDCR.flowcontrol.delegate_submit = true;
					
					$.post( "engine/send_data.php", { data_access: true, position: position, nome: nome, cognome: cognome, email: email, data_nascita: anno+"-"+mese+"-"+giorno, sesso: sesso, indirizzo: via+" "+indirizzo+ " "+civico, cap: cap, comune: comune, provincia: provincia, operatore: operatore, cellulare:cellulare, tel_fisso:tel_fisso, ref:ref  })
						.done(function(data){
							var data_obtain = jQuery.parseJSON(data);
							vai_finale(data_obtain.frase, data_obtain.viaggio);
							
							$("img#loader_gif").css("visibility", "hidden");
							//alert(data);
							
							alert($("input[name=sesso]").val());
							$("form#contact-form").submit();
							
					});						//alert(giorno+"\n"+mese+"\n"+anno+"\n"+sesso+"\n"+via+"\n"+indirizzo+"\n"+civico+"\n"+cap+"\n"+comune+"\n"+operatore+"\n"+cellulare+"\n"+tel_fisso);
				}
				break;
		}
	});
}

$(document).ready(function(){
	
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
		/*$("div.menu").show(1000);*/
		//setTimeout("start()", 1500);

	});
	
});




