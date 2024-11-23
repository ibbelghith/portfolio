/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
 // Array of image filenames
 const images = Array.from({ length: 10 }, (_, i) => `images/${i + 1}.png`);
 let currentIndex = 0;

 const viewerImage = document.getElementById('photo-viewer-image');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');

 function updateImage(index) {
   viewerImage.src = images[index];
   viewerImage.alt = `Screenshot ${index + 1}`;
 }

 prevBtn.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   updateImage(currentIndex);
 });

 nextBtn.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % images.length;
   updateImage(currentIndex);
 });

 // Initialize viewer with the first image
 updateImage(currentIndex);



