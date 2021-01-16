const header = document.querySelector('.main-navigation');
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
        console.log(event)
        this.style.transform = "scale(1)";
    }
};
Object.assign(document.body.style, {opacity: '0', transition: 'all 1.5s linear'});
Object.assign(header.style, {zIndex: '999', transition: 'all .2s linear'});
window.addEventListener('load', fadeIn);
document.addEventListener('scroll', updateHeader);
imgGroup.forEach((img) => {
    img.style.transition = "all .2s linear";
    img.addEventListener('mouseover', filterImg);
    img.addEventListener('mouseleave', filterImg);
});
btnGroup.forEach((btn) => {
    btn.style.transition = "all .5s linear";
    btn.addEventListener('mousedown', resizeBtn);
    btn.addEventListener('transitionend', resizeBtn);
});