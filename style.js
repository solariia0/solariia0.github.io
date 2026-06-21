const bgChecker = document.querySelector('#bg-checker');

const modeObserver = new IntersectionObserver((entries) => {
  const [e] = entries;
  document.body.classList.toggle('proj', !e.isIntersecting);
}, {
  threshold: 0.05,
});

modeObserver.observe(bgChecker);

/*
const illustBg = document.querySelector('#illust-bg');
const illustHead = document.querySelector('#illustHead');

const illustBgObserve = new IntersectionObserver((entries) => {
  const [e] = entries;
  document.body.classList.toggle('illustbg', e.isIntersecting);
  illustHead.classList.toggle('illust', e.isIntersecting);
}, {
  threshold: 0.05,
});

illustBgObserve.observe(illustBg);
*/

const preview = document.querySelector('.main-preview');
const images = document.querySelector('.img-roll').childNodes;

images.forEach((elem) => {
  if (elem.tagName === 'IMG') {
    elem.addEventListener('click', () => {
      if (preview.childNodes.length > 1) {
      last = document.querySelector('.view');
      preview.removeChild(last);
    }
      var current = document.createElement('img');
      console.log(elem.src);
      current.src = elem.src
      current.classList.add('view')
      preview.appendChild(current);
    })
  }
});