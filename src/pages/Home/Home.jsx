// import "./Home.scss";
// import { getLogements } from "../../services/dataManager";
// import background from "../../images/background-banner.png";
// import React, { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../components/NavBar";
import './home.scss';
// import Footer from "../components/Footer";
// import background from "../../compress-background.webp";
import BackToUp from "../../components/BackToUp/BackToUp";
// const imageSmall = "../../compress-image-small.jpg"
// const imageMedium = "../../compress-image-medium.jpg"
// const imageLarge = "../../compress-image-large.webp"
export default function Home() {
    return (<div>

        <Navbar />
        <main>
            {/* <h1>Meteoben</h1> */}

            <div className="title-container">
                <h1>Meteoben</h1>
                <h2>Développeur Web en biovallée de la Drôme</h2>
                {/* <img src={background} alt="background" className="fond-home" /> */}
                <img alt=''
                    src={require('../../compress-image-large.webp')}
                    srcSet={`
    ${require('../../compress-background-small.webp')} 320w, 
    ${require('../../compress-background-medium.webp')} 680w,
    ${require('../../compress-image-large.webp')} 1024w

  `} />
            </div>
            <div className="main-container">
                <p>Bienvenue sur mon site</p>
                <p>Je me présente, je m'appelle Benjamin, j'ai suivi une formation de développeur web pendant laquelle j'ai eu à réaliser différents projets et que j'ai terminée avec succès.
                    J'utilise différents langages de programmation tel que le html, le css , et le javascript, j'ai égalmement des compétences en Node.js et en React.
                    Je continue à me former tous les jours en me tenant au courant des nouveautés concernant les différents langages de programmation.</p>
                <p>J'ai crée ma micro entreprise au début de ce mois de novembre 2023, j'ai déjà fait par ailleurs un projet pour une association.</p>
                <p>Je vous propose donc de créer votre site clé en main, je me charge de le coder, il sera référencé sur google grâce au SEO naturel que je mettrai en place et je
                    ferai en sorte qu'il soit adapté en mobile, tablette et ordinateur.
                    Les gens non avertis ne le savent pas forcément, mais le référencement est beaucoup plus efficace avec une version mobile en parallèle, car la plupart des gens utilisent
                    leur mobile pour naviguer sur internet maintenant, et ça, google l'a bien compris.
                    Je me charge de vous louer un espace sur mon serveur pro pour y faire tourner votre site.
                    Je vous laisse de votre côté réserver un nom de domaine si vous n'en avez pas déjà un, vous restez ainsi propriétaire de votre nom de domaine.J'ai déjà vu par le passé
                    des développeurs acheter le nom de domaine pour des clients et ne pas le restituer si ils ne voulaient pas poursuivre leur partenariat par exemple.
                    Je peux vous aider dans vos démarches.
                </p>
                <p>Votre site sera unique, il sera fait à l'aide de lignes de code uniquement, je n'utilise pas d'outils tel que Wordpress par exemple.</p>
                <p>Chaque projet est différent et sera adapté à vos souhaits, il y a des projets simples et d'autres qui demandent beaucoup plus de travail,
                    c'est pourquoi, je vous propose
                    dès à présent de prendre contact avec moi afin qu'on en discute.</p>

            </div>

        </main>
        <BackToUp />
    </div>
    )
}