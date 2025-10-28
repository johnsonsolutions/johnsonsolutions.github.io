// First line of reactCard.js
console.log("ReactCard.js is loading correctly");

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function ReactCard(){
    const [title, setTitle] = useState("Title");
    const [description, setDesc] = useState("Your Description Here");
    const [projUrl, setUrl] = useState("http://yahoo.com");
    const [images, setImgs] = useState("{'mobile': 'images/image.png', 'desktop': 'images/image.png'}");
    const [skills, setSkill] = useState("html, css, javascript");
   
    return(
        <div className="projCard" mobile-src="assets/images/Screen Shot 2025-03-02 at 22.03.30.png" desk-src="assets/images/Screen Shot 2025-03-02 at 22.02.47.png">
            <div className="projFace">
                <div className="projTitle">
                    <h3>{title}</h3>
                </div>
                <footer className="projSkills">
                    <span>html</span>
                    <span>css</span>
                </footer>
            </div>
            <div className="projDetail">
                <p> {description} </p>
                <footer className="projLink"><a href={projUrl}>{projUrl}</a></footer>
            </div>
        </div>
    );
}

function ReactDeck(){
    const [type, setType] = useState("default");
    return (
    <div className="projDeck">
        <ReactCard />
    </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<ReactDeck />);