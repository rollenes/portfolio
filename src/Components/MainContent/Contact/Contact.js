import React from 'react'

import myPicture from '../../../images/myPicture.jpg'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="picture-container">
                <div>
                    <img  src={myPicture} alt="Moje zdjęcie"/>
                    <p>Michał Siwiec</p>
                </div>
            </div>

            <div className="info-container">
                <div className="cirlce">
                    <i class="icon-mail-alt"></i>
                </div>

                <div className="content-container">
                    <h3>Email</h3>
                    <p>siwiec.michal724@gmail.com</p>
                </div>
            </div>

            <div className="info-container">
                <div className="cirlce">
                    <i class="icon-facebook"></i> 
                </div>

                <div className="content-container">
                    <h3>Nazwa uzytkownika</h3>
                    <p>Michał Siwiec</p>
                </div>
            </div>

            <div className="info-container">
                <div className="cirlce">
                    <i class="icon-phone"></i>
                </div>

                <div className="content-container">
                    <h3>Numer tel.</h3>
                    <p>724 131 140</p>
                </div>
            </div>
       </div>
    )
}

export default Contact
