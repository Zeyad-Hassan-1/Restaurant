import { menu } from "./menu.js"
import { home } from "./Home.js"
import {navLinks,nav_ul,updateIsclicked,isClicked} from "./HamburgerMenu.js"
import './HamburgerMenu.js';

export const Contact = document.querySelector('.Contact-us')

const contact_us = document.querySelectorAll('.Contact-tab')

contact_us.forEach(element => {

        element.addEventListener("click", () => {
                Contact.style.display = 'flex';
                home.style.display = 'none';
                home.style.opacity = '0';
                menu.style.display = 'none';

                if (isClicked == 'yes') {

                        nav_ul.style.display = 'none'
                        navLinks.classList.remove('navLinksShow');
                        updateIsclicked('no');
                    }
        })

});
