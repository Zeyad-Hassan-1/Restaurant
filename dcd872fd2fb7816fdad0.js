import './HamburgerMenu.js';
import {Contact} from "./contact.js"
import {menu} from "./menu.js"
import './menu.js';
import './nightmode.js';
import './contact.js';
import '../colors.css';
import '../contactUs.css';
import '../effects.css';
import '../menu.css';
import '../style.css';
import '../mediaqueries.css';
import '../NavLinks.css'

export const home = document.querySelector(".Home");

const logo = document.querySelector('.logo')

logo.addEventListener("click",()=>{
        Contact.style.display = 'none';
        home.style.display = 'grid' ;
        home.style.opacity = '1';
        menu.style.display = 'none';

})