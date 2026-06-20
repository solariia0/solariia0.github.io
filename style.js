const proj_bttn = document.querySelector("#proj-bttn"); // get rid of prob


const entry = document.querySelector("#proj-sect");
const landing = document.querySelector("#landing"); // get rid of prob

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document.body.classList.add("proj");
    }  else {
      document.body.classList.remove("proj");
    }
  },
  {
    threshold: 0.3
  }
);

observer.observe(entry);



const entry2 = document.querySelector("#illustrations");
const navButtons = document.querySelectorAll('.nav-bttn'); // get rid of prob
const headings = document.querySelectorAll('h1'); // get rid of prob

const observer2 = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document.body.classList.add("proj");
    }  else {
      document.body.classList.remove("proj");
    }
  },
  {
    threshold: 0.7
  }
);

observer2.observe(entry2);

const designSec = document.querySelector("#designs");
// observer to check if the design page is visible
// adds proj (change the name) to edit body color to solid blue
const designSecIsVisible = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      document.body.classList.add("proj");
    }  else {
      document.body.classList.remove("proj");
    }
  },
  {
    threshold: 0.7
  }
);

observer2.observe(designSec);


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


function isHidden(el) {
    console.log(el.offsetParent === null)
}
document.querySelector('#content').addEventListener('scroll', () => {isHidden(document.querySelector('#bio'))})