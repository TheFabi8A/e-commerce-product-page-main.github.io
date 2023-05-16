// navbar
const menuButton = document.getElementById('button-menu-navbar-mobile');
const menuClose = document.getElementById('button-close-navbar-mobile');
const navbarMobile = document.getElementById('container-hidden-navbar-mobile');

menuButton.addEventListener('click',() => {
  navbarMobile.classList.remove('-translate-x-full');
  navbarMobile.classList.add('shadow-3xl');
})

menuClose.addEventListener('click',()=> {
  navbarMobile.classList.add('-translate-x-full');
  navbarMobile.classList.remove('shadow-3xl');
})
// ...
// carousel
const carousels = document.querySelectorAll('.carousel-inner');
const prevButtons = document.querySelectorAll('.btn-prev');
const nextButtons = document.querySelectorAll('.btn-next');

const carouselGlobal = document.getElementById('carousel-global');
const btnCloseGlobal = document.getElementById('btn-close-global');
const productItemsGlobal = document.querySelectorAll('.item-product-global')

const productImageDesktop = document.getElementById('product-image-desktop');
const productItems = document.querySelectorAll('.item-product-desktop');

productItems.forEach((productItem, index) => {
  productItem.addEventListener('click', () => {
    [...productImageDesktop.classList].forEach(className => {
      if (/bg-product-\d+/.test(className)) {
        productImageDesktop.classList.remove(className);
      }
    });
    productImageDesktop.classList.add(`bg-product-${index + 1}`);
  });
});
``

productImageDesktop.addEventListener('click',() =>{
  carouselGlobal.classList.remove('hidden');
})

btnCloseGlobal.addEventListener('click',() => {
  carouselGlobal.classList.add('hidden');
})

carousels.forEach((carousel, index) => {
  const prevButton = prevButtons[index];
  const nextButton = nextButtons[index];
  let currentSlide = 1;

  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

  productItemsGlobal.forEach((productItem, productIndex) => {
    productItem.addEventListener('click', () => {
      currentSlide = productIndex + 1;
      carousel.style.transition = 'transform 500ms ease-in-out';
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  });

  prevButton.addEventListener('click', () => {
    currentSlide--;
    carousel.style.transition = 'transform 500ms ease-in-out';
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    if (currentSlide === 0) {
      setTimeout(() => {
        currentSlide = 4;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }, 500);
    }
  });

  nextButton.addEventListener('click', () => {
    currentSlide++;
    carousel.style.transition = 'transform 500ms ease-in-out';
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    if (currentSlide === 5) {
      setTimeout(() => {
        currentSlide = 1;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }, 500);
    }
  });
});

// ...
// cart-card
const iconCartHeader = document.getElementById('icon-cart-header');
const cartCard = document.getElementById('cart-card');

iconCartHeader.addEventListener('click', () => {
  cartCard.classList.toggle('hidden');
})

// cart-system (pendiente)
const amountProduct = document.getElementById('amount-product');
const btnAddToCart = document.getElementById('btn-add-to-cart');
