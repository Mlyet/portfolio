import "../App.css";
import game from "../assets/game.gif";
import camera from "../assets/camera.gif";
import genshin from "../assets/Genshin.jpeg";

function Hobbies(){
    return(
        <article>
            <div class="divProject">
                <h1>Mes Loisirs</h1>
            </div>
            <div className="divGame">
                <img src={game} alt="game kit" class="game"/>
            </div>
                <div className="genshin">
                    <h1>Genshin Impact</h1>
                    <img src={genshin} alt="Genshin Impact" />
                </div>
                <div className="valorant">
                    <h1>Valorant</h1>
                </div>
                <div className="Fortnite">
                    <h1>Fortnite</h1>
                </div>
                <div className="LoL">
                    <h1>League of Legends</h1>
                </div>
            <div className="divGame">
                <img src={camera} alt="camera" class="game"/>
            </div>
            <div className="genshin">
                    
                </div>
        </article>
    )
}
export default Hobbies;