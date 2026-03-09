let fun = false;

if (!window.location.href.startsWith('http://localhost')) {
    document.body.classList.add('cool');
}

// prevents edits so i won't lose score just in case
const handleUnfun = () => {
    window.location.href = 'about:blank'
}

setInterval(() => {
    const start = performance.now();
    debugger;
    const end = performance.now();

    if (end - start > 100) {
        handleUnfun();
    }
}, 1000);

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U") ||
    (e.ctrlKey && e.key === "s")
  ) {
    e.preventDefault();
  }
});