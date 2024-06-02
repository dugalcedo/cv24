export function mount(component, { mainMenuBtn, mainMenu, mainMenuMenu }) {
    const links = mainMenu.querySelectorAll(':scope a')

    const open = () => mainMenu.classList.add('open')
    const close = () => mainMenu.classList.remove('open')
    const toggle = () => mainMenu.classList.toggle('open')

    mainMenuBtn.addEventListener('click', () => {
        toggle()
    })

    links.forEach(a => {
        a.addEventListener('click', () => {
            close()
        })
    })

    document.addEventListener('click', e => {
        const el = e.target
        if ((el !== mainMenu) && (!mainMenu.contains(el))) {
            close()
        }
    })
}