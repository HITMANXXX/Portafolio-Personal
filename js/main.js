/*--------------- menuIcon navbar -----------------*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*--------------- activacion de los links con el scroll -----------------*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*---------------barra de navegacion fija -----------------*/
  let header = document.querySelector(".header");
  //class sticky va en el header del css para que se pueda aplicar en estilo
  header.classList.toggle("sticky", window.scrollY > 100);

  /*--------------- remover el menu cuando se da click en el navbar link (scroll) -----------------*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*--------------- swiper slide -----------------*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*--------------- dark light Mode -----------------*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*------------Scroll Reveal ------------------*/
ScrollReveal({
  //reset: true,
  distance: "100px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

/*--------------------Send EmailJS------------------------*/
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".btn");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const phoneInput = document.querySelector("#user-phone");
const subjectInput = document.querySelector("#user-subject");
const messageInput = document.querySelector("#message");

//datos que necesitamos del EmailJS
const publicKey = "Shfc5sr8VE3Vk5ibY";
const serviceID = "service_foth144";
const templateID = "template_t55u8ym";

//iniciamos EmailJS con la publicKey
emailjs.init(publicKey);

//creamos el evento de enviar a el formulario
contactForm.addEventListener("submit", (e) => {
  //prevenimos el comportamiento predeterminado
  e.preventDefault();
  //obtenemos todos los valores de los input
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
  Swal.fire({
    title: "Estas Seguro?",
    text: "Deseas de enviar la siguiente informacion de contacto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0f5aa1fc",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Confirmar!",
  }).then((result) => {
    if (result.isConfirmed) {
      emailjs.send(serviceID, templateID, inputFields).then(
        () => {
          nameInput.value = "";
          emailInput.value = "";
          phoneInput.value = "";
          subjectInput.value = "";
          messageInput.value = "";
          Swal.fire(
            "Enviada!",
            "Su informacion se ha enviado correctamente.",
            "success"
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  });
});

/*--------------------popup services------------------------*/
const popupViews = document.querySelectorAll(".popup-view");
const popupBtns = document.querySelectorAll(".popup-btn");
const closeBtns = document.querySelectorAll(".close-btn");

//Boton click para abrir el popup 
const popup = function (popupClick) {
  popupViews[popupClick].classList.add("active");
};

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//Boton para cerrar el popup 
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove("active");
    })
  })
})
