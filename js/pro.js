let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

//====================================================================================

let sliderImages1 = document.querySelectorAll(".slidea"),
  arrowLeft1 = document.querySelector("#arrow-lefta"),
  arrowRight1 = document.querySelector("#arrow-righta"),
  current1 = 0;

// Clear all images
function reset1() {
  for (let i = 0; i < sliderImages1.length; i++) {
    sliderImages1[i].style.display = "none";
  }
}

// Init slider
function startSlide1() {
  reset1();
  sliderImages1[0].style.display = "block";
}

// Show prev
function slideLeft1() {
  reset1();
  sliderImages1[current1 - 1].style.display = "block";
  current1--;
}

// Show next
function slideRight1() {
  reset1();
  sliderImages1[current1 + 1].style.display = "block";
  current1++;
}

// Left arrow click
arrowLeft1.addEventListener("click", function() {
  if (current1 === 0) {
    current1 = sliderImages1.length;
  }
  slideLeft1();
});

// Right arrow click
arrowRight1.addEventListener("click", function() {
  if (current1 === sliderImages1.length - 1) {
    current1 = -1;
  }
  slideRight1();
});

startSlide1();


//====================================================================================

let sliderImages2 = document.querySelectorAll(".slideb"),
  arrowLeft2 = document.querySelector("#arrow-leftb"),
  arrowRight2 = document.querySelector("#arrow-rightb"),
  current2 = 0;

// Clear all images
function reset2() {
  for (let i = 0; i < sliderImages2.length; i++) {
    sliderImages2[i].style.display = "none";
  }
}

// Init slider
function startSlide2() {
  reset2();
  sliderImages2[0].style.display = "block";
}

// Show prev
function slideLeft2() {
  reset2();
  sliderImages2[current2 - 1].style.display = "block";
  current2--;
}

// Show next
function slideRight2() {
  reset2();
  sliderImages2[current2 + 1].style.display = "block";
  current2++;
}

// Left arrow click
arrowLeft2.addEventListener("click", function() {
  if (current2 === 0) {
    current2 = sliderImages2.length;
  }
  slideLeft2();
});

// Right arrow click
arrowRight2.addEventListener("click", function() {
  if (current2 === sliderImages2.length - 1) {
    current2 = -1;
  }
  slideRight2();
});

startSlide2();

//====================================================================================

let sliderImages3 = document.querySelectorAll(".slidec"),
  arrowLeft3 = document.querySelector("#arrow-leftc"),
  arrowRight3 = document.querySelector("#arrow-rightc"),
  current3 = 0;

// Clear all images
function reset3() {
  for (let i = 0; i < sliderImages3.length; i++) {
    sliderImages3[i].style.display = "none";
  }
}

// Init slider
function startSlide3() {
  reset3();
  sliderImages3[0].style.display = "block";
}

// Show prev
function slideLeft3() {
  reset3();
  sliderImages3[current3 - 1].style.display = "block";
  current3--;
}

// Show next
function slideRight3() {
  reset3();
  sliderImages3[current3 + 1].style.display = "block";
  current3++;
}

// Left arrow click
arrowLeft3.addEventListener("click", function() {
  if (current3 === 0) {
    current3 = sliderImages3.length;
  }
  slideLeft3();
});

// Right arrow click
arrowRight3.addEventListener("click", function() {
  if (current3 === sliderImages3.length - 1) {
    current3 = -1;
  }
  slideRight3();
});

startSlide3();
