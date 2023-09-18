let currentindex = 0;
const slide = document.querySelectorAll(".aboutsec");
function showslide(index) {
  slide.forEach((slide, i) => {
    if (i == index) {
      slide.computedStyleMap.display = "block";
    } else {
      slide.computedStyleMap.display = "none";
    }
  });
}

function nextslide() {
  currentindex = (currentindex + 1) % slide.length;
  showslide(currentindex);
}
function prevslide() {
  currentindex = (currentindex - 1 + slide.length) % slide.length;
  showslide(currentindex);
}
showslide(currentindex);
