<?php

    // Flight framework
    require_once 'lib/flight/Flight.php';
    // Sparrow DB
    require_once 'lib/sparrow/sparrow.php';
    // Functions
    require_once 'config/functions.php';
    // App Config
    require_once 'config/config.php';

    ////////// APP 
    require_once "routes.php";

    ///// start
    Flight::start();