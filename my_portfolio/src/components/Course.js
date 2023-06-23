import '../App.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import plane from "../assets/plane.png";

function Course() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section class="three">
            <img src={plane} alt='plane' className='plane' data-aos="fade-right" data-aos-duration="2000"/>
            <div class="divMe">
                <h1>Mon parcours</h1>
            </div>
            <div class= "auto flex justify center gap-4">
                <div class = "divMe">
                    <h4>Depuis Novembre 2022:</h4>
                </div>
                <div>
                    <div class= "grid grid cols-2 gap-4 "> 
                        <ul>
                            <li>
                                Formation développeur Intégrateur Web - Diplôme niveau 5 (Bac+2) - enregistré au RNCP avec la web@cademie : 
                                Assembler les pages en HTML5 et CSS3 à partir de maquettes graphiques
                                Mettre en place une communication entre client et serveur avec JavaScript, ect...
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class= "auto flex justify center">
                <div class = "divMe">
                    <h4>Année 2021 et 2022 :</h4>
                </div>
                <div class= "grid grid cols-2 gap-4">
                    <div>
                        <ul>
                            <li>
                                Formation la Toile à l'emlyon Business School sur l'intelligence artificielle (IA) et le développement Web (HTML, CSS, Javascript)
                                avec certification. Réaliser avec Glitch, Figma, Notion, Slack, Lobe.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class= "auto flex justify center">
                <div class = "divMe">
                    <h4>Année 2021 :</h4>
                </div>
                <div class= "grid grid cols-2 gap-4">
                    <div>
                        <ul>
                            <li>
                                Formation sur Sololearn en  PHP,  HTML et CSS.
                            </li>
                            <li>
                                Formation PCIE ou ICDL : World (réussi à 78%) et Excel (réussi à 97%). 
                            </li>
                            <li>
                                Formation en Anglais : ABC Formation, cours particulier
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div class= "auto flex justify center">
                <div class = "divMe">
                    <h4>Année <br />2016/2020 :</h4>
                </div>
                <div class= "grid grid cols-2 gap-4">
                    <div>
                        <ul>
                            <li>
                                Formation Apple Fondation Program ( initiation au langage SUIFT ) avec Simplon. Réaliser avec Xcode.
                            </li>
                            <li>
                                CAP et Mention Complémentaire Pâtissier et un CAP Chocolaterie avec diplômes obtenus. CECOF Ambérieu-en-Bugey
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> 
    );
}
export default Course;