import createScrollListener from './scrollHandler.js';
import navColorsScrollListener from './navMenuHandler.js';
import navColorsHoverListener from './navMenuHoverHandler.js';

// createScrollListener();
navColorsScrollListener();
navColorsHoverListener();

function iconDataToggle(container, icon, data) {
    container.addEventListener("click", () => {
        console.log(icon.className.indexOf(hideClass));
        console.log(data.className.indexOf(hideClass));
    
        if (icon.className.indexOf(hideClass) == -1) {
            icon.className += hideClass;
            data.className = data.className.replace(hideClass, "");
            return;
        }
    
        if (data.className.indexOf(hideClass) == -1) {
            data.className += hideClass;
            icon.className = icon.className.replace(hideClass, "");
        }
    });
}

const hideClass = " hide-s";

const phone = document.getElementById("phone");
const phoneIcon = document.getElementById("phoneIcon");
const phoneData = document.getElementById("phoneData");
iconDataToggle(phone, phoneIcon, phoneData);

const email = document.getElementById("email");
const emailIcon = document.getElementById("emailIcon");
const emailData = document.getElementById("emailData");
iconDataToggle(email, emailIcon, emailData);