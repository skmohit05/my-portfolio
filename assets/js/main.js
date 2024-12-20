/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills__content'),
//     skillsHeader = document.querySelectorAll('.skills__header')

// function toggleSkills(){
//     let itemClass = this.parentNode.className
    
//     for(i = 0; i < skillsContent.length; i++){
//         skillsContent[i].className = 'skills__content skills__close'
//     }
//     if(itemClass === 'skills__content skills__close'){
//         this.parentNode.className = 'skills__content skills__open'
//     }
// }
    
// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills)
// })

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close'),
    modalContents = document.querySelectorAll('.services__modal-content');

let modal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal')
}  

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

// Close modal when clicking on the background
modalContents.forEach((modalContent, i) => {
    modalViews[i].addEventListener("click", (event) => {
    if (!modalContent.contains(event.target)) {
        modalViews[i].classList.remove('active-modal');
    }
})
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== Portfolio MODAL ====================*/
const pmodalViews = document.querySelectorAll('.portfolios__modal'),
    pmodalBtns = document.querySelectorAll('.portfolios__button'),
    pmodalCloses = document.querySelectorAll('.portfolios__modal-close'),
    pmodalContents = document.querySelectorAll('.portfolios__modal-content');

let pmodal = (pmodalClick) => {
    console.log(pmodalClick, pmodalViews)
    pmodalViews[pmodalClick].classList.add('portfolios-active-modal')
    console.log(pmodalClick, pmodalViews)
}  

pmodalBtns.forEach((pmodalBtn, i) => {
    pmodalBtn.addEventListener('click', () => {
        pmodal(i)
    })
});

// Close modal when clicking on the background
pmodalContents.forEach((modalContent, i) => {
    pmodalViews[i].addEventListener("click", (event) => {
    if (!modalContent.contains(event.target)) {
        pmodalViews[i].classList.remove('portfolios-active-modal');
    }
})
});

pmodalCloses.forEach((pmodalClose) => {
    pmodalClose.addEventListener('click', () => {
        pmodalViews.forEach((pmodalView) => {
            pmodalView.classList.remove('portfolios-active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    }
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        sectionId = current.getAttribute('id')
        const sectionTop = current.offsetTop - 400;

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const nallaiImage = document.getElementById('nallai-image');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Function to update the image source
const updateImage = () => {
    nallaiImage.src = getCurrentTheme() === 'dark' ? 'assets/img/nallai/logo-dark.png' : 'assets/img/nallai/logo-light.png';
  };

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  updateImage();
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    updateImage();
})

(function() {
    console.log("1");
    
    emailjs.init("skmohit05@gmail.com"); // Initialize EmailJS with your user ID
    
    console.log("1");
  })();

  // Submit form data to EmailJS
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    
    console.log("1");
    event.preventDefault();  // Prevent the form from submitting the default way

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var project = document.getElementById("project").value;
    var message = document.getElementById("message").value;

    var templateParams = {
      from_name: name,
      from_email: email,
      project: project,
      message: message
    };

    emailjs.send("service_rlbckuf", "template_yy17457", templateParams)
      .then(function(response) {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message: " + error);
      });
  });