import '../src/style.css'

// Header Images
import avatar from './assets/avatar.jpg';
import arrowDown from './assets/scrollDown.png';

// Project Images
import todo from './assets/Screenshots/todo.png';
import admin from './assets/Screenshots/admin.png';
import battleship from './assets/Screenshots/battleship.png';
import calculator from './assets/Screenshots/calculator.png';
import library from './assets/Screenshots/library.png';
import restaurant from './assets/Screenshots/restaurant.png';
import signup from './assets/Screenshots/signup.png';
import tic from './assets/Screenshots/tic.png';
import weather from './assets/Screenshots/weather.png';


// Header Image Injection
const avatarImg = document.querySelector('.a-img');
const scrollImg = document.querySelector('.s-img');
avatarImg.src = avatar;
scrollImg.src = arrowDown

//Project Image Injection
const todoImg = document.querySelector('.p-todo');
const adminImg = document.querySelector('.p-admin');
const battleshipImg = document.querySelector('.p-battleship');
const calculatorImg = document.querySelector('.p-calculator');
const libraryImg = document.querySelector('.p-library');
const restaurantImg = document.querySelector('.p-restaurant');
const signupImg = document.querySelector('.p-signup');
const ticImg = document.querySelector('.p-tic');
const weatherImg = document.querySelector('.p-weather');
todoImg.src = todo;
adminImg.src = admin;
battleshipImg.src = battleship;
calculatorImg.src = calculator
libraryImg.src = library;
restaurantImg.src = restaurant;
signupImg.src = signup;
ticImg.src = tic;
weatherImg.src = weather;

// SVG loader
// let lnSVG = document.querySelector('.lnSVG');
// lnSVG.src = linkedinSVG;
// console.log(linkedinSVG);


// document.body.style.display = 'flex'