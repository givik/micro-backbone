<?php

// ERROR reporting
Flight::set('flight.log_errors', true);

// define default timezone
date_default_timezone_set('Asia/Tbilisi');

// connectiong to database
$db = new Sparrow();
$db->setDb('mysql://user:password@localhost/database');

// Set base url for application
Flight::set('flight.base_url', '/');

Flight::map('error', function(Exception $ex){
    // Handle error
    echo $ex->getTraceAsString();
});

Flight::map('notFound', function(){
    echo "404. Not found.";
});
