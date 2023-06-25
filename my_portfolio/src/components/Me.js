import '../App.css'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from '../assets/pictureMe.jpg';
import linkedin from "../assets/linkedin.png";
import cv from "../assets/cv.png";
import cvfile from "../assets/CV_Thomas_Meyet.pdf";

function Me() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section class="two">
                <div class="divMe">
                    <h1 data-rate=".4" data-direction="vertical">A propos de moi</h1>
                </div>
                <div class= "auto flex justify center gap-6 meImg">
                        <img src={me}  alt='Thomas' class="img"/>
                    <div class= "grid grid cols-2 gap-4 textMe">
                        Je suis actuellement étudiant à la web@cademie <br />
                        en préparation d'un titre professionnel / Bac+2:<br />
                        Intégrateur / Développeur web.
                        <div class="auto flex justify center gap-6">
                            <a href='https://www.linkedin.com/in/thomas-meyet-92695b226/' class="grid grid cols-6 gap-4" target="_blank" rel="noreferrer" >
                                <img src={linkedin} alt='icone de linkedin' className='logoReseaux'/>
                            </a>
                        
                            <a href={cvfile} class="grid grid cols-6 gap-4" download target="_blank" rel="noreferrer">
                                <img src={cv} alt='icone de linkedin' className='logoReseaux'/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Me;