<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta http-equiv="Cache-control" content="public">	

	<title>Participez pour gagner un voyage avec Le Globetrotteur</title>
	<meta name="description" content="Il miglior viaggio al prezzo pi� basso, i voli pi� economici e le offerte negli hotel pi� incredibili! - www.turistacurioso.it Non ci credi ancora che possiamo trovarti il miglior viaggio al prezzo pi� basso, i voli pi� economici e le offerte negli hotel pi� incredibili? Ti presentiamo IL TURISTA CURIOSO, che curioser� e trover� per conto tuo i viaggi da non perdere, i maggiori sconti e le offerte pi� incredibili su voli, negli hotel, in crociera, per i tuoi weekend, nelle spa, in montagna, per i tuoi viaggi avventurosi ed i grandi viaggi. Tutto quello che puoi immaginare e� l�inimmaginabile direttamente dalla lente del nostro curiosone." />
	<meta name="keywords" content="Turista curioso, voli,  hotel, crociera, weekend, spa, montagna, viaggi avventurosi, grandi viaggi,voli economici, sconti" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

	<link href="css/style.css" rel="stylesheet" media="all">
	<link href="css/css.css" rel="stylesheet" media="all">
        <script src="js/jquery.min.js"></script>
        <script src="js/script.js"></script>
        <script src="js/jquery-csv.js"></script>
	<script src="js/jquery.selectbox-0.2.min.js"></script>	
	<script language="javascript" src="http://registro.correodirect.com/getcode.php?web_id=16149" id="cdcrjs"></script>
	<link href="css/jquery.selectbox.min.css" rel="stylesheet" media="all">
	<link href='http://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' type='text/css'>	

</head>

<body>
	<?php include_once("analyticstracking.php") ?>
	
<!-- FORM CD -->
	<form name="INTEGRATION_ConfigForm">
	<input type="hidden" name="ClientSubmitButton" value="invia">
	<input type="hidden" name="FormName" value="regform">
	<input type="hidden" name="OrderPrint" value="personal"> <!-- all | personal-categories-legal -->
	<input type="hidden" name="Language" value="IT">
	<input type="hidden" name="Affiliate" value="16149">
	</form>

	<form name="INTEGRATION_Personal">
	<input type="hidden" name="1" value="ItemperRow">
	</form>

	<form name="INTEGRATION_Categories">
	<input type="hidden" name="0" value="ItemperRow">
	</form>
	<form name="INTEGRATION_Data">
		<input type="hidden" name="email" value="email">
		<input type="hidden" name="nome" value="Fname">
		<input type="hidden" name="cognome" value="Lname">
	    <input type="hidden" name="sesso" value="Sex">
	    <input type="hidden" name="cap" value="ZipCode">
	    <input type="hidden" name="comune" value="City">

	    <input type="hidden" name="aaaa" value="BirthYear">
	    <input type="hidden" name="mm" value="BirthMonth">
	    <input type="hidden" name="gg" value="BirthDay">

	    <input type="hidden" name="operatore" value="OperatorMobile">
	    <input type="hidden" name="cellulare" value="Phone">

	    <input type="hidden" name="via" value="TypeVia">
	    <input type="hidden" name="indirizzo" value="address">
	    <input type="hidden" name="civico" value="NumberAddress">
        </form>
	<form name="INTEGRATION_Styles">
	<input type="hidden" name="100%" value="TableWidth"> <!--Tamano de las tablas-->
	<input type="hidden" name="0" value="TableCellpadding"> <!--Tamano del Cellpadding-->
	<input type="hidden" name="10" value="TableCellspacing"> <!--Nombre del Cellspacing-->
	<input type="hidden" name="0" value="TableBorder"> <!--Borde de la tabla-->
	<input type="hidden" name="eeeee1" value="TableBgcolor"> <!--Color de la tabla-->
	<input type="hidden" name="center" value="TableAlign"> <!--Posicion de las tablas-->
	<input type="hidden" name="Arial, Helvetica, sans-serif"
	value="TextFace"> <!--Formato del texto-->
	<input type="hidden" name="1" value="TextSize"> <!--Tamano del texto-->
	<input type="hidden" name="000000" value="TextColor"> <!--Color del texto-->
	<input type="hidden" name="Arial, Helvetica, sans-serif"
	value="TitleFace"> <!--Formato de los titulos-->
	<input type="hidden" name="4" value="TitleSize"> <!--Tamano de los titulos-->
	<input type="hidden" name="156568" value="TitleColor"> <!--Color de los titulos-->
	<input type="hidden" name="center" value="TitleAlign"> <!--Posicion de los titulos-->
	<input type="hidden" name="450" value="TextboxWidth"> <!--Tamano de la caja de texto-->
	</form>
<!-- FIN FORM CD -->



	<div id="logo"  class="superior"></div>
	
	<div id="central_title" class="superior"></div>
	<div id="right_title" class="superior"></div>
	
	<div id="londra" class="menu"><div class="overlay"></div><div class="select"></div></div>
	<div id="newyork" class="menu"><div class="overlay"></div><div class="select"></div></div>
	<div id="messico" class="menu"><div class="overlay"></div><div class="select"></div></div>
	<div id="mykonos" class="menu"><div class="overlay"></div><div class="select"></div></div>
	
	<form id="contact-form" name="regform">
	
		<div style="display:none">
			<select name="sesso" id="sesso_cor"></select>
			<input type="text" name="cap" id="cap_cor">
			<input type="text" name="comune" id="comune_cor">
			<select name="aaaa" id="aaaa_cor"></select>
			<select name="mm" id="mm_cor"></select>
			<select name="gg" id="gg_cor"></select>
			<select name="operatore" id="operatore_cor"></select>
			<input type="text" name="cellulare" id="cellulare_cor">
			<select name="via" id="via_cor"></select>
			<input type="text" name="indirizzo" id="indirizzo_cor">
			<input type="text" name="civico" id="civico_cor">		
		</div>
	
		<div id="form"> 
			<div class="box1">
				<div></div>
				<div>
					<p class="left" onclick="change_dest('left')"></p>
					CHANGER DE DESTINATION
					<p class="right" onclick="change_dest('right')"></p>
				</div>
				<div> 
				</div>
			</div>
			<div class="box2">
				ETAPE <span>2</span>
				<div id="passo"></div>
				<div id="adsense">
					<img src="concorso_turista_curioso/loader_ad.gif" title="Caricamento" alt="Caricamento" />
                                </div>
			</div>
                        
			<div class="box3">
				<div class="top">
					PARTEZ <span class="white">AVEC LE GLOBETROTTER</span>
					<?php include ("fb/button_fb.php"); ?>
					<input type="text" name="nome" id="nome" placeholder="Prénom *" class="icon_a">
					<input type="text" name="cognome" id="cognome" placeholder="Nom *" class="icon_a">
					<input type="text" name="email" id="email" placeholder="Email *" class="icon_b">
					<label class="nb">* champs obligatoires</label>
					<div class="clear"></div>
				</div>
				<div class="bottom">
					<div class="privacy_button">
						<input type="checkbox" name="privacya" value="si">						
					</div>
					<div class="privacy_txt">
					J'ai lu et j'accepte le règlement du jeu concours ainsi que de recevoir les offres du GlobeTrotteur,
                                        des sponsors de l'opération ainsi que celles de leurs partenaires. 
                                        Pour jouer sans recevoir les bons plans des partenaires, je clique ici
					</div>
					<div class="clear"></div>
					<div id="step">
						<img src="http://46.255.163.33/partez_avec_leglobetrotteur/concorso_turista_curioso/ajax-loader.gif" id="loader_gif" alt="caricamento, attendi qualche secondo" title="caricamento, attendi qualche secondo" />
						ETAPE SUIVANTE
					</div>
				</div>
			</div>	
		</div>
		<input type="hidden" id="position" value="a">
		<input type="hidden" id="selection" value="">
		<input type="hidden" id="ref" value="<?php echo REF; ?>">
		<input type="hidden" id="mail_temp">
		<input type="hidden" id="nome_temp">
		<input type="hidden" id="cognome_temp">
		<input type="hidden" id="sesso_fb">
		<input type="hidden" id="datanascita_fb">
		

	
		
	</form>
	
	<div id="footer">
		<div id="copy"> 
			Copyright &copy; 2006-2014 Antevenio Publicité tous droits réservés. Une réalisation de Antevenio Publicité 32 rue de Londres – 75009 Paris – RCS Paris B 508 671 682
		</div>
		<div id="facebook" onclick="condividiHome()">
			Partager sur Facebook
		</div>
	</div>
	
	<!-- FACEBOOK API ELEMENT -->
	<div id="fb-root"></div> 
	
	
	<div id="adsense_mobile_fisso">
		<iframe src='addsense/passo_fine_footer_mob.html' frameborder='0'></iframe>
	</div>	
	
	

</body>
</html>