import React from 'react';
import { Image } from "@components"

const About = () => {
    return (
        <div className="about-grid">
            <div className="about--image">
                <Image filename="/content/assets/about-image.jpg"/>
            </div>
            <div className="about--text">
                <h1 className="about--text__heading">
                    Sveiki! <br/> Mano vardas Janul.
                </h1>
                <p className="about--text__paragraph">
                Quinoa air plant ennui banh mi yuccie put a bird on it pickled fam offal microdosing. Church-key chia mixtape snackwave. You probably haven't heard of them vape twee jianbing, cred seitan normcore pour-over pok pok tumeric. Church-key celiac hell of freegan. Vice hashtag celiac chicharrones mustache. Mustache pork belly DIY williamsburg forage selvage iPhone cold-pressed etsy street art.
                </p>
            </div>
        </div>
    )
}

export default About