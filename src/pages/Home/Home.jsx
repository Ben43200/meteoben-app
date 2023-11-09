// import "./Home.scss";
// import { getLogements } from "../../services/dataManager";
// import background from "../../images/background-banner.png";
// import React, { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../components/NavBar";
import './home.scss'
// import Footer from "../components/Footer";


export default function Home() {
    return (<div>
        <Navbar />
        <main>
            <h1>Meteoben</h1>
            <div className="main-container">
                <p>Bienvenue sur mon site</p>
                <p>Je me présente, je m'appelle Benjamin, j'ai suivi une formation de développeur web pendant laquelle j'ai eu à réaliser différent projets et que j'ai terminé avec succés.
                    J'utilise différents langages de programmation tel que le html, le css , et le javascript, j'ai égalmement des compétences en Node.js et en React.
                    Je continue à me former tout les jours en me tenant au courant des nouveautés concernant les différents langages de programmation.</p>
                <p>J'ai crée ma micro entreprise au début de ce mois de novembre 2023, j'ai déjà fait par ailleurs un projet pour une association.</p>
                <p>Je vous propose donc de créer votre site clé en main, je me charge de coder votre site web, il sera référencé sur google grâce au SEO que je mettrai en place et je
                    ferai en sorte qu'il soit adapté en mobile, tablette et ordinateur.
                    Les gens non avertis ne le savent pas forcément, mais le référencement est beaucoup plus efficace avec une version mobile en parallèle, car la plupart des gens utilisent
                    leur mobile pour naviguer sur internet maintenant, et ça, google l'a bien compris.
                    Je me charge de vous louer un espace de location sur mon serveur pro pour y faire tourner votre site.
                    Je vous laisse de votre côté réserver un nom de domaine si vous en avez pas déjà un, vous restez ainsi propriétaire de votre nom de domaine, j'ai déjà vu pas le passé
                    des développeurs acheter le nom de domaine pour des clients et ne pas les restituer si ils ne voulaient pas poursuivre leur partenariat par exemple.
                    Je peux vous aider dans vos démarches.
                </p>
                <p>Chaque projet est différent et ne sera pas appréhendé de la même mainère, c'est pourquoi, je vous propose
                    dès à présent de prendre contact avec moi afin qu'on en discute.</p>
            </div>

        </main>
    </div>
    )
}