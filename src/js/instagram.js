const galleryList = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery_item');
const ellipses = document.querySelectorAll('.ellipses');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
console.log(galleryItems.offsetWidth);

let currentIndex = 0;

function updateButtonStates() {
  btnNext.disabled = currentIndex >= galleryItems.length - 1;
  btnPrev.disabled = currentIndex <= 0;
  btnNext.style.opacity = btnNext.disabled ? 0.5 : 1;
  btnPrev.style.opacity = btnPrev.disabled ? 0.5 : 1;
}

btnNext.addEventListener('click', () => {
  if (currentIndex < galleryItems.length - 1) {
    currentIndex++;
    updateGalleryPosition();
  }
  updateButtonStates();
  updateActiveEllipse();
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGalleryPosition();
  }
  updateButtonStates();
  updateActiveEllipse();
});

function updateGalleryPosition() {
  const itemWidth = galleryItems[0].offsetWidth;
  const gap = 20;
  const totalItems = galleryItems.length;

  let translateXValue;
  if (currentIndex === totalItems - 1) {
    translateXValue = -(itemWidth * currentIndex);
  } else {
    translateXValue = -(itemWidth + gap) * currentIndex;
  }

  galleryList.style.transform = `translateX(${translateXValue}px)`;
}

function updateActiveEllipse() {
  ellipses.forEach((ellipse, index) => {
    ellipse.classList.toggle('active', index === currentIndex);
  });
}

updateButtonStates();
updateActiveEllipse();
