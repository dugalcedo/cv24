// customElements
import './js/customElements.js'
import ROOT from './js/root.js'
console.log("ROOT:", ROOT)

// router
const mounted = {}
const main = document.querySelector('main')
const checkRoute = async () => {
    const route = window.location.hash.replace('#','') || 'home'
    Object.values(mounted).forEach(el => {
        el.style.display = 'none'
    })
    if (!Object.keys(mounted).includes(route)) {
        mountPage(route)
    } else {

        mounted[route].style.display = 'block'
    }
}

const mountPage = async (route) => {
    mounted[route] = document.createElement('dug-route')
    const res = await fetch(ROOT + `/pages/${route}.html`)
    const html = await res.text()
    mounted[route].innerHTML = html
    main.append(mounted[route])
}

checkRoute()
window.addEventListener('hashchange', checkRoute)