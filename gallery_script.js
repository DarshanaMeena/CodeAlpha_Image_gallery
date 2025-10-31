 const imgs = [...document.querySelectorAll('.gallery-item img')];
const lightbox = document.querySelector('.lightbox');
const lbImg = document.querySelector('.lightbox-img');
let i = 0;

// Open lightbox on image click
imgs.forEach((img, idx) => img.onclick = () => {
  lbImg.src = img.src;
  lightbox.classList.add('active');
  i = idx;
});

// Close lightbox
document.querySelector('.close').onclick = () => lightbox.classList.remove('active');

// Next / Prev navigation (using one function)
['prev', 'next'].forEach(dir =>
  document.querySelector('.' + dir).onclick = () => {
    i = (i + (dir === 'next' ? 1 : imgs.length - 1)) % imgs.length;
    lbImg.src = imgs[i].src;
  }
);

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => btn.onclick = () => {
  document.querySelector('.filter-btn.active').classList.remove('active');
  btn.classList.add('active');
  const cat = btn.dataset.category;
  document.querySelectorAll('.gallery-item').forEach(it =>
    it.style.display = (cat === 'all' || it.dataset.category === cat) ? 'block' : 'none'
  );
});