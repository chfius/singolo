// Navigation task
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

// Slider task

const slide1 = document.querySelector(".slider_item1");
const slide2 = document.querySelector(".slider_item2");
const items = [slide1, slide2];
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

document.querySelector(".control.left").addEventListener("click", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".control.right").addEventListener("click", function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

const blackPhoneVert = document.querySelector(".tel_vert");
const blackPhoneGor = document.querySelector(".tel_gor");
slide1.addEventListener("click", (e) => {
  if (e.target.className === "tel_vert") {
    blackPhoneVert.src =
      blackPhoneVert.src.indexOf("phone-vertical-bl") !== -1
        ? "./assets/img/phone-vertical.png"
        : "./assets/img/phone-vertical-bl.png";
  }
  if (e.target.className === "tel_gor") {
    blackPhoneGor.src =
      blackPhoneGor.src.indexOf("phone-horizontal-bl") !== -1
        ? "./assets/img/phone-horizontal.png"
        : "./assets/img/phone-horizontal-bl.png";
  }
});

// Portfolio task

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

// Form task

const formContainer = document.querySelector(".form_fields");
const modalWraper = document.querySelector(".modal_wraper");
const submitButton = document.querySelector(".submit");
const subjectForm = document.querySelector("#subject");
const describeForm = document.querySelector("#describe");
const modalMsg = document.querySelector(".modal_msg");
submitButton.addEventListener("click", e => {
  if (document.querySelector("#username").value && (document.querySelector("#email").value.indexOf('@')) + 1) {
    e.preventDefault();
    modalWraper.style.display = "flex";
    modalMsg.insertAdjacentHTML("beforeend", `<p>The letter was sent</p>`);
    let subjectValue = subjectForm.value || "No subject";
    modalMsg.insertAdjacentHTML("beforeend", `<p>Subject: ${subjectValue}</p>`);
    let describeField = describeForm.value || "No description";
    modalMsg.insertAdjacentHTML(
      "beforeend",
      `<p>Description: ${describeField}</p><button class="close-btn" type="button">OK</button>`
    );
    const hidenModal = document.querySelector(".close-btn");
    hidenModal.addEventListener("click", e => {
      e.preventDefault();
      modalWraper.style.display = "none";
      formContainer.reset();
      modalMsg.innerHTML = ``;
    });
  }
});
