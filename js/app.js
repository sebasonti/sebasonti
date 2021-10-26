// import createScrollListener from './scrollHandler.js';
import { navColorsScrollListener, toggleMenuColorScrollListener} from './navMenuHandler.js';
import navColorsHoverListener from './navMenuHoverHandler.js';

// createScrollListener();
navColorsScrollListener();
toggleMenuColorScrollListener();
navColorsHoverListener();

function iconDataToggle(container, icon, data) {
    const hideClass = "inactive";
    container.addEventListener("click", () => {
        icon.classList.toggle(hideClass);
        data.classList.toggle(hideClass);
    });
}


const phone = document.getElementById("phone");
const phoneIcon = document.getElementById("phoneIcon");
const phoneData = document.getElementById("phoneData");
iconDataToggle(phone, phoneIcon, phoneData);

const email = document.getElementById("email");
const emailIcon = document.getElementById("emailIcon");
const emailData = document.getElementById("emailData");
iconDataToggle(email, emailIcon, emailData);

const toggleNavMenu = document.querySelector('.toggle-nav-menu');
const navMenu = document.querySelector('.nav-menu');
const menu = document.getElementById("nav-menu-header");

toggleNavMenu.addEventListener("click", () => {
    menu.classList.toggle("inactive");
    toggleNavMenu.classList.toggle("inactive");
});


navMenu.addEventListener('click', () => {
    console.log(menu.classList);
    menu.classList.add("inactive");
    toggleNavMenu.classList.remove("inactive");
});