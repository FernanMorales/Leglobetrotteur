<?php
	// protezione dall'accesso diretto
	if(!isset($_POST['data_access'])) die('Direct access not permitted');
	
	/* INIZIO SESSIONE */
	session_start();
	
	//define("DATA_ACCESS"
	
	/* FUNZIONE INVIO CURL */
	function curl_execute($data){
		$url = "http://webnation.it/postadiretta/iscrizione_concorso_turista.php";

		$ch = curl_init($url);
		curl_setopt( $ch, CURLOPT_HEADER, 0 );
		curl_setopt( $ch, CURLOPT_POST, 1);
		curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );

		$result = curl_exec($ch);

		if($result)
			return $result;
		else
			return false;
		
		curl_close($ch);
	}
	
	
	
	/* ACESSO CONNESSIONE DB INTERNO - DISATTIVATO */
	/*define("connectDB", true);
	include("connect.php");*/
	$table = array (
		"users" => "turistacurioso_users_BACKUP_08012014",
		"contest" => "turistacurioso_contest",
		"options" => "turistacurioso_contest_viaggi"
	);
	
	
	/*********** ACCESSO CURL MDIRECTOR **************/
	include('oauth-php/library/OAuthStore.php');
	include('oauth-php/library/OAuthRequester.php');
	
	
	$consumer_secret="#raPr?d@76eF6?8thEch";
	$consumer_key="2301";
	
	$options = array( 'consumer_key' => $consumer_key, 'consumer_secret' => $consumer_secret );
	OAuthStore::instance("2Leg", $options );

	$url = "http://www.mdirector.com/api_contact"; // Url del servicio del api externo al que atacar
	$method = array("INSERT" => "POST", "UPDATE" => "PUT", "SELECT" => "GET"); // POST -> INSERT ****** PUT -> UPDATE ***** GET -> SELECT
	
	/* ******************************************** */
	
	switch($_POST['position']){
		case 'a':
			
			$data_to_send = array(
				"nome" => $_POST['nome'],
				"cognome" => $_POST['cognome'],
				"ref" => $_POST['ref'],
				"privacyb" => "S",
				"email" => $_POST['email'],
				"affiliato" => "turistacurioso",
				"data_insert" => date("Y-m-d H:i:s"),
				"ip" => get_ip(),
				"case" => "a"
			);
			$result_curl = curl_execute($data_to_send);
			
			if(strstr($result_curl, "|"))
				$_SESSION['action_down_eyes'] = $result_curl;
			else
				echo $result_curl;
			
			// ARRAY MDIRECTOR
			$contact = array(
				"email" => $_POST['email'],
				"name" => $_POST['nome'],
				"surname1" => $_POST['cognome'],
				"surname2" => $_POST['ref'],
				"country" => "IT",
				"movil" => "", 
				"ip" => get_ip(),
				"send-notifications" => false,
				"allow-unsubscribed" => false,
				"concorso" => "due_cose_valigia"
			); 
			
			$contact_check = array(
				"email" => $_POST['email']
			);
	
			try{
				$request = new OAuthRequester($url, $method['SELECT'], $contact_check);
				$result = $request->doRequest();
				$check = json_decode($result['body'], true);
				if($check['response'] == "error"){
					$request_ins = new OAuthRequester($url, $method['INSERT'], $contact);
					$request_ins->doRequest();
				}// con un else si può fare l'update
			}catch(OAuthException2 $e){
				die($e->getMessage());
			}
	
			break;
	
		case 'b':
			$_SESSION['frase'] = $_POST['frase'];
			$_SESSION['viaggio'] = $_POST['viaggio'];
			
			curl_execute($data = array(
				"frase" => $_POST['frase'],
				"viaggio" => $_POST['viaggio'],
				"id" => $_SESSION['action_down_eyes'],
				"case" => "b"
			));				
			
			break;
		
		case 'c':
			if($_POST['sesso'] == "Maschio")
				$sesso = "M";
			else
				$sesso = "F";
				
			$id = explode("|", $_SESSION['action_down_eyes']);	
			
			$data_to_send = array(
				"data_nascita" => $_POST['data_nascita'],
				"sesso" => $sesso,
				"indirizzo" => $_POST['indirizzo'],
				"cap" => $_POST['cap'],
				"comune" => $_POST['comune'],
				"provincia" => $_POST['provincia'],
				"operatore" => $_POST['operatore'],
				"cellulare" => $_POST['cellulare'],
				"tel_fisso" => $_POST['tel_fisso'],
				"data_mod" => date("Y-m-d H:i:s"),
				"inviocarta" => "N",
				"ip" => get_ip(),
				"ref" => $_POST['ref'],
				"concorso" => "tre_cose_valigia",
				"id" => $id[1],
				"frase" => $_SESSION['frase'],
				"viaggio" => $_SESSION['viaggio'],
				"case" => "c"
			);
		
			echo curl_execute($data_to_send);
					
			// recupero "lisId" e "conId" obbligatorio per effettuare update su mDirector	
			$contact_check = array(
				"email" => $_POST['email']
			);
			
			//data_nascita per MDirector GG-MM-AAAA (anzichè AAAA-MM-GG)
			$d_n = explode("-", $_POST['data_nascita']);
			$data_reverse = array_reverse($d_n);
			
			// CODIFICA PROVINCE MDirector
			$prov_coded = array("AG"=>"53","AL"=>"54","AN"=>"55","AO"=>"154","AP"=>"57","AQ"=>"95","AR"=>"56","AT"=>"58","AV"=>"59","BA"=>"60","BG"=>"64","BI"=>"65","BL"=>"62","BN"=>"63","BO"=>"66","BR"=>"69","BS"=>"68","BT"=>"61","BZ"=>"67","CA"=>"70","CB"=>"72","CE"=>"74","CH"=>"77","CI"=>"73","CL"=>"71","CN"=>"82","CO"=>"78","CR"=>"80","CS"=>"79","CT"=>"75","CZ"=>"76","EN"=>"83","FC|FO"=>"88","FE"=>"85","FG"=>"87","FI"=>"86","FM"=>"84","FR"=>"89","GE"=>"90","GO"=>"91","GR"=>"92","IM"=>"93","IS"=>"94","KR"=>"81","LC"=>"99","LE"=>"98","LI"=>"100","LO"=>"101","LT"=>"97","LU"=>"102","MB"=>"111","MC"=>"103","ME"=>"108","MI"=>"109","MN"=>"104","MO"=>"110","MS"=>"105","MT"=>"106","NA"=>"112","NO"=>"113","NU"=>"114","OG"=>"115","OR"=>"117","OT"=>"116","PA"=>"119","PC"=>"125","PD"=>"118","PE"=>"124","PG"=>"122","PI"=>"126","PN"=>"128","PO"=>"130","PR"=>"120","PT"=>"127","PU|PS"=>"123","PU"=>"123","PS"=>"123","PV"=>"121","PZ"=>"129","RA"=>"132","RC"=>"133","RE"=>"134","RG"=>"131","RI"=>"135","RM"=>"137","RN"=>"136","RO"=>"138","SA"=>"139","SI"=>"142","SO"=>"144","SP"=>"96","SR"=>"143","SS"=>"140","SV"=>"141","TA"=>"145","TE"=>"146","TN"=>"150","TO"=>"148","TP"=>"149","TR"=>"147","TS"=>"152","TV"=>"151","UD"=>"153","VA"=>"155","VB"=>"157","VC"=>"158","VE"=>"156","VI"=>"161","VR"=>"159","VS"=>"107","VT"=>"162","VV"=>"160");
			
			// ARRAY MDIRECTOR
			$contact = array(
				"email" => $_POST['email'],
				"sex" => $sesso,
				"cp" => $_POST['cap'],
				"city" => $_POST['comune'],
				"province" => $prov_coded[$_POST['provincia']],
				"country" => "IT",
				"movil" => $_POST['cellulare'], 
				"birthday" => $data_reverse[0]."-".$data_reverse[1]."-".$data_reverse[2],
				"reference" => "S",
				"ip" => get_ip(),
				"send-notifications" => true,
				"allow-unsubscribed" => true,
				"concorso" => "tre_cose_valigia",
				"scelta_frase" => $_SESSION['frase'],
				"scelta_regalo" => $_SESSION['viaggio'],
				"testo_aggiunta_mail" => "Ti sei registrato al concorso Tre Cose In valigia! Il tuo viaggio: ".$_SESSION['viaggio']." La tua scelta: ".$_SESSION['frase']
			);   				
			
			try{
				$request = new OAuthRequester($url, $method['SELECT'], $contact_check);
				$result = $request->doRequest();
				$check = json_decode($result['body'], true);
				if($check['response'] == "ok"){
					//se esiste il contatto recupero "listId" e "conId" e li aggiungo all'array per mdirector
					$contact['listId'] = $check['data']['listId'];
					$contact['conId'] = $check['data']['conId'];
				
					// update effettivo su mdirector
					$request_update = new OAuthRequester($url, $method['UPDATE'], $contact);
					$result_update = $request_update->doRequest();
		
				}else{
					//insert su mdirector - nel caso in cui mdirector abbia cancellato l'utente perchè non valido
					$contact["email"] = $_POST['email'];
					$contact["name"] = $_POST['nome'];
					$contact["surname1"] = $_POST['cognome'];
					$contact["surname2"] = $_POST['ref'];
					
					$request_update = new OAuthRequester($url, $method['INSERT'], $contact);
					$result_update = $request_update->doRequest();					
				}
			}catch(OAuthException2 $e){
				die($e->getMessage());
			}		

			
			break;
	}
	
	
	
	function get_ip(){
		if (!isset($_SERVER['HTTP_X_FORWARDED_FOR']))
			return $_SERVER['REMOTE_ADDR'];
		else
			return $_SERVER['HTTP_X_FORWARDED_FOR'];
	}	
?>
