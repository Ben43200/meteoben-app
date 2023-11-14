import React from "react";

// import "./examples.scss"











export default function Header() {
    return (
        <header>
            <div className="title-container">
                <h1>Meteoben</h1>
                <h2>Développeur Web en biovallée de la Drôme</h2>
                {/* <img src={background} alt="background" className="fond-home" /> */}
                {/* <img alt=''
                    src={require('../compress-image-large.webp')}
                    srcSet={`
${require('../compress-background-small.webp')} 320w, 
${require('../compress-background-medium.webp')} 680w,
${require('../compress-image-large.webp')} 1024w

`} /> */}

            </div>
        </header>

    )

}