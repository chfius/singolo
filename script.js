// Navigation
const navMenu = document.querySelector(".menu_items");
navMenu.addEventListener('click', (e) => {
  if (e.target.parentElement.className === "menu_item") {
    const elements = document.querySelectorAll(".menu_item");
    elements.forEach(e => {
      e.classList.remove("menu_item-active");
    });
    e.target.parentElement.classList.add("menu_item-active");
  }
});

// Portfolio

const portfolioImages = document.querySelector('.image_items');
portfolioImages.addEventListener('click', (e) => {
  const imegeItem = document.querySelectorAll('.image_item');
  imegeItem.forEach((el) => {
    el.classList.remove('portfolio_img_active')
  });
  if (e.target.parentElement.className === 'image_item') {
    if (e.target.parentElement.className.indexOf('portfolio_img_active') + 1) {
      e.target.parentElement.classList.remove('portfolio_img_active')
    } else { e.target.parentElement.classList.add('portfolio_img_active') }
  }
})

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const indexImg = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34]
const arrImg = document.querySelectorAll('.portfolio_img');
const portfolioMenu = document.querySelector('.portfolio_menu');
portfolioMenu.addEventListener('click', (e) => {

  if (e.target.className === 'menu_item2') {
    let index = 0
    shuffle(indexImg);
    arrImg.forEach((el) => {
      el.src = `assets/img/${indexImg[index]}.jpg`
      index++
    });

  }
  if (e.target.className === "menu_item2") {
    const elements = document.querySelectorAll(".menu_item2");
    elements.forEach(e => {
      e.classList.remove("menu_item_active");
    });
    e.target.classList.add("menu_item_active");
  }
})
