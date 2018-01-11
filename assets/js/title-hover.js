const title = document.getElementById('site-title');
const original = title.innerText;
const splitText = title.innerText.split('');

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const startTimer = () => {
  const pid = setInterval(() => {
    const t = shuffle(splitText);
    title.innerText = t.join('');
  }, 30);

  return pid;
};

let pid;

title.addEventListener('mouseover', () => {
  pid = startTimer();
}, false);

title.addEventListener('mouseleave', () => {
  clearInterval(pid);
  title.innerText = original;
}, false);
