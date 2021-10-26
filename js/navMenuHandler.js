const screenHeight = window.innerHeight;
const navMenu = document.querySelector('.nav-menu');
const navColors = {
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
    if (innerWidth > 480 && innerWidth < 1200)
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
                bgColor = navColors.transparent;
                color = navColors.lightColor;
                break;
            default:
                break;
        }
        //title.style.backgroundColor = bgColor;
        navMenu.style.backgroundColor = bgColor;
        //title.style.color = color;
        navMenu.style.color = color;
        navMenu.style.borderColor = color;
    }
}

const navColorsScrollListener = () => addEventListener('scroll', titleColors);

export default navColorsScrollListener;