import '../src/style.css'
import avatar from './assets/avatar.jpg';
import arrowDown from './assets/scrollDown.png';

const avatarImg = document.querySelector('.a-img');
const scrollImg = document.querySelector('.s-img');
avatarImg.src = avatar;
scrollImg.src = arrowDown

document.body.style.display = 'flex'