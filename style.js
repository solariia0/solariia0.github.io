const proj_bttn = document.querySelector("#proj-bttn");


const entry = document.querySelector("#projects");
const landing = document.querySelector("#landing");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      console.log('hi')
      document.body.classList.add("active");
      document.body.style.background =
      "linear-gradient(to right, var(--bg-main) 84%, var(--bg-accent) 84%)";
      document.body.style.gridTemplateColumns = '85fr 15fr';
    }  else {
      document.body.classList.remove("active");
    }
  },
  {
    threshold: 0.3
  }
);

observer.observe(entry);



const entry2 = document.querySelector("#illustrations");

const observer2 = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      console.log('hi')
      document.body.classList.add("active");
      document.body.style.background =
      "linear-gradient(to right, var(--bold-txt) 84%, var(--bg-main) 84%)";
      document.body.style.gridTemplateColumns = '85fr 15fr';
      document.querySelector('#illust').style.color = 'var(--bg-main)';
    }  else {
      document.body.classList.remove("active");
    }
  },
  {
    threshold: 0.3
  }
);

observer2.observe(entry2);