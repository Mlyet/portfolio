import '../App.css'
import me from '../assets/pictureMe.jpg'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Me() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section class="two">
                <div class="divMe">
                    <h1 data-rate=".4" data-direction="vertical">A propos de moi</h1>
                </div>
                <div class= "auto flex justify center gap-4">
                        <img src={me}  alt='Thomas' className=' md:w-32 lg:w-48'/>
                </div>
            </section>
    );
}
export default Me;