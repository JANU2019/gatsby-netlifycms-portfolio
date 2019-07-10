import React from 'react';
import { Image } from "@components";

const Contact = () => {
    return (
        <div className="contact-grid">
            <div className="contact--image">
                <Image filename="/content/assets/contact-image.jpg"/>
            </div>
            <div className="contact--form">
                <h1 className="contact--form__heading">
                    Dirbkime kartu!
                </h1>
                <form action="https://formspree.io/linaluna6@gmail.com" method="POST">
                    <input type="hidden" name="_language" value="lt" />
                    <input type="text" name="name" className="form--input" placeholder="Jūsų vardas"/>
                    <br/>
                    <input type="email" name="_replyto" className="form--input" placeholder="El. Paštas"/>
                    <br/>
                    <input type="text" name="message" className="form--input" placeholder="Žinutė"/>
                    <br/>
                    <input type="submit" value="Siųsti" className="submit-button"/>
                    <input type="hidden" name="_next" value="//stupefied-davinci-acf7cf.netlify.com/" />
                </form>
            </div>
        </div>
    )
}

export default Contact