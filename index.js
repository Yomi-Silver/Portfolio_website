const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

about.addEventListener("click", (e) => {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //remove active from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //hide all other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// hamburger.addEventListener("click", () => {
//   NavMenu.classList.toggle("active");
// }
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// navLink.forEach(link => {link.addEventListener("click", () => {

navLink.forEach(n => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
// }
// );

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
// }
// );

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
// }
// );

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
// }
// );

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     hamburger.classList.remove("active");
//   }
// }
// );

// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList
