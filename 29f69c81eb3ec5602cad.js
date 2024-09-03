export const menu_but = document.querySelectorAll(".menu-tab");

export const menu = document.querySelector('.Menu');

export let tabs = 'home';

import './HamburgerMenu.js';
import { home } from "./Home.js";
import { Contact } from "./contact.js"
import { navLinks, nav_ul, updateIsclicked , isClicked} from "./HamburgerMenu.js"

console.log(menu_but)

menu_but.forEach(element => {

    element.addEventListener("click", () => {

        menu.style.display = 'flex';
        menu.style.opacity = '1';
        home.style.display = 'none';
        home.style.opacity = '0';
        Contact.style.display = 'none';

        if (isClicked == 'yes') {

            nav_ul.style.display = 'none'
            navLinks.classList.remove('navLinksShow');
            updateIsclicked('no');
        }

    })
});
