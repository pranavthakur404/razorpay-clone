// box1
const currentImgBox = document.querySelector("#current-box1");
const currentImgBoxImg = currentImgBox.childNodes[1];
currentImgBox.addEventListener("mouseenter", () => {
  currentImgBoxImg.removeAttribute("src");
  currentImgBoxImg.setAttribute("src", "images/instant-settlement-bghover.svg");
});
currentImgBox.addEventListener("mouseleave", () => {
  currentImgBoxImg.removeAttribute("src");
  currentImgBoxImg.setAttribute("src", "images/instant-settlement-bg.svg");
});

// box2
const currentImgBox2 = document.querySelector("#current-box2");
const currentImgBoxImg2 = currentImgBox2.childNodes[1];
currentImgBox2.addEventListener("mouseenter", () => {
  currentImgBoxImg2.removeAttribute("src");
  currentImgBoxImg2.setAttribute(
    "src",
    "images/instant-settlement-bghover.svg"
  );
});
currentImgBox2.addEventListener("mouseleave", () => {
  currentImgBoxImg2.removeAttribute("src");
  currentImgBoxImg2.setAttribute("src", "images/instant-settlement-bg.svg");
});

// box3
const currentImgBox3 = document.querySelector("#current-box3");
const currentImgBoxImg3 = currentImgBox3.childNodes[1];
currentImgBox3.addEventListener("mouseenter", () => {
  currentImgBoxImg3.removeAttribute("src");
  currentImgBoxImg3.setAttribute(
    "src",
    "images/instant-settlement-bghover.svg"
  );
});
currentImgBox3.addEventListener("mouseleave", () => {
  currentImgBoxImg3.removeAttribute("src");
  currentImgBoxImg3.setAttribute("src", "images/instant-settlement-bg.svg");
});

// box4
const currentImgBox4 = document.querySelector("#current-box4");
const currentImgBoxImg4 = currentImgBox4.childNodes[1];
currentImgBox4.addEventListener("mouseenter", () => {
  currentImgBoxImg4.removeAttribute("src");
  currentImgBoxImg4.setAttribute(
    "src",
    "images/instant-settlement-bghover.svg"
  );
});
currentImgBox4.addEventListener("mouseleave", () => {
  currentImgBoxImg4.removeAttribute("src");
  currentImgBoxImg4.setAttribute("src", "images/instant-settlement-bg.svg");
});

// box5
const currentImgBox5 = document.querySelector("#current-box5");
const currentImgBoxImg5 = currentImgBox5.childNodes[1];
currentImgBox5.addEventListener("mouseenter", () => {
  currentImgBoxImg5.removeAttribute("src");
  currentImgBoxImg5.setAttribute(
    "src",
    "images/instant-settlement-bghover.svg"
  );
});
currentImgBox5.addEventListener("mouseleave", () => {
  currentImgBoxImg5.removeAttribute("src");
  currentImgBoxImg5.setAttribute("src", "images/instant-settlement-bg.svg");
});


// slider script
const sliderboxes = document.querySelectorAll('.slider-box');
const left = document.querySelector("#left-arrow")
const right = document.querySelector("#right-arrow")

counter=0;
sliderboxes.forEach((img,index)=>{
    img.style.left = `${index*100}%`;
})
left.addEventListener("click",()=>{
    if(counter>=1){
        counter--;
    }
    sliding();
})
right.addEventListener('click',()=>{
    if(counter < sliderboxes.length-1){
        counter++;
    }
    sliding();
})

const sliding = function(){
    sliderboxes.forEach((img)=>{
        img.style.transform = `translate(-${counter*100}%)`
    })
}
