const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-count');
  const duration = 1000; // Animation duration in milliseconds
  const step = Math.floor(target / duration);

  const updateCount = () => {
    const count = +counter.innerText;
    if (count < target) {
      counter.innerText = count + step;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
