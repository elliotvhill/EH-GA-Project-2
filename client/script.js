
const venue1 = document.querySelector("#venue1")
const venue2 = document.querySelector("#venue2")
const venue3 = document.querySelector("#venue3")
const venue4 = document.querySelector("#venue4")

venue1.innerHTML = `Forest Hills Stadium`
venue2.innerHTML = `Seaside Park`
venue3.innerHTML = `The Met Philadelphia`
venue4.innerHTML = `Westville Music Bowl`





const currentYear = new Date().getFullYear();
const footerDate = () => { return currentYear; }
let copyright = document.querySelector('#year')
copyright.innerHTML = `<p>&copy; ${currentYear} Elliot Hill</p>`
