const header = document.querySelector('.main-navigation');
const navGroup = document.querySelectorAll('.nav-link');
const imgGroup = document.querySelectorAll('img');
const btnGroup = document.querySelectorAll('.btn');
const sectionGroup = document.querySelectorAll('section');
const destinationGroup = document.querySelectorAll('.destination');
function fadeIn(event) {
    document.body.style.opacity = "1";
};
function updateHeader(event) {
    if (window.scrollY === 0) {
        header.style.background = "#fff";
        header.style.height = "90px";
    } else {
        header.style.background = "#17A2B8";
        header.style.height = "60px";
    };
    navGroup.forEach((link) => {
        link.style.color = '#000';
        link.style.fontWeight = 'normal';
    });
};
function highlightLink(event) {
    if (event.type === 'focus' && window.scrollY === 0) {
        this.style.color = "#17A2B8";
        this.style.fontWeight = "bold";
    } else if (event.type === 'focus') {
        this.style.color = "#fff";
        this.style.fontWeight = "bold";
    } else {
        this.style.color = "#000";
        this.style.fontWeight = "normal";
    }
};
function filterImg(event) {
    if (event.type === 'mouseover') {
        event.target.style.filter = "drop-shadow(8px 8px 10px #aaa)";
    } else {
        event.target.style.filter = "none";
    }
};
function resizeBtn(event) {
    if (event.type === 'mousedown') {
        this.style.transform = "scale(1.2)";
    } else if (event.type === 'transitionend' && event.propertyName === 'transform') {
        this.style.transform = "scale(1)";
    }
    event.stopPropagation();
};
function highlightSection(event) {
    if (event.type === 'mouseenter') {
        this.querySelector('h2').style.backgroundColor = "#FFEBCD";
    } else {
        this.querySelector('h2').style.backgroundColor = "#fff";
    }
};
function highlightDestination(event) {
    this.style.border = '10px dotted #FFEBCD';
};
Object.assign(document.body.style, {opacity: '0', transition: 'all 1.5s linear'});
Object.assign(header.style, {zIndex: '999', transition: 'all .2s linear'});
window.addEventListener('load', fadeIn);
document.addEventListener('scroll', updateHeader);
navGroup.forEach((link) => {
    link.addEventListener('focus', highlightLink);
    link.addEventListener('blur', highlightLink);
    link.addEventListener('click', (event) => event.preventDefault());
});
imgGroup.forEach((img) => {
    img.style.transition = "all .2s linear";
    img.addEventListener('mouseover', filterImg);
    img.addEventListener('mouseout', filterImg);
});
btnGroup.forEach((btn) => {
    btn.style.transition = "all .3s linear";
    btn.addEventListener('mousedown', resizeBtn);
    btn.addEventListener('transitionend', resizeBtn);
});
sectionGroup.forEach((section) => {
    if (section.classList.contains('content-pick')) return;
    section.querySelector('h2').style.transition = "all .3s linear";
    section.addEventListener('mouseenter', highlightSection);
    section.addEventListener('mouseleave', highlightSection);
});
destinationGroup.forEach((destination) => {
    destination.addEventListener('mousedown', highlightDestination);
});
gsap.from(".intro img", {duration: 2, x: 5000, ease: "elastic"});