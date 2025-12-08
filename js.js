const buttonPrev = document.getElementById("butPrev");
const buttonNext = document.getElementById("butNext");
const slides = document.querySelectorAll(".slide");
// slides = список, который содержит все элементы с классом slide
let nowSlide = 0;
function showSlide(index){
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides [index].style.display = "flex";
}
showSlide(nowSlide)