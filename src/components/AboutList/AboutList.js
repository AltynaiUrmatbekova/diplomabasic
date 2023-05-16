import "./AboutList.css";
import sushi from "../../assets/sushi.webp";

export default function AboutList() {
    return (
        <div className="AboutList">
            <div className="aboutContent">
            <h1>Sushi and Rolls in karakol</h1>
            <p>sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold.</p>
            <p>
            Restaurants specializing in sushi abound in Japan, where subtleties of preparation find a discriminating clientele, and the dish has gained popularity in the United States and elsewhere (see also sashimi).
            </p>
            <p>The whole is rolled into a cylinder and sliced. In chirashi-zushi, a homestyle version, the ingredients are not formed, rather the vinegared rice is strewn with toppings and garnishes.</p>
            </div>
            <div className="aboutImg">
                <img src={sushi} alt="sushi"/>
            </div>
        </div>
    )
}