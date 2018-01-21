<?php

$cn= mysql_connect("www.fisat.ac.in","fisataci_prayaan", "V+AkSu&Df)sD","fisataci_prayaan")or die("Could not Connect My Sql");
if(!$cn)
{
    echo 'error'.mysqli_connect_error();
}
else
{
    echo 'success';
}
?>