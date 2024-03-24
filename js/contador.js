let section_counter = document.querySelector('#contador');
let counters = document.querySelectorAll('.contenedorbarra .number');


let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((number, index) => {
      function UpdateCounter() {
        const targetNumber = +number.dataset.target;
        const initialNumber = +number.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          number.innerText = Math.ceil(initialNumber + incPerCount);
          //Aca se cambia la velocidad
          setTimeout(UpdateCounter, 20);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (number.parentElement.style.animation) {
        number.parentElement.style.animation = '';
      } else {
        number.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);