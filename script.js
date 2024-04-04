let menuElement = document.querySelector('.menu');
let headerElement = document.querySelector('.header');
let collapseElement =document.querySelector('.collapse');
menuElement.addEventListener('click', state);
function state() {
    collapseElement.classList.toggle('show');
    menuElement.classList.toggle('active');
    headerElement.classList.toggle('fix');
}
