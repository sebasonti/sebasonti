const menuItems = document.querySelectorAll('.menu-item');
const navMenu = document.querySelector('.nav-menu');
const navColors = {
    blue: '#569cd6',
    lightBlue: '#9cdcfe',
    green: '#4ec9b0',
    salmon: '#d69d85',
    purple: '#cba7d5',
    yellow: '#d7e0c1',
    lightColor: '#ebecf1',
}

const colors = [navColors.blue, navColors.green, navColors.salmon, navColors.lightBlue, navColors.purple, navColors.yellow];

const colorChanger = () => {
    let n = 0;
    return () => {
        n++;
        if (n > colors.length - 1) n = 0;
        return n;
    }
};

const nextColor = colorChanger();

const leaveColor = e => {
    e.path[0].style.color = 'inherit';
}

const enterColor = e => {
    const color = colors[nextColor()];
    e.path[0].style.color = color;
    e.path[0].querySelector('.menu-title').style.setProperty('--hover-color', color);
}

const navColorsHoverListener = () => {
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('mouseleave', leaveColor);
        menuItem.addEventListener('mouseenter', enterColor);
    });
}

const presentation = document.getElementById("presentation");
presentation.addEventListener('click', () => {
    presentation.style.backgroundColor = colors[nextColor()];
});

export default navColorsHoverListener;