import '../App.css'
import logo from '../assets/logo.png'
// import * as Scroll from 'react-scroll';
import { Link} from 'react-scroll'
//  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller 

function Navbar(){
    return (
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <div class="flex flex-shrink-0 items-center">
                            <img src={logo} alt='logo' class="logo"/>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <Link activeClass="active" smooth spy to="about" className="text-xl text-slate-400 hover:text-slate-200 duration-300 cursor-pointer">
                                A propos
                            </Link>
                            <Link activeClass="active" className="text-xl text-slate-400 hover:text-slate-200 duration-300 cursor-pointer">
                                Mon parcour
                            </Link>
                            <Link activeClass="active" className="text-xl text-slate-400 hover:text-slate-200 duration-300 cursor-pointer">
                                Mes projets
                            </Link>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <Link activeClass="active" smooth spy to="about" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                        A propos
                    </Link>
                    <Link activeClass="active" smooth spy to="about" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Mon parcour
                    </Link>
                    <Link activeClass="active" smooth spy to="about" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Mes projets
                    </Link>
                </div>
            </div>
        </div>
    </nav>
    );
}
export default Navbar;