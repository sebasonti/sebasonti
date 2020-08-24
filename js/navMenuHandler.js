const screenHeight = window.innerHeight;
const content = document.querySelector('main');
const navMenu = document.querySelector('header');
let title;
const navColors = {
    firstColor: '#206a5d',
    firstAltColor: '#206a5d88',
    secondColor: '#1f4068',
    secondAltColor: '#1f406844',
    thirdColor: '#3b2e52',
    thirdAltColor: '#3b2e5244',
    fourthColor: '#1b1c25',
    fourthAltColor: '#1b1c2544',
    lightTextColor: '#ebecf1',
    fainterColor: '#ebecf1c0',
    titleTextColor: '#ecbc4c'
}

const titleColors = () => {
    const currentSection = Math.round(scrollY / screenHeight);
    title = content.children[currentSection].firstElementChild.firstElementChild;
    let bgColor, color = navColors.titleTextColor;
    switch (currentSection) {
        case 0:
        case 3:
            bgColor = navColors.fainterColor;
            color = navColors.fourthColor;
            break;
        case 1:
            bgColor = navColors.firstColor;
            break;
        case 2:
            bgColor = navColors.secondColor;
            break;
        case 4:
            bgColor = navColors.thirdColor;
            break;
        case 5:
            bgColor = navColors.fourthColor;
            break;
        default:
            break;
    }
    title.style.backgroundColor = bgColor;
    navMenu.style.backgroundColor = bgColor;
    title.style.color = color;
    navMenu.style.color = color;
}

const navColorsListener = () => addEventListener('scroll', titleColors);

export default navColorsListener;