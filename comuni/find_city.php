<?php
	$cap = $_POST['cap'];
        $output = 0;
        
        if (($handle = fopen("france_cp.csv", "r")) !== FALSE)
        {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
            {
                if ($data[0] == $cap)
                {
                    $city[] = $data[1];
                    $output++;
                }
            }
            fclose($handle);
        }
        
	if($output != 0)
	{
            if (count($city) > 1)
            {
                $html = $city;
                $focus='1';
                                /*
                
                foreach($city as $key2 => $value2)
                {
                        $html .="<option value=\"$value2\">$value2</option>";			
                }
                $html .="</select>";			
                $html .="<script>$(\"#comune\").selectbox().next().css({\"width\": \"199px\", \"left\": \"169px\"});</script>";*/
            }
            else
            {
                $html = $city[0];
                //$html="<input id=\"comune\" name=\"comune\" type=\"text\" value=\"$city[0]\" readonly style='color:#fff'/>";
                //$html .="<input id=\"prov\" name=\"prov\" type=\"hidden\" value=\"$prov\" style=\"width:124px;\"/>";
                $focus='1';
            }
	}
	else
        {
            $html = '0';	
            //$html = "<input onclick=\";if (this.value == 'Comune*') {this.value = '';}\" onblur=\"controlfoo(); if (this.value == '') {this.value = 'Comune*';}\" id=\"comune\" name=\"comune\"  type=\"text\" />";
            $focus='0';
	}
	$return['error'] = false;
	$return['msg'] = $html;
	$return['focus'] = $focus;

	echo json_encode($return);
?>