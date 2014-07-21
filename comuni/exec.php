<?php
$output = 0;
    if (($handle = fopen("france_cp.csv", "r")) !== FALSE)
        {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
            {
                $city[] = $data[0];
                $output++;
                $city[] = $data[1];
                $output++;
            }
            fclose($handle);
        }

    $i = 0;
    $j = 0;
    while ($i < $output)
    {
        if ($j == 2)
        {
            $j = 0;
            echo ", "; 
        }
        echo json_encode($city[$i]);
        if ($j == 0)
            echo ":";
        $i++;
        $j++;
    }
?>

