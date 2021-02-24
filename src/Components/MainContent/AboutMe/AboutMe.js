import React from 'react'

const AboutMe = () => {
    return (
       <div className="about-me-container">
           <div className="descript-container">
                <h2 className="header">Junior <span>Front-end</span> developer</h2>
                <p>
                    Jestem początkującym front-end developerem z pasją 
                    oraz studentem 6 semestru kierunku informtyka na Politechnice Śląskiej.
                    Zajmuje się programowaniem webowym około 2 lat. 
                    Bardzo chciałym kontynuować rozwijanie swoich umiejętności w <span className="company-name">"The Software House"</span> w Gliwicach.
                </p>
           </div>

           <div className="technological-stack-container">
                <h2 className="header">Stos technologiczny</h2>

                <div className="single-stack-container react" title="React">

                </div>

                <div className="single-stack-container html-css" title="HTML-CSS">

                </div>

                <div className="single-stack-container sql" title="SQL">

                </div>

                <div className="single-stack-container sass" title="SASS">

                </div>

                <div className="single-stack-container ruby-on-rails" title="RubyOnRails">

                </div>

                <div className="single-stack-container bootstrap" title="Bootstrap">

                </div>

                <div className="single-stack-container typescript" title="Typescript">

                </div>

                <div className="single-stack-container redux" title="Redux">

                </div>
           </div>
       </div>
    )
}

export default AboutMe
