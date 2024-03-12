const nav = '<nav><ul><li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/contact">Contact</a></li></ul></nav>';
const links = document.querySelectorAll('a');
const root = {
  '/': `<h1>Home</h1>${nav}<p>Hello, world!</p>`,
  '/about': `<h1>About</h1>${nav}<p>About page</p>`
}

function home() {
  app.innerHTML = root['/'] || '<h1 class="err">Err 404: Page not found x2</h1>'; 
}
home();

// function render(url) {
//   const app = document.querySelector("#app").innerHTML = root[url] || '<h1 class="err">Err 404: Page not found</h1>';
// }
// render();

// console.log(window.location.pathname);