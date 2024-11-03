import './Project.css'

function Project () {
    return(
        <div class="container">
        <h1 class="title">Mes projets</h1>
        <div class="card__container">

            <article class="card__article">
            <img
                src="../../assets/Projects/inventaire.png"
                alt="Site E-commerce"
                class="img__card"
            />
            <div class="card__data">
                <h2 class="card__title">Logiciel Inventaire</h2>
                <span class="card__description">
                <ul>
                    <li>Projet d'entreprise chez MGI Digital Technology</li>
                    <li>Réalisé avec Angular, NX, NGRX, Font Awesome et PrimeNg</li>
                </ul>
                </span>
            </div>
            </article>

            <article class="card__article">
            <img
                src="../../assets/Projects/e-commerce.png"
                alt="Site E-commerce"
                class="img__card"
            />
            <div class="card__data">
                <h2 class="card__title">Site E-commerce</h2>
                <span class="card__description">
                <ul>
                    <li>Projet en groupe pendant 1 mois</li>
                    <li>Réalisé avec React, Symfony et Docker</li>
                </ul>
                </span>
                <a
                href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-502-LYN-2-1-ecommerce-ruddy.villain"
                target="_blank"
                class="card__button"
                rel="noopener noreferrer"
                >Voir plus</a>
            </div>
            </article>

            <article class="card__article">
            <img
                src="../../assets/Projects/E-commerce figma-compressed.jpg"
                alt="Maquette Figma de E-commerce"
                class="img__card"
            />

            <div class="card__data">
                <h2 class="card__title">Maquette du site E-commerce</h2>
                <span class="card__description">
                <ul>
                    <li>
                    Céation d'une maquette de la page de connexion à la partie achat.
                    </li>
                    <li>Prototype Figma complétement interactif.</li>
                </ul>
                </span>
                <a
                href="https://www.figma.com/file/K4r6ekqPQ3JwwQkTzRbXyQ/Maquette-e-commerce?type=design&node-id=0-1&mode=design&t=5a87G9xJUL4vDAvZ-0"
                target="_blank"
                class="card__button"
                rel="noopener noreferrer"
                >Voir plus</a>
            </div>
            </article>


            <article class="card__article">
                <img
                src="../../assets/Projects/Projet libre.png"
                alt="Projet Libre"
                class="img__card"
                />
                <div class="card__data">
                <h2 class="card__title">Virtualine</h2>
                <span class="card__description">
                    <ul>
                        <li>Développement d'un moteur de jeu 2D, avec interface intuitive pour le rendu graphique, animations, son, collisions, création de cartes et gestion des ennemis.</li>
                        <li>Réalisé avec Flutter et Dart</li>
                    </ul>
                </span>
                <a
                    href="https://github.com/EpitechWebAcademiePromo2024/W-PRO-432-LYN-4-1-projetlibre-kezon.lacheteau"
                    target="_blank"
                    class="card__button"
                    rel="noopener noreferrer"
                >Voir plus</a>
                </div>
            </article>

            <article class="card__article">
                <img
                src="../../assets/Projects/gaming.png"
                alt="Jeu en HTML, JS et Phaser"
                class="img__card"
                />
                <div class="card__data">
                <h2 class="card__title">HTML5 Gaming</h2>
                <span class="card__description">
                    <ul>
                        <li>Jeu d'énigme, avec une histoire et en 2D</li>
                        <li>Réalisé avec HTML, Javascipt, Phaser et Tiled</li>
                    </ul>
                </span>
                <a href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-280-LYN-4-1-gaming-thomas.meyet"
                    target="_blank"
                    class="card__button"
                    rel="noopener noreferrer"
                    >Voir plus</a>
            </div>
            </article>
        </div>
        </div>
    )
}
export default Project;