import "../App.css"
import tree from "../assets/tree.png"
import Js from "../assets/logoJs.png"
import HTML from "../assets/logoHtml.png"
import CSS from "../assets/logoCss.png"
import PHP from "../assets/logoPhp.png"
import React from "../assets/logoReact.png"
import Symfony from "../assets/logoSymfony.png"

function Skill (){
    return(
        <article>    
            <img src={tree} alt='treePng' class="treePng md:h-32 lg:h-48" data-aos="fade-up" data-aos-duration="2500"/>
            <div class="earth">
                <div>
                    <h1>Mes compétences</h1>
                </div>
                <div class= "auto flex place-content-center gap-4">
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={Js} alt='logoJs'  class="logoCode"/>
                    </div>
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={HTML} alt='logoJs'  class="logoCode"/>
                    </div>
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={CSS} alt='logoJs'  class="logoCode"/>
                    </div>
                </div> 
                <div class= "auto flex place-content-center gap-4">
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={PHP} alt='logoJs'  class="logoCode"/>
                    </div>
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={React} alt='logoJs'  class="logoCode"/>
                    </div>
                    <div class= "grid grid cols-4 gap-4 divSkill "> 
                        <img src={Symfony} alt='logoJs'  class="logoCode"/>
                    </div>
                </div> 
            </div>
        </article>
    )
}
export default Skill;