import './styles.css';
import dishTpl from './tamplates/dish.hbs';
import menuData from './menu.json';
// const menuJS = JSON.parse(menu);
console.log(dishTpl);
const menuList = document.querySelector('.js-menu');
menuList.innerHTML = dishTpl(menuData[0]);
// console.log(menuList);
// console.log("dish");