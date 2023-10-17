const parallaxBg = document.querySelector('#header');

console.log(parallaxBg)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    
});
window.onload = function () {
    document.querySelector('.cont_modal').className = "cont_modal";
}
var c = 0;
function open_close() {
    if (c % 2 == 0) {
        document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
        c++;
    } else {
        document.querySelector('.cont_modal').className = "cont_modal";
        c++;
    }
} 
