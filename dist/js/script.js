const certBtn = document.querySelector('.btn-cert');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-modal');

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
certBtn.addEventListener('click', () => { 
    modalContainer.classList.add('show-modal');
    document.querySelector('body').style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal');
    document.querySelector('body').style.overflow = 'visible';
});
window.addEventListener('click', e =>{
    if(e.key === 'Escape'){
        modalContainer.classList.remove('show-modal');
        document.querySelector('body').style.overflow = 'visible';
    }
    
});
window.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        modalContainer.classList.remove('show-modal');
        document.querySelector('body').style.overflow = 'visible';
    }
});