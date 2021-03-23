'use strict';

var modalContainer = document.querySelector('.modal-container');
var certBtn = document.querySelector('.btn-cert');
var closeBtn = document.querySelector('.close-modal');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var header = document.querySelector('.header');
var closeHeader = document.querySelector('.btn__close-header');
var nextBtn = document.querySelector('.btn-next');
var prevBtn = document.querySelector('.btn-prev');
var projectsShow = document.querySelector('.projects__showcase');

var projectsContainerWidth = document.querySelector('.projects__container-sub').offsetWidth;
var index = 0;

// Functions
var highlightActive = function highlightActive() {
    var homePage = document.querySelector('#home-page');
    var projectPage = document.querySelector('#projects-page');
    var aboutPage = document.querySelector('#about-page');
    var isDesktop = window.innerWidth > 960;
    var scrollPos = window.scrollY;
    // console.log(scrollPos);

    if (isDesktop && scrollPos < 600) {
        homePage.classList.add('active');
        projectPage.classList.remove('active');
        return;
    }

    if (isDesktop && scrollPos < 1000) {
        projectPage.classList.add('active');
        homePage.classList.remove('active');
        aboutPage.classList.remove('active');
        return;
    }

    if (isDesktop && scrollPos < 1874) {
        aboutPage.classList.add('active');
        projectPage.classList.remove('active');
        return;
    }
};

// Event Listeners
window.addEventListener('scroll', highlightActive);
window.addEventListener('click', highlightActive);

// Opening modal
certBtn.addEventListener('click', function () {
    modalContainer.classList.add('show-modal');
    document.querySelector('body').classList.add('hideOverflow');
});

// Closing modal
closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('show-modal');
    document.querySelector('body').classList.remove('hideOverflow');
});

// Clicking on modal__container closes
modalContainer.addEventListener('click', function (e) {
    modalContainer.classList.remove('show-modal');
    document.querySelector('body').classList.remove('hideOverflow');
});

// Pressing escape key closes modal__container
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalContainer.classList.remove('show-modal');
        document.querySelector('body').classList.remove('hideOverflow');
    }
});

window.addEventListener('resize', function () {
    projectsContainerWidth = document.querySelector('.projects__container-sub').offsetWidth;
});

// Hamburger menu
hamburgerMenu.addEventListener('click', function () {
    header.classList.add('change');
    hamburgerMenu.style.zIndex = '0';
});

closeHeader.addEventListener('click', function () {
    header.classList.remove('change');
    hamburgerMenu.style.zIndex = '1000';
});

nextBtn.addEventListener('click', function () {
    index++;
    prevBtn.classList.add('show');
    projectsShow.style.transform = '\n        translate(-' + index * projectsContainerWidth + 'px)\n    ';

    if (projectsShow.offsetWidth - index * projectsContainerWidth < projectsContainerWidth) {
        nextBtn.classList.add('hide');
    }
});

prevBtn.addEventListener('click', function () {
    index--;
    nextBtn.classList.remove('hide');
    if (index === 0) {
        prevBtn.classList.remove('show');
    }

    projectsShow.style.transform = '\n        translate(-' + index * projectsContainerWidth + 'px)\n    ';
});