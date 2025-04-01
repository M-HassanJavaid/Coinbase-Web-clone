let NavBtn = document.querySelector('.fa-bars');
console.log(NavBtn)
let Navbar = document.querySelector('nav');
console.log(Navbar)
let check = 0;

NavBtn.addEventListener('click' , ()=>{
    if (check === 0) {
        Navbar.style.height = '295px';
        check = 1;
    } else {
        Navbar.style.height = '60px';
        check = 0;
    }
})