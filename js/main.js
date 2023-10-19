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
    // const position = document.getElementsByClassName('cont_principal');
    const position = document.querySelector('.cont_principal')
    console.log(position)
    if (c % 2 == 0) {
        document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
        // position.style.left = "0%";
        // position.style.transform = "translate(0, 0)";
        
        
        c++;

        // position.style.left = "100%";
        //     left: 40%;
        // transform: translate(-50%, 0);
    } else {
        document.querySelector('.cont_modal').className = "cont_modal";
        // position.style.left = "40%";
        // position.style.transform = "translate(-50%, 0)";
        c++;
        // position.style.left = "100%";
    }
} 
