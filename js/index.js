const header = document.querySelector('.main-navigation');
const navGroup = document.querySelectorAll('.nav-link');
const imgGroup = document.querySelectorAll('img');
const btnGroup = document.querySelectorAll('.btn');
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
    
};
function highlightLink(event) {
    if (event.type === 'focus') {
        this.style.color = "#17A2B8";
        this.style.fontWeight = "bold";
    } else {
        this.style.color = "#000";
        this.style.fontWeight = "normal";
    }
};
function filterImg(event) {
    if (event.type === 'mouseover') {
        event.target.style.filter = "grayscale(100%)";
    } else {
        event.target.style.filter = "grayscale(0%)";
    }
};
function resizeBtn(event) {
    if (event.type === 'mousedown') {
        this.style.transform = "scale(1.2)";
    } else if (event.type === 'transitionend' && event.propertyName === 'transform') {
        this.style.transform = "scale(1)";
    }
};
Object.assign(document.body.style, {opacity: '0', transition: 'all 1.5s linear'});
Object.assign(header.style, {zIndex: '999', transition: 'all .2s linear'});
window.addEventListener('load', fadeIn);
document.addEventListener('scroll', updateHeader);
navGroup.forEach((link) => {
    link.addEventListener('focus', highlightLink);
    link.addEventListener('focusout', highlightLink);
});
imgGroup.forEach((img) => {
    img.style.transition = "all .2s linear";
    img.addEventListener('mouseover', filterImg);
    img.addEventListener('mouseleave', filterImg);
});
btnGroup.forEach((btn) => {
    btn.style.transition = "all .3s linear";
    btn.addEventListener('mousedown', resizeBtn);
    btn.addEventListener('transitionend', resizeBtn);
});