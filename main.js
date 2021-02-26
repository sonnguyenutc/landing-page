// Xử lý phần active của menu
let itemMenu = document.querySelectorAll('.nav__link');
for(let i = 0; i < itemMenu.length ; i++) {
    itemMenu[i].onclick = function() {
        // Bo active cu
        for(let i = 0; i<itemMenu.length; i++){
            itemMenu[i].classList.remove('active__itemMenu');
        }
        this.classList.add('active__itemMenu');
        console.log(this)
    }
}
// hidden / show menu trên ipad, mobile
function menu() {
    let open = document.querySelector('.open');
    let close = document.querySelector('.close');
    open.onclick = function() {
        open.classList.toggle('hidden')
        close.classList.toggle('show')
        nav.style.display = "block";
        
    }
    close.onclick = function() {
        open.classList.toggle('hidden')
        close.classList.toggle('show')
        nav.style.display = "";

    }
}
menu();

// Xử lý scroll Nav
let header = document.querySelector('.header');
let nav = document.querySelector('.nav__list');
let brandScroll =document.querySelector('.brand__wrapper');
let card = document.querySelector('.product__wrap-card');
let aboutLeft = document.querySelector('.about__left-wrap');
let aboutRight = document.querySelector('.about__wrap');
let contact = document.querySelector('.new__contact');
let up = document.querySelector('.btn-icon');
function scrollHeader() {
    let sttHeader = sttBrand = sttCard = sttAbout = sttContact = upIcon = false;
    window.onscroll = function() {
        // Scroll Header
        if(window.pageYOffset > 100) {
            if(sttHeader == false) {
                header.classList.add('active-scroll');
                sttHeader = true;
            }
            
        }
        else if(window.pageYOffset <= 100) {
            if(sttHeader == true) {
                header.classList.remove('active-scroll');
                sttHeader = false;
            }
        }
        // Scroll Brand
        if(window.pageYOffset > 280) {
            if(sttBrand == false) {
                sttBrand = true;
                brandScroll.classList.add('active-brand__wrapper')
            }
        }
        else if(window.pageYOffset <= 280) {
            if(sttBrand == true) {
                brandScroll.classList.remove('active-brand__wrapper');
                sttBrand = false;
            }
        }
        // Scroll Card
        if(window.pageYOffset > 620) {
            if(sttCard == false) {
                sttCard = true;
                card.classList.add('active-product__wrap-card')
            }
        }
        else if(window.pageYOffset <= 620) {
            if(sttCard == true) {
                card.classList.remove('active-product__wrap-card');
                sttCard = false;
            }
        }
        // Scroll About us
        if(window.pageYOffset > 970) {
            if(sttAbout == false) {
                sttAbout = true;
                aboutLeft.classList.add('actiev-about__left-wrap')
                aboutRight.classList.add('active-about__wrap')
            }
        }
        else if(window.pageYOffset <= 970) {
            if(sttAbout == true) {
                aboutLeft.classList.remove('actiev-about__left-wrap');
                aboutRight.classList.remove('active-about__wrap');
                sttAbout = false;
            }
        }
        //Scroll Contact  
        if(window.pageYOffset > 2000) {
            if(sttContact == false) {
                sttContact = true;
                contact.classList.add('active-new__contact')
            }
        }
        else if(window.pageYOffset <= 2000) {
            if(sttContact == true) {
                contact.classList.remove('active-new__contact');
                sttContact = false;
            }
        }

        // Up Icon 
        if(window.pageYOffset > 1000) {
            if(upIcon == false) {
                upIcon = true;
                up.classList.add('active-btn-icon')
            }
        }
        else if(window.pageYOffset <= 100) {
            if(upIcon == true) {
                up.classList.remove('active-btn-icon');
                upIcon = false;
                console.log(" <1000")
            }
        }
        
    }
}
scrollHeader();

let head = () => {
    header.classList.add('active-header')
}
let homeText = () => {
    let left = document.querySelector('.left__wrapper');
    left.classList.add('left__wrapper-active');
}
let homeImg = () => {
    let right = document.querySelector('.right__img ');
    right.classList.add('active-right__img');
}

// Hiệu ứng chuyển động
function animate() {
    setTimeout(head, 700);
    setTimeout(homeImg, 800);
    setTimeout(homeText, 800);
}
animate();
