const screenHeight = window.innerHeight;
const navMenu = document.querySelector('.nav-menu');
const navColors = {
    purple: '#cba7d5',
    blue: '#569cd6',
    lightBlue: '#9cdcfe',
    green: '#4ec9b0',
    salmon: '#d69d85',
    beige: '#d9d9d9',
    lightColor: '#d9d9d9',
    fainterColor: '#ebecf1c0',
    darkColor: '#050e13',
    darkFainterColor: '#050e13c0',
    transparent: 'transparent',
}

const titleColors = () => {
    if (innerWidth > 480)
    {
        const currentSection = Math.round(scrollY / screenHeight);
        let bgColor, color;
        switch (currentSection) {
            case 0:
            case 2:
                bgColor = navColors.transparent;
                color = navColors.lightColor;
                break;
            case 1:
            case 3:
                bgColor = navColors.transparent;
                color = navColors.darkColor;
                break;
            case 4:
                bgColor = navColors.darkFainterColor;
                color = navColors.lightColor;
                break;
            case 5:
                bgColor = navColors.darkFainterColor;
                color = navColors.lightColor;
                break;
            default:
                break;
        }
        navMenu.style.backgroundColor = bgColor;
        navMenu.style.color = color;
        navMenu.style.borderColor = color;
    }
}

const navColorsScrollListener = () => addEventListener('scroll', titleColors);

const menuToggle = document.querySelector('.toggle-nav-menu');
const toggleColors = () => {
    if (innerWidth <= 480)
    {
        const currentSection = Math.floor(scrollY / screenHeight);
        let toggleColor, bgColor;
        switch (currentSection) {
            case 0:
                toggleColor = navColors.lightColor;
                bgColor = navColors.darkColor;
                break;
            case 1:
                toggleColor = navColors.green;
                bgColor = navColors.darkColor;
                break;
            case 2:
                toggleColor = navColors.lightBlue;
                bgColor = navColors.darkColor;
                break;
            case 3:
                toggleColor = navColors.darkColor;
                bgColor = navColors.lightColor;
                break;
            case 4:
                toggleColor = navColors.purple;
                bgColor = navColors.darkColor;
                break;
            case 5:
                toggleColor = navColors.salmon;
                bgColor = navColors.darkColor;
                break;
            default:
                break;
        }
        menuToggle.style.color = toggleColor;
        menuToggle.style.borderColor = toggleColor;
        menuToggle.style.backgroundColor = bgColor;
    }
}

const toggleMenuColorScrollListener = () => addEventListener('scroll', toggleColors);

export { navColorsScrollListener, toggleMenuColorScrollListener };
// export default navColorsScrollListener;