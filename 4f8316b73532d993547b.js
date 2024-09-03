import './menu.js'
import './contact.js'



const menu_tab = document.querySelector('.menu-tab-butt')
export const nav_ul = document.querySelector('.nav-ul')
export const navLinks = document.querySelector('.navLinks')

export let isClicked = 'no';

export function updateIsclicked(newValue) {
    return isClicked = newValue;
}



menu_tab.addEventListener("click", () => {
    if (isClicked == 'no') {
        nav_ul.style.display = 'flex';
        navLinks.classList.add('navLinksShow');
        isClicked = 'yes';
    }
    else {
        nav_ul.style.display = 'none'
        navLinks.classList.remove('navLinksShow')
        isClicked = 'no';
    }

    console.log(isClicked)

})

function monitorSize() {
    if (window.matchMedia("(min-width: 769px)").matches) {
        nav_ul.style.display = 'flex';
        navLinks.classList.remove('navLinksShow')
        isClicked = 'no';
    }
}

monitorSize();
window.addEventListener('resize',monitorSize)