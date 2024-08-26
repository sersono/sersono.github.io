//  Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
const subsection = document.querySelector('.subsection__container');
const subsectionHeight = subsection.offsetHeight;
document.addEventListener('scroll', () => {
    if (window.scrollY > subsectionHeight / 4) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});