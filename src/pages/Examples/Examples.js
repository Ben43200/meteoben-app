import React from "react";
import Navbar from "../../components/NavBar";
import { Link } from "react-router-dom";

import Kasalight from "../../Kasalight.png"
import "./examples.scss"
import BackToUp from "../../components/BackToUp/BackToUp";









export default function Examples() {
    return (<div>
        <Navbar />
        <main>

            <div className="title-container">
                <h1>Meteoben</h1>
                <h2>Développeur Web en biovallée de la Drôme</h2>

            </div>
            <h3>Projet Réalisé en fin de formation</h3>
            <p className="indications">Cliquez sur la photo du site Kasa afin d'accéder au projet, vous pouvez naviguer en cliquant sur les différentes annonces</p>

            <div className="example-container">
                <Link to="https://unrivaled-choux-4f6a02.netlify.app/" target="_blank"><img src={Kasalight} alt="background" className="Kasa-pic" /></Link>
            </div>
            <p>Ce site réalisé à la fin de ma formation, est plus exactement une application web qui tourne sur react; react est une puissante librairie de code qui a été
                inventée et utiliséé par Facebook, mais également par Airbnb ou encore Netflix.
                Dans mon projet, l'application va chercher dans un fichier les différentes photos des logements, et leur attribue également leurs caractéristiques telles que
                le nom des logements, le lieu, le nombre d'étoiles, les accomodations.Cette structure permet ainsi de ne pas recréer les pages à chaque fois et si vous enrichissez le
                fichier des annonces, l'application va être capable de recréer automatiquement et implémenter les nouveaux composants.</p>
            <p>On peut imaginer que le fichier de base de données des logements dans cet exemple, ou le fichier de vos données dans votre application, soit situé sur internet, ainsi
                l'application se mettra à jour toute seule.</p>
            <p>Une autre réalisation encore plus complexe serait par exemple l'ajout de ce qu'on appelle un "backend" en développement Web, qui est en fait une partie serveur, ainsi
                les utilisateurs ou abonnés à qui on donnerait des droits pourraient se connecter à l'application et créer eux-même des annonces de logements ici.</p>
        </main>
        <BackToUp />
    </div>

    );
}