import disableScroll from './preventScroll.js';
import { enableScroll } from './preventScroll.js';

const screenHeight = window.innerHeight;
const content = document.querySelector('main');
let lastScroll = scrollY;
const interval = 500;

const isScrolledToSection = section => {
    if (section * screenHeight === scrollY) {
        enableScroll();
        createScrollListener();
        lastScroll = section * screenHeight;
    } else {
        content.children[section].scrollIntoView(0, 0);
        setTimeout(isScrolledToSection, interval, section);
    }
}

const scrollToSection = () => {
    const currentSection = Math.floor(scrollY / screenHeight);
    if (scrollY - (currentSection * screenHeight) > (screenHeight / 15) && scrollY > lastScroll) {
        deleteScrollListener();
        disableScroll();
        isScrolledToSection(currentSection + 1);
    }
    else if (scrollY - (currentSection * screenHeight) < (14 * screenHeight / 15) && scrollY < lastScroll) {
        deleteScrollListener();
        disableScroll();
        isScrolledToSection(currentSection);
    }
}

const createScrollListener = () => {
    addEventListener('scroll', scrollToSection);
}

const deleteScrollListener = () => {
    removeEventListener('scroll', scrollToSection);
}

const navMenu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', () => {
    // deleteScrollListener();
    setTimeout(() => {
        lastScroll = scrollY;
        // createScrollListener();
    }, 750);
});

export default createScrollListener;