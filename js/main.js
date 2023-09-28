const parallaxBg = document.querySelector('#header');

console.log(parallaxBg)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    
});
