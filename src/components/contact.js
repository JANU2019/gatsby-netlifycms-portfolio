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
                <form action="https://formspree.io/email@domain.tld" method="POST">
                    <input type="text" name="name" className="form--input" placeholder="Jūsų vardas"/>
                    <br/>
                    <input type="email" name="_replyto" className="form--input" placeholder="El. Paštas"/>
                    <br/>
                    <input type="email" name="_replyto" className="form--input" placeholder="Žinutė"/>
                    <br/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact