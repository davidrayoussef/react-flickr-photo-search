const debounce = (() => {
  let interval = 0;
  return (fn, time) => {
    clearTimeout(interval);
    interval = setTimeout(fn, time);
  };
})();

export default debounce;
