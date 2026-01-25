const proj_bttn = document.querySelector("#proj-bttn");


const entry = document.querySelector("#proj-sect");
const landing = document.querySelector("#landing");

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
const navButtons = document.querySelectorAll('.nav-bttn');
const headings = document.querySelectorAll('h1');



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