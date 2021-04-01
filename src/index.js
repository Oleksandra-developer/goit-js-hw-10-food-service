import './styles.css';
import dishTpl from './tamplates/dish.hbs';
import menuData from './menu.json';

const body = document.querySelector("body");

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = dishTpl(menuData[0]);

function createAllDishesCards(menuData) {
    menuList.innerHTML = menuData.map(dishTpl).join('');
};
createAllDishesCards(menuData);


const checkBox = document.querySelector('#theme-switch-toggle');
checkBox.addEventListener('change', toChangeTheme);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const savedTheme = localStorage.getItem('Theme');

function toChangeTheme(event) {    
    body.classList.toggle(DARK);
    if (body.classList.contains(DARK)) {
         localStorage.setItem('Theme', DARK);
        checkBox.setAttribute('checked', true);
       
    } else {
       localStorage.setItem('Theme', LIGHT);
        checkBox.setAttribute('checked', false);
    }
    
}

if (savedTheme === Theme.DARK) {
    body.classList.add(DARK);
     checkBox.setAttribute('checked', true);
}


