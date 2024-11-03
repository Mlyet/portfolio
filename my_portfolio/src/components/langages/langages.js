import './langages.css';

function Langages() {
    return(
        <div id="body">
            <div id="wrapper">
                <h1 className="title">Langages et Logiciels</h1>
                
                <h1 className="text t1">HTML<span>Langage de balisage web</span></h1>
                <h1 className="text t2">CSS<span>Langage de style web</span></h1>
                <h1 className="text t3">SCSS/SASS<span>CSS amélioré avec variables et imbrications</span></h1>
                <h1 className="text t4">Javascipt<span>Langage de programmation web</span></h1>
                <h1 className="text t5">TypeScript<span>JavaScript avec typage</span></h1>
                <h1 className="text t6">React<span>Bibliothèque JavaScript pour interfaces</span></h1>
                <h1 className="text t7">Angular<span>Framework JavaScript pour applications web</span></h1>
                <h1 className="text t8">PHP<span>Langage de programmation web côté serveur</span></h1>
                <h1 className="text t9">Symfony<span>Framework PHP pour applications web</span></h1>
                <h1 className="text t10">Mysql, MairaDB<span>Système de gestion de base de données</span></h1>
                <h1 className="text t11">Docker<span>Plateforme de conteneurs virtuels</span></h1>
                <h1 className="text t12">Figma<span>Outil de conception graphique collaboratif</span></h1>
                <h1 className="text t13">Visual Studio Code<span>Éditeur de code polyvalent</span></h1>
                <div className="images">
                    <img src="../../assets/langagesTools/html.jpeg" className="i1 img" alt="Images HTML"/>
                    <img src="../../assets/langagesTools/css.jpeg" className="i2 img" alt="Images CSS"/>
                    <img src="../../assets/langagesTools/sass.jpeg" className="i3 img" alt="Images SCSS"/>
                    <img src="../../assets/langagesTools/Js.png" className="i4 img" alt="Images Javascipt"/>
                    <img src="../../assets/langagesTools/typescript.png" className="i5 img" alt="Images TypeScript"/>
                    <img src="../../assets/langagesTools/React-JS.png" className="i6 img" alt="Images React"/>
                    <img src="../../assets/langagesTools/image_angular.png" className="i7 img" alt="Images Angular"/>
                    <img src="../../assets/langagesTools/php.png" className="i8 img" alt="Images PHP"/>
                    <img src="../../assets/langagesTools/symfony.png" className="i9 img" alt="Images Symfony"/>
                    <img src="../../assets/langagesTools/mysql.jpeg" className="i10 img" alt="Images MairaDB et Mysql"/>
                    <img src="../../assets/langagesTools/logo-docker.jpg" className="i11 img" alt="Images Docker"/>
                    <img src="../../assets/langagesTools/logo_figma.png" className="i12 img" alt="Images Figma"/>
                    <img src="../../assets/langagesTools/vs code.png" className="i13 img" alt="Images Visual Studio Code"/>
                </div>
            </div>
        </div>
    );
}

export default Langages;