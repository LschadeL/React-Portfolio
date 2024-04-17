import React from 'react';

export default function AboutMe() {
    return (
        <div className="pageContainer">
            <h1>About Me!</h1>
            <div className="aboutContainer">
                <h2>Ex-foodservice Management turned web-developer</h2>
                <p>
                    I have been working in the foodservice industry for the past 8 years. During this time I have worked most every
                    position in the industry, from dishwasher to general manager. After an injury left me unable to work in the
                    kitchen, I decided to pursue a career in web development.
                </p>

                <p>
                    I joined a full-stack web development bootcamp through the University of Minnesota. I've learned a lot about
                    coding as an individual and in a team setting, gaining experience with both front-end and back-end technologies.
                    As a trans developer, I am passionate about creating inclusive and accessible web applications, and hope that I can carry
                    that passion into my future career.
                </p>
            </div>
            <div className="contactPageContainer">
            <form id="contact">
                <label for="name">Name</label>
                <input className="input contactForm" type="text" id="name" />
                <label for="email">Email</label>
                <input className="input contactForm" type="email" id="email" />
                <label for="message">Message</label>
                <textarea
                    className="input contactForm"
                    name="Message"
                    id="message"
                    cols="30"
                    rows="10"
                ></textarea>
                <button className="button contactBtn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}