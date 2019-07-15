<?php

/* variables host et base de données */
$host = "localhost";
$bdd = "pendu";
$user_name = "root";
$user_pass = "Jessdev87";

/* variable de récupération des infos du form html */
$pseudo = $_POST['pseudo'];
$login = $_POST['login'];
$password = $_POST['password'];

try {
	$pdo = new PDO("mysql:host=$host;dbname=$bdd", $user_name, $user_pass);

	$req = $pdo->prepare('INSERT INTO utilisateurs(pseudo, login, password) VALUES(:pseudo, :login, :password)');
	
	$req->execute(array(
		'pseudo' => $pseudo, 
		'login' => $login, 
		'password' => $password
	));

	echo 'nouvel utilisateur enregistré.';
}

catch (PDOException $e) {
    die("Could not connect to database $dbname :" . $e->getMessage());
}

?>