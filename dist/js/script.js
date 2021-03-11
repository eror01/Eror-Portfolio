const modalContainer = document.querySelector('.modal-container');
const certBtn = document.querySelector('.btn-cert');
const closeBtn = document.querySelector('.close-modal');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header');
const closeHeader = document.querySelector('.btn__close-header');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
const projectsShow = document.querySelector('.projects__showcase');

let projectsContainerWidth = document.querySelector('.projects__container-sub').offsetWidth;
let index = 0;

// Functions
const highlightActive = () =>{
    const homePage = document.querySelector('#home-page');
    const projectPage = document.querySelector('#projects-page');
    const aboutPage = document.querySelector('#about-page')
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    if(window.innerWidth > 960 && scrollPos < 600){
        homePage.classList.add('active');
        projectPage.classList.remove('active');
        return;
    }

    if(window.innerWidth > 960 && scrollPos < 1000){
        projectPage.classList.add('active');
        homePage.classList.remove('active');
        aboutPage.classList.remove('active');
        return;
    }

    if(window.innerWidth > 960 && scrollPos < 1874){
        aboutPage.classList.add('active');
        projectPage.classList.remove('active');
        return;
    }

};


// Event Listeners
window.addEventListener('scroll', highlightActive);
window.addEventListener('click', highlightActive);

// Opening modal
certBtn.addEventListener('click', () => { 
    modalContainer.classList.add('show-modal');
    document.querySelector('body').style.overflow = 'hidden';
});

// Closing modal
closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal');
    document.querySelector('body').style.overflow = 'visible';
});
// Clicking on modal__container closes
modalContainer.addEventListener('click', e =>{
        modalContainer.classList.remove('show-modal');
        document.querySelector('body').style.overflow = 'visible';
});
// Pressing escape key closes modal__container
window.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        modalContainer.classList.remove('show-modal');
        document.querySelector('body').style.overflow = 'visible';
    }
});
window.addEventListener('resize', () =>{
    projectsContainerWidth = document.querySelector('.projects__container-sub').offsetWidth;
});
// Hamburger menu
hamburgerMenu.addEventListener('click', () => {
    header.classList.add('change');
    hamburgerMenu.style.zIndex = '0';
});
closeHeader.addEventListener('click', () =>{
    header.classList.remove('change');
    hamburgerMenu.style.zIndex = '1000';
});

nextBtn.addEventListener('click', () =>{
    index++;
    prevBtn.classList.add('show');
    projectsShow.style.transform = `
        translate(-${index * projectsContainerWidth}px)
    `;

    if(projectsShow.offsetWidth - 
        (index * projectsContainerWidth) < projectsContainerWidth){
            nextBtn.classList.add('hide');
        }
});
prevBtn.addEventListener('click', () =>{
    index--;
    nextBtn.classList.remove('hide');
    if(index === 0){
        prevBtn.classList.remove('show');
    }

    projectsShow.style.transform = `
        translate(-${index * projectsContainerWidth}px)
    `;
});