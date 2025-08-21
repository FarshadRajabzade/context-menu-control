//Toastify for alerts
function showToast({ text, background = "background:'green'", destination = "https://github.com/FarshadRajabzade" }) {
  Toastify({
    text,
    duration: 3000,
    destination,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background,
      fontFamily: "Vazirmatn",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
    },
    onClick: function() {}
  }).showToast();
}

//get user status
let lastStatus = navigator.onLine ? 'online' : 'offline';

// show alert if status changes
window.addEventListener('online', () => {
  if (lastStatus !== 'online') {
    showToast({
      text: "خوش اومدی سلطان دوباره آنلاین شدی 😍",
      background: "green"
    });
    lastStatus = 'online';
  }
});

window.addEventListener('offline', () => {
  if (lastStatus !== 'offline') {
    showToast({
      text: "اینترنتت قطع شد ☹️",
      background: "red"
    });
    lastStatus = 'offline';
  }
});

//show online or offline alert for the first time
if (navigator.onLine && lastStatus === 'offline') {
  showToast({
    text: "خوش اومدی سلطان دوباره آنلاین شدی 😍",
    background: "green"
  });
  lastStatus = 'online';
} else if (!navigator.onLine && lastStatus === 'online') {
  showToast({
    text: "اینترنتت قطع شد ☹️",
    background: "red"
  });
  lastStatus = 'offline';
}

// right click control
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  const menu = document.getElementById('context-menu');
  menu.style.top = `${e.pageY}px`;
  menu.style.left = `${e.pageX}px`;
  menu.style.display = 'block';
  menu.classList.add('active');
});

document.addEventListener('click', () => {
  const menu = document.getElementById('context-menu');
  menu.classList.remove('active');
  setTimeout(() => { menu.style.display = 'none'; }, 300);
});

//show battery percent
navigator.getBattery().then(battery => {
  document.getElementById('battery').innerText = `باتری: ${Math.floor(battery.level * 100)}%`;
});
