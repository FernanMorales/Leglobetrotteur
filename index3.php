<?php	
	require 'fb/facebook.php';
	require 'engine/Mobile_Detect.php';
	$detect = new Mobile_Detect;
	
	if(isset($_GET['ref'])){
		if($detect->isMobile()){
			define("REF", "mobile-".$_GET['ref']);
		}else{
			define("REF", $_GET['ref']);
		}
	}else{
		$url = "$_SERVER[HTTP_REFERER]";
		function get_domain($url){
			$pieces = parse_url($url);
			$domain = isset($pieces['host']) ? $pieces['host'] : '';
			if (preg_match('/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i', $domain, $regs)) {
				return $regs['domain'];
			}
			return false;
		}
		
		if(get_domain($url) == '')
			define("REF", 'sito');
		else
			define("REF", get_domain($url)); 	
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	
	<meta http-equiv="Cache-control" content="public">	

	<title>Concorso Tre Cose In Valigia di Turista Curioso</title>
	<meta name="description" content="Il miglior viaggio al prezzo più basso, i voli più economici e le offerte negli hotel più incredibili! - www.turistacurioso.it Non ci credi ancora che possiamo trovarti il miglior viaggio al prezzo più basso, i voli più economici e le offerte negli hotel più incredibili? Ti presentiamo IL TURISTA CURIOSO, che curioserà e troverà per conto tuo i viaggi da non perdere, i maggiori sconti e le offerte più incredibili su voli, negli hotel, in crociera, per i tuoi weekend, nelle spa, in montagna, per i tuoi viaggi avventurosi ed i grandi viaggi. Tutto quello che puoi immaginare e… l’inimmaginabile direttamente dalla lente del nostro curiosone." />
	<meta name="keywords" content="Turista curioso, voli,  hotel, crociera, weekend, spa, montagna, viaggi avventurosi, grandi viaggi,voli economici, sconti" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

	<link href="css/style.css" rel="stylesheet" media="all">

</head>
<?php flush(); ?>
<body>
	
<!-- FORM CD -->
	<form name="INTEGRATION_ConfigForm">
	<input type="hidden" name="ClientSubmitButton" value="invia">
	<input type="hidden" name="FormName" value="regform">
	<input type="hidden" name="OrderPrint" value="personal"> <!-- all | personal-categories-legal -->
	<input type="hidden" name="Language" value="IT">
	<input type="hidden" name="Affiliate" value="15834">
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
		<div id="form"> 
			<div class="box1">
				<div></div>
				<div>
					<p class="left" onclick="change_dest('left')"></p>
					CAMBIA LA TUA SCELTA
					<p class="right" onclick="change_dest('right')"></p>
				</div>
				<div> 
				</div>
			</div>
			<div class="box2">
				PASSO <span>2</span>
				<div id="passo"></div>
				<div id="adsense">
					<img src="http://img.webnation.it/concorso_turista_curioso/loader_ad.gif" />
				</div>
			</div>	
			<div class="box3">
				<div class="top">
					PARTI <span class="white">CON TURISTA</span>
					<?php include ("fb/button_fb.php"); ?>
					<input type="text" name="nome" id="nome" placeholder="Nome *" class="icon_a">
					<input type="text" name="cognome" id="cognome" placeholder="Cognome *" class="icon_a">
					<input type="text" name="email" id="email" placeholder="Email *" class="icon_b">
					
					<select name="sesso">
								<option value="">Sesso*</option>
								<option value="m">Maschio</option>
								<option value="f">Femmina</option>							
							</select>
							
					
							<select name="gg">
								<option value="">GG*</option>
								<?php 
									for($i=1;$i<32;$i++){
										if($i<10)
											$valore = "0".$i;
										else
											$valore = $i;
										echo "<option value=\"".$valore."\">".$valore."</option>";
									}
								?>						
							</select>
						
							<select name="mm">
								<option value="">MM*</option>
								<?php 
									for($i=1;$i<13;$i++){
										if($i<10)
											$valore = "0".$i;
										else
											$valore = $i;
										echo "<option value=\"".$valore."\">".$valore."</option>";
									}									 									
								?>
								
							</select>
					
							<select name="aaaa">
								<option value="">AAAA*</option>
								<?php
									$anno=date('Y') - 19;
									$i="0";
									while($i<=79){
										echo "<option value=\"$anno\">$anno</option>";
										$anno=$anno-1;
										$i=$i+1;
									}
								?>
							</select>
<input type='text' name="cap" id='cap' placeholder='CAP*' maxlength=5 onblur='trovaprovincia(this.value)'><div id='aggiunta'><input type='text' name='comune' id='comune' value='Comune (auto)' readonly disabled></div>
					<input type='text' name='cellulare' id='cellulare' placeholder='Cellulare*' maxlength=10>
							
					<select name='via' id='via'><option value='via'>Via</option><option value='viale'>Viale</option><option value='piazzale'>Piazzale</option><option value='circolo'>Circolo</option><option value='vicolo'>Vicolo</option><option value='corso'>Corso</option><option value='strada'>Strada</option><option value='localita'>Localit&agrave;</option><option value='largo'>Largo</option></select><input type='text' name='indirizzo' id='indirizzo' placeholder='Indirizzo*'><input type='text' name='civico' id='civico' placeholder='Nr.*' maxlength=5><div class='clear spacer'></div><div class='clear spacer'></div><select id='operatore' name='operatore'><option value=''>Op.*</option><option value='wind'>Wind</option><option value='tim'>Tim</option><option value='vodafone'>Vodafone</option><option value='tre'>Tre</option></select>
					<label class="nb">* campi obbligatori</label>
					<div class="clear"></div>
				</div>
				<div class="bottom">
					<div class="privacy_button">
						<input type="radio" name="privacya" value="si"> Si
						<input type="radio" name="privacya" value="no"> No
					</div>
					<div class="privacy_txt">
					Desidero partecipare al concorso di cui ho acquisito e accetto integralmente <a href="regolamento_inviaggio_col_turista.pdf" target="_blank">il regolamento</a>. Richiedo contestualmente l’iscrizione ai servizi di postadiretta.it dando il consenso ai trattamento per finalità di Tipo B, descritte <a href="http://www.turistacurioso.it/paesionline/terminos.html" target="_blank">nell’informativa privacy</a> che ho acquisito, in quanto condizione necessaria per la partecipazione. 
					</div>
					<div class="clear"></div>
					<div id="step">
						<img src="http://img.webnation.it/concorso_turista_curioso/ajax-loader.gif" id="loader_gif" alt="caricamento, attendi qualche secondo" title="caricamento, attendi qualche secondo" />
						PROSSIMO PASSO
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
			Copyright &copy; 2006-2014 Antevenio S.r.l. Tutti i diritti sono riservati. Realizzato da Antevenio S.r.l. Viale Francesco Restelli 3/7 - 20124 Milano Partita IVA n. IT0421826096 
		</div>
		<div id="facebook" onclick="condividiHome()">
			Condividi su Facebook
		</div>
	</div>	
	
	<!-- FACEBOOK API ELEMENT -->
	<div id="fb-root"></div>
	
	
	<div id="adsense_mobile_fisso">
		<iframe src='addsense/passo_fine_footer_mob.html' frameborder='0'></iframe>
	</div>	
	
	<script src="js/jquery.min.js"></script>
	<script async src="js/script_2.js"></script>
	<script async src="js/jquery.selectbox-0.2.min.js"></script>	
	<script language="javascript" src="http://registro.correodirect.com/getcode.php?web_id=15834" id="cdcrjs"></script>	
	
	<link href="css/jquery.selectbox.min.css" rel="stylesheet" media="all">
	<link href='http://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' type='text/css'>		
</body>
</html>