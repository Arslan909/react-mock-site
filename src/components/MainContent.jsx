import image from "./assets/image.png";

export default function MainContent(){
    return (
        <div className="MainComplete">
            <div className="MainContainer">
                <h1><strong>Landing Page template for develeopers & startups</strong></h1>
                <p>Beautifully designed templates using React.js. ant design and styled-components! Save weeks of time. and build your landing page in minutes.</p>

                <div className="button-container">
                    <button type="button" id="button-1">Explore</button>
                    <button type="button" id="button-2">Learn more</button>
                </div>
            </div>
            <div className="img-container">
                <img src={image} alt="meeting-people" />
            </div>
        </div>
    )
}