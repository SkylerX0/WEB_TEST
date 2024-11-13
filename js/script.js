let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//navbar mobie
if (menu) { // Kiểm tra xem menu không phải là null
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
} else {
  console.error("Không tìm thấy phần tử có ID 'menu-bars'!");
}

//search form
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

//swiper-slide

var swiper = new Swiper(".home-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});