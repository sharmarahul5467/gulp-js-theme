var nav = document.querySelector('#nav');
var toggleMenu = document.getElementById("toggle-nav");
var closeMenu = document.getElementById("close-nav");
var menuBar = document.querySelector('.main-menu');

toggleMenu.addEventListener('click', function(e){
    
    nav.classList.toggle('open')
    // menuBar.classList.toggle('open')
});

closeMenu.addEventListener('click', function(){
    nav.classList.remove('open')
    // menuBar.classList.remove('open')
})  

