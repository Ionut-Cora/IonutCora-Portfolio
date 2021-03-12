
// header text fadeIn

// const firstHead = document.querySelector('#first-head');
// const secondHead = document.querySelector('#second-head');

// window.addEventListener('load', function() {
//     firstHead.classList.add('fadeInAnimationFromLeft');
//     secondHead.classList.add('fadeInAnimationFromRight');
// });

// about me title fadeIn

// const firstAbout = document.querySelector('#first-about');
// const secondAbout = document.querySelector('#second-about');

// window.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         firstAbout.classList.add('fadeInAnimationFromLeft');
//         secondAbout.classList.add('fadeInAnimationFromRight');
//     } else {
//         firstAbout.classList.remove('fadeInAnimationFromLeft');
//         secondAbout.classList.remove('fadeInAnimationFromRight');
//     }
// });

// about me description fadeIn

// const description = document.querySelector('.my-description');

// window.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
//         description.classList.add('fadeInAnimationFromRightAbout');
//     } else {
//         description.classList.remove('fadeInAnimationFromRightAbout');
//     }
// });


// themes

const goldButton = document.querySelector('#gold-theme');
const redButton = document.querySelector('#red-theme');
const blueButton = document.querySelector('#baby-blue-theme');
const greenButton = document.querySelector('#lime-green-theme');
const lightButton = document.querySelector('#light-theme');
const darkButton = document.querySelector('#dark-theme');
const brand = document.querySelector('#brand-modified');
const headerName = document.querySelector('#header-name');
const headerJob = document.querySelector('#header-job');
const themes = document.querySelector('#themes');
const navbar = document.querySelector('nav');
// header
const header = document.querySelector('#header');
const workButton =document.querySelector('#work-button');
// about-title
const aboutBackground = document.querySelector('#about-title');
// contact
const contactBackground = document.querySelector('#contact');
// my-skills
const skillsBackground = document.querySelector('.my-skills');
// about-description
const aboutDescriptionBackground = document.querySelector('#about-description');
const descriptionTitle = document.querySelector('#description-title');
const descriptionSubtitle = document.querySelector('#description-subtitle');
const descriptionParagraph = document.querySelector('#description-paragraph');
const descriptionSpan = document.querySelector('#description-span');
const descriptionSubspan = document.querySelector('#description-subspan');
const descriptionEnd = document.querySelector('#description-end');
// portfolio
const portfolioBackground = document.querySelector('#portfolio');
const portfolioTitle = document.querySelector('#portfolio-title');
const korlakeProject = document.querySelector('#korlake-project');
const korlakeGithub = document.querySelector('#korlake-github');
const healthyProject = document.querySelector('#healthy-project');
const healthyGithub = document.querySelector('#healthy-github');
// footer
const footer = document.querySelector('footer');
const footerColor = document.querySelector('.footer-modified');

goldButton.addEventListener('click', () => {
    brand.style.color = '#F7D330';
    headerName.style.color = '#F7D330';
    headerJob.style.color = '#F7D330';
    workButton.style.backgroundColor = '#F7D330';
    aboutBackground.style.backgroundColor = '#F7D330';
    skillsBackground.style.backgroundColor = '#F7D330';
    contactBackground.style.backgroundColor = '#F7D330';
    footerColor.style.color = '#F7D330';
});

redButton.addEventListener('click', () => {
    brand.style.color = '#DB1F48';
    headerName.style.color = '#DB1F48';
    headerJob.style.color = '#DB1F48';
    workButton.style.backgroundColor = '#DB1F48';
    aboutBackground.style.backgroundColor = '#DB1F48';
    skillsBackground.style.backgroundColor = '#DB1F48';
    contactBackground.style.backgroundColor = '#DB1F48';
    footerColor.style.color = '#DB1F48';
});

blueButton.addEventListener('click', () => {
    brand.style.color = '#B1D4E0';
    headerName.style.color = '#B1D4E0';
    headerJob.style.color = '#B1D4E0';
    workButton.style.backgroundColor = '#B1D4E0';
    aboutBackground.style.backgroundColor = '#B1D4E0';
    skillsBackground.style.backgroundColor = '#B1D4E0';
    contactBackground.style.backgroundColor = '#B1D4E0';
    footerColor.style.color = '#B1D4E0';
});

greenButton.addEventListener('click', () => {
    brand.style.color = '#81B622';
    headerName.style.color = '#81B622';
    headerJob.style.color = '#81B622';
    workButton.style.backgroundColor = '#81B622';
    aboutBackground.style.backgroundColor = '#81B622';
    skillsBackground.style.backgroundColor = '#81B622';
    contactBackground.style.backgroundColor = '#81B622';
    footerColor.style.color = '#81B622';
});

lightButton.addEventListener('click', () => {

    navbar.classList.add('navbar-light');
    navbar.classList.add('bg-light');
    footer.classList.add('bg-light');
    themes.classList.add('navbar-light');
    themes.classList.add('bg-light');
    navbar.classList.remove('navbar-dark');
    navbar.classList.remove('bg-dark');
    footer.classList.remove('bg-dark');
    themes.classList.remove('navbar-dark');
    themes.classList.remove('bg-dark');
    

    aboutDescriptionBackground.style.backgroundColor = '#F8F9FA';
    descriptionTitle.style.color = '#000';
    descriptionSubtitle.style.color = '#000';
    descriptionParagraph.style.color = '#000';
    descriptionEnd.style.color = '#000';

    portfolioBackground.style.backgroundColor = '#F8F9FA';
    portfolioTitle.style.color = '#000';
    korlakeProject.style.color = '#000';
    korlakeGithub.style.color = '#000';
    healthyProject.style.color = '#000';
    healthyGithub.style.color = '#000';

    header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./css/images/header.jpg)';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.height = '100vh';
});

darkButton.addEventListener('click', () => {

    navbar.classList.add('navbar-dark');
    navbar.classList.add('bg-dark');
    footer.classList.add('bg-dark');
    themes.classList.add('navbar-dark');
    themes.classList.add('bg-dark');
    navbar.classList.remove('navbar-light');
    navbar.classList.remove('bg-light');
    footer.classList.remove('bg-light');
    themes.classList.remove('navbar-light');
    themes.classList.remove('bg-light');

    aboutDescriptionBackground.style.backgroundColor = '#343A40';
    descriptionTitle.style.color = '#fff';
    descriptionSubtitle.style.color = '#fff';
    descriptionParagraph.style.color = '#fff';
    descriptionEnd.style.color = '#fff';

    portfolioBackground.style.backgroundColor = '#343A40';
    portfolioTitle.style.color = '#fff';
    korlakeProject.style.color = '#fff';
    korlakeGithub.style.color = '#fff';
    healthyProject.style.color = '#fff';
    healthyGithub.style.color = '#fff';

    header.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./css/images/header.jpg)';
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.height = '100vh';
});
