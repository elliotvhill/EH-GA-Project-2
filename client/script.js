


const currentYear = new Date().getFullYear();
const footerDate = () => { return currentYear; }
let copyright = document.querySelector('#year')
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
