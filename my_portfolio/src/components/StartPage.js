import '../App.css'
import React,{useEffect} from "react";


function StartPage (){
    useEffect(() => {
        window.addEventListener("scroll", () => {

            /*************** Effet qui descend *******************/ 
            
            const target = document.querySelectorAll('.scroll');

            var index = 0, length =  target.length;
            for (index; index<length; index++) {
                var pos = window.pageYOffset * target[index].dataset.rate;
                if (target[index].dataset.direction === 'vertical') {
                    target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
                } else {
                var posX = window.pageYOffset * target[index].dataset.ratex;
                var posY = window.pageYOffset * target[index].dataset.ratey;
                target[index].style.transform = 'translate3d('+ posX+'px, '+ posY+'px, 0px)';
                }
            }
        })
    })
    return(
        <section class="one">
            <h1 class="scroll " data-rate=".4" data-direction="vertical">Thomas MEYET</h1>
        </section>

    );
}
export default StartPage;