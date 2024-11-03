import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function AboutMe () {
    return(
        <div id="text">
        <h1 id='about-text'>A propos de moi</h1>
        
        <p>
            À 24 ans, je me suis lancé dans une reconversion pour devenir développeur web. 
            Actuellement, je suis apprenti pour une durée de 1 an chez MGI Digital Technology, 
            et je prépare en parallèle un diplôme de développeur web (Bac+2) à la Webacadémie de Lyon. 
            Grâce à cette formation et à mon expérience en entreprise, 
            j'ai acquis des compétences dans divers langages de programmation, 
            la gestion de bases de données, ainsi que dans l'utilisation d'outils de design comme Figma.
        </p>
        <div>
            <a href="https://github.com/Mlyet" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/thomas-meyet-92695b226/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:thomas.meyet@epitech.eu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
        
        </div>
    </div>
    );
}

export default AboutMe;