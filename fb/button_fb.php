<?php
	if (!isset($facebook_id)){
?>
	<script>
	
	function postToFeed(){
    
		var frase = $("div#frase_final").text();
		/*var borsa = $("img.borsaImg").attr("src");*/
		
		var viaggio_url = "http://img.webnation.it/concorso_turista_curioso/"+$("div.menu").attr("id")+"_select.jpg";
		
		//alert(borsa);
		
        // calling the API ...
        var obj = {
          method: 'feed',
          link: 'http://localhost:8080/landings/inviaggio_col_turista/',
          picture: viaggio_url,
          name: 'Scegli e Vinci il Viaggio dei tuoi sogni',
          caption: 'La mia scelta? '+$("div.menu").attr("id")+'! E nella mia valigia metto...',
          description: frase
        };

        function callback(response) {
          //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }

        FB.ui(obj, callback);
      
	
	 // Load the SDK asynchronously
	 (function (d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) { return; }
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js";
	  fjs.parentNode.insertBefore(js, fjs);
	 } (document, 'script', 'facebook-jssdk'));
	
	}
	
	function SendToFacebook(da){
	
	
	 window.fbAsyncInit = function () {
	 
	 
	 
	  // init the FB JS SDK
				FB.init({
					appId   : '1446295998937934',
					oauth   : true,
					status  : true, // check login status
					cookie  : true, // enable cookies to allow the server to access the session
					xfbml   : true // parse XFBML
	  });

		var facebook = FB;

	  checkLoginStatus(facebook, da);



	 };
	 
	 
	
	 
	 
	 // Load the SDK asynchronously
	 (function (d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) { return; }
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js";
	  fjs.parentNode.insertBefore(js, fjs);
	 } (document, 'script', 'facebook-jssdk'));
	 
	}
	
	function login_button_fb(da){
		if (da === 'amici' || da ==='tasto_login'){
			  FB.login(function(response) {

						if (response.authResponse) {
						
						if(da === 'amici'){
							$("div#footer").after("<div id='amici_fb' ></div>");
							
							//invitaAmici(response);
							
							
								
							FB.ui({method: "apprequests",message: "Iscriviti al concorso In Viaggio Col Turista!!" });
						
						}else{
							inserisciDati(response);
							
							
						}
						} else {
						
							
							
							
						}
					}, {
						scope: 'publish_stream,email,user_birthday'
					});
					
					 // Load the SDK asynchronously
			(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js";
			fjs.parentNode.insertBefore(js, fjs);
			} (document, 'script', 'facebook-jssdk'));
		}		
	}
	

			  
			  

			
			  
			function checkLoginStatus(facebook, da) {
				
				facebook.getLoginStatus(function (response) {
					if (response.status === "connected") {
						// utente connesso
						if (response.authResponse){
							inserisciDati(response);
							
						} else {
						//user hit cancel button
						

						}
						return true;
					} else {
						login_button_fb(da);
						console.log('User did not fully authorize.');
						return false;
					}
					//imposto il testo della pagina home
				}, true);
			}
			  
			 function inserisciDati(response){
				//console.log('Welcome!  Fetching your information.... ');
				//console.log(response); // dump complete info
				access_token = response.authResponse.accessToken; //get access token
				user_id = response.authResponse.userID; //get FB UID

				
				
				FB.api('/me', function(response) {
					user_email = response.email; //get user email
					//console.log(response);
					
					var nomeForm = response.first_name;
					var cognomeForm = response.last_name;
					var mailForm = response.email;
					
					$("div#facebook-login").slideUp();
					
					
					//var dataNascita = response.birthday.split("/");
					var sessoForm = "s"
					if(response.gender == "male")
						sessoForm = "m";
					
					$("input#datanascita_fb").val(response.birthday);
					$("input#sesso_fb").val(sessoForm); 
					
					$("input[name=nome]").val(nomeForm).attr("disabled", "disabled").css({"color": "#b4b4b4", "-webkit-text-fill-color": "#b4b4b4", "-webkit-opacity": "1", "background": "#3D414D"});
					$("input[name=cognome]").val(cognomeForm).attr("disabled", "disabled").css({"color": "#b4b4b4", "-webkit-text-fill-color": "#b4b4b4", "-webkit-opacity": "1", "background": "#3D414D"});
					$("input[name=email]").val(mailForm).attr("disabled", "disabled").css({"color": "#b4b4b4", "-webkit-text-fill-color": "#b4b4b4", "-webkit-opacity": "1", "background": "#3D414D"});
					
					
					
					
					
			  // you can store this data into your database             
				});			 
			 }
			 
			function invitaAmici(response){
				FB.getLoginStatus(function(response){
					console.log(response);
				
					if (response.status === "connected"){
						access_token = response.authResponse.accessToken; //get access token
						user_id = response.authResponse.userID; //get FB UID
				
						FB.api('/me/friends', function(response) {
							//console.log(response);
							//alert(response.data[0].name); recupera il nome del primo della lista
							
							var lunghezza = response.data.length;
							var res = "";
							
							$("div#amici_fb").append("<div class='container_amici'></div>");
							
							
							// recupera le foto e i nomi dalla lista amici e li salva nel popup
							for(x in response.data){
								if(x < lunghezza-1)
									res += response.data[x].id+",";
								else
									res += response.data[x].id;
									
								$("div.container_amici").append(
									"<div class=\"amico\"><img src=\"https://graph.facebook.com/"+response.data[x].id+"/picture\" /><input type=\"checkbox\" class=\"group\" id=\""+response.data[x].id+"\" value=\""+response.data[x].id+"\" />"+response.data[x].name+"</div>"
								)
							}

							$("div#amici_fb").append("<div class='clear spacer'></div><div class='cinquanta'>+ 50</div><div class='inviaRichiestaAmici'>Invita</div><div class='clear spacer'></div>");
							
							buttonInvita(res, response);
							
							$("div#amici_fb").fadeIn();
							
							$("div.amico").click(function () {
							   $(this).toggleClass("amico_selected");
							   
							   $("input", this).prop("checked", !$("input", this).prop("checked"))
							});
							
							$("div.cinquanta").click(function(){
								var count = 0;
							
								$(".group").each(function () {
										//da sostituire con 50
										if(count<50){
											$(this).attr("checked", "checked").parent().addClass("amico_selected");
										}
									count++;
								});
							});
							
							
						});
					} else 
						alert("non sei loggato");
				});
			}
			
			/*
			$("input[type=checkbox]").click(function(){
				if($("input[type=checkbox]:checked").length == 50)
					$("input[type=checkbox]").each(function () {
						$("input[type=checkbox]").attr("disabled");
					});
			})
			*/
			
			
			
			
			
			function buttonInvita(res, response){				
				
					

				$("div.inviaRichiestaAmici").click(function(){
					var count = 0;
					var selezionati = $(".group:checked").length;	
					
					var res = "";
					//alert(selezionati);
					var newStr = "";
					
					$(".group:checked").each(function () {
						if(count<selezionati)
							res += $(this).val()+",";
						else
							res += $(this).val();
						count++;
						
						newStr = res.substring(0, res.length-1);
					});							
						
					if(selezionati != 0)
						sendrequest(newStr, response);
					else
						alert("Seleziona almeno un amico");

				});
			}
			  
			function sendrequest(utenti, response){
				//alert(utenti);
				FB.ui({method: "apprequests",message: "Iscriviti al concorso In Viaggio Col Turista!!",to:utenti }, requestCallback);
			}  
			  
			function requestCallback(callbackresponse){
				if(callbackresponse && callbackresponse.request){
					//alert("hai invitato gli amici");
					//console.log(callbackresponse.to);
					for(x in callbackresponse.to){
						$("#"+callbackresponse.to[x]).parent().fadeOut(function(){
							$(this).remove();
						});

					}
					
				}else{
					//alert("hai chiuso il bottone");
					//$(".group:checked").removeAttr("checked");
					//console.log(callbackresponse.request);
					
					
				}
			}
			  
			function fb_login(){
				FB.login(function(response) {

					if (response.authResponse) {
						inserisciDati(response);

					} else {
						//user hit cancel button
						//console.log('User cancelled login or did not fully authorize.');

					}
				}, {
					scope: 'publish_stream,email,user_birthday'
				});
			}

	</script>
	<?php 
		echo '<div id="facebook-login" onclick="login_button_fb(\'tasto_login\')">CONNEXION AVEC <span class="bold">FACEBOOK</span></div>';
	}
	
?>	
  