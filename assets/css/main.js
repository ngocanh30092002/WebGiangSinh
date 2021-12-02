// Container Header

// Container Header Follow Button
const titleButton = document.querySelector('.js-btn-follow');
function Loading(){
    titleButton.innerHTML = '<div class="title-btn-load"><i class="fas fa-spinner"></i></div><div class="btn-follow2"><button></button></div>';
    setTimeout(function(){
        titleButton.innerHTML = '';
        titleButton.innerHTML = '<button><i class="fas fa-user-check"></i></button>';
        titleButton.removeEventListener('click',Loading);
        titleButton.addEventListener('click',Loading2);
    },2000);
}
function Loading2(){
    titleButton.innerHTML = '<div class="title-btn-load"><i class="fas fa-spinner"></i></div><div class="btn-follow2"><button></button></div>';
    setTimeout(function(){
        titleButton.innerHTML = '';
        titleButton.innerHTML = '<button>Follow</button>';
        titleButton.addEventListener('click',Loading);
    },2000);
}
titleButton.addEventListener('click',Loading);

// Container Category
const categoryTeam = document.querySelector('.category-team-btn');
const categoryAbout = document.querySelector('.category-about-btn');
const categoryTagged = document.querySelector('.category-tagged-btn');

categoryTeam.addEventListener('click',function (){
    categoryTeam.style.borderTop = 'rgb(2, 2, 2) 2px solid';
    categoryTeam.style.transition = 'linear';
    categoryTeam.style.color = 'black';
    categoryAbout.style.border = 'none';
    categoryTagged.style.border = 'none';
    categoryAbout.style.color = '#8e8e8e';
    categoryTagged.style.color = '#8e8e8e';
});
categoryAbout.addEventListener('click',function (){
    categoryAbout.style.borderTop = 'rgb(2, 2, 2) 2px solid';
    categoryAbout.style.transition = 'linear';
    categoryAbout.style.color = 'black';
    categoryTeam.style.border = 'none';
    categoryTagged.style.border = 'none';
    categoryTeam.style.color = '#8e8e8e';
    categoryTagged.style.color = '#8e8e8e';
});
categoryTagged.addEventListener('click',function (){
    categoryTagged.style.borderTop = 'rgb(2, 2, 2) 2px solid';
    categoryTagged.style.transition = 'linear';
    categoryTagged.style.color = 'black';
    categoryAbout.style.border = 'none';
    categoryTeam.style.border = 'none';
    categoryAbout.style.color = '#8e8e8e';
    categoryTeam.style.color = '#8e8e8e';
});

// Profile Icon - Heart 1
var heartIcons = document.querySelectorAll('.profile-container-heart');
function clickHeart1(){
    heartIcons[0].innerHTML = '<i class="fas fa-heart text-red"></i>';
    heartIcons[0].removeEventListener('click',clickHeart1);
    heartIcons[0].addEventListener('click',clickHeart1_1);
}
function clickHeart1_1(){
    heartIcons[0].innerHTML = '<i class="far fa-heart"></i>';
    heartIcons[0].addEventListener('click',clickHeart1);
}
heartIcons[0].addEventListener('click',clickHeart1);
// Profile Icon - Heart 2
function clickHeart2(){
    heartIcons[1].innerHTML = '<i class="fas fa-heart text-red"></i>';
    heartIcons[1].removeEventListener('click',clickHeart2);
    heartIcons[1].addEventListener('click',clickHeart2_2);
}
function clickHeart2_2(){
    heartIcons[1].innerHTML = '<i class="far fa-heart text-black"></i>';
    heartIcons[1].addEventListener('click',clickHeart2);
}
heartIcons[1].addEventListener('click',clickHeart2);
// Profile Icon - Heart 3
function clickHeart3(){
    heartIcons[2].innerHTML = '<i class="fas fa-heart text-red"></i>';
    heartIcons[2].removeEventListener('click',clickHeart3);
    heartIcons[2].addEventListener('click',clickHeart3_3);
}
function clickHeart3_3(){
    heartIcons[2].innerHTML = '<i class="far fa-heart"></i>';
    heartIcons[2].addEventListener('click',clickHeart3);
}
heartIcons[2].addEventListener('click',clickHeart3);
// Profile Icon - Heart 4
function clickHeart4(){
    heartIcons[3].innerHTML = '<i class="fas fa-heart text-red"></i>';
    heartIcons[3].removeEventListener('click',clickHeart4);
    heartIcons[3].addEventListener('click',clickHeart4_4);
}
function clickHeart4_4(){
    heartIcons[3].innerHTML = '<i class="far fa-heart text-black"></i>';
    heartIcons[3].addEventListener('click',clickHeart4);
}
heartIcons[3].addEventListener('click',clickHeart4);
// Profile Icon - Heart 4
function clickHeart5(){
    heartIcons[4].innerHTML = '<i class="fas fa-heart text-red"></i>';
    heartIcons[4].removeEventListener('click',clickHeart5);
    heartIcons[4].addEventListener('click', clickHeart5_5);
}
function clickHeart5_5(){
    heartIcons[4].innerHTML = '<i class="far fa-heart"></i>';
    heartIcons[4].addEventListener('click',clickHeart5);
}
heartIcons[4].addEventListener('click',clickHeart5);

// Category About
const containerProfile = document.querySelector('.container-profile');
const containerAbout = document.querySelector('.container-about');
const containerTagged = document.querySelector('.container-tagged');
categoryAbout.addEventListener('click',function(){
    containerProfile.style.display = 'none';
    containerAbout.style.display  = 'block';
    containerTagged.style.display = 'none';
})
categoryTeam.addEventListener('click',function(){
    containerProfile.style.display = 'flex';
    containerAbout.style.display  = 'none';
    containerTagged.style.display = 'none';
})
categoryTagged.addEventListener('click',function(){
    containerProfile.style.display = 'none';
    containerAbout.style.display  = 'none';
    containerTagged.style.display = 'block';
})

// Responsive (Mobie)
const navList = document.querySelector('.nav-btn');
const navListElements = document.querySelectorAll('.nav-list li');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.getElementById('nav');
function clickMobileMenu(){
    navList.style.display = 'block';
    mobileMenu.style.color = 'red';
    mobileMenu.style.backgroundColor = 'white';
    nav.style.background = 'rgba(0,0,0,0.2)';
    nav.style.height = '100vh';
    mobileMenu.innerHTML = '<i class="fas fa-times"></i>'
    mobileMenu.removeEventListener('click',clickMobileMenu);
    mobileMenu.addEventListener('click',clickMobileMenu2);
}
function clickMobileMenu2(){
    navList.style.display = 'none';
    nav.style.background = 'none';
    nav.style.height = '50px';
    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenu.style.color = '';
    mobileMenu.style.backgroundColor = '';
    mobileMenu.removeEventListener('click',clickMobileMenu2);
    mobileMenu.addEventListener('click',clickMobileMenu);
}

if (window.matchMedia("(max-width: 46.1875em)").matches) {
    mobileMenu.addEventListener('click',clickMobileMenu)
    for(var item of navListElements){
        item.addEventListener('click',clickMobileMenu2)
    }
}
// if(screen.availWidth <= 739){
//     mobileMenu.addEventListener('click',clickMobileMenu)
//     for(var item of navListElements){
//         item.addEventListener('click',clickMobileMenu2)
//     }
// }