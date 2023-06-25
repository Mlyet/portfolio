import "../App.css";
import game from "../assets/game.gif";
import camera from "../assets/camera.gif";
import genshin from "../assets/Genshin.jpeg";
import valorant from "../assets/valorant.jpeg";
import fortnite from "../assets/fortnite.jpeg";
import lol from "../assets/lol.jpeg";

function Hobbies(){
    return(
        <article className="hobbies">
            <div class="divProject">
                <h1>Mes Loisirs</h1>
            </div>
            <div className="divGame">
                <img src={game} alt="game kit" class="game"/>
            </div>
            <div className="video_game">
                <div class= "auto flex justify center gap-6 textProject">
                <div className="genshin">
                    <h1>Genshin Impact</h1>
                    <img src={genshin} alt="Genshin Impact" class="gameImg"/>
                </div>
                <div class= "grid grid cols-2 gap-4">
                    <div className="valorant">
                        <h1>Valorant</h1>
                        <img src={valorant} alt="Valorant" class="gameImg"/>
                    </div>
                </div>
            </div>

            <div class= "auto flex justify center gap-6 textProject">
                <div className="Fortnite">
                    <h1>Fortnite</h1>
                    <img src={fortnite} alt="Fortnite" class="gameImg"/>
                </div>
                <div class= "grid grid cols-2 gap-4">
                    <div className="LoL">
                    <h1>League of Legends</h1>
                    <img src={lol} alt="Fortnite" class="gameImg"/>
                </div>
                </div>
            </div>
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