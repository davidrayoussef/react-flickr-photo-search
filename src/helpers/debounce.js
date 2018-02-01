function debounce(fn, time, interval = null) {
  return ((...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      fn(...args);
    }, time);
  })();
}

export default debounce;
