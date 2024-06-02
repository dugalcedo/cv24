class DugComponent extends HTMLElement {
    #mount

    connectedCallback() {
        this.#init()
    }

    async #init() {
        const name = this.getAttribute('data-name')
        const res = await fetch(`/components/${name}.html`)
        const html = await res.text()
        this.innerHTML = html
        
        const scripts = await import(`../components/${name}.js`)
        this.#mount = scripts.mount

        requestAnimationFrame(()=>{
            const elements = {}
            const idElements = this.querySelectorAll(':scope *[id]')
            idElements.forEach(el => {
                elements[el.id] = el
            })
            if (this.#mount) this.#mount(this, elements)
        })
    }
}

customElements.define('dug-component', DugComponent)

class DugTooltip extends HTMLElement {
    #initialized
    #tooltip

    connectedCallback() {
        this.style.display = 'block'
        this.style.position = 'relative'

        this.#tooltip = document.createElement('div')
        this.#tooltip.classList.add('dug-tooltip')
        this.#tooltip.innerHTML = this.getAttribute('data-text')

        this.append(this.#tooltip)

        // remove excess children
        // why so many? can a custom element not have children?
        const children = this.querySelectorAll(':scope .dug-tooltip')
        for (let i = 1; i < children.length; i++) {
            children[i].remove()
        }
    }
}

customElements.define('dug-tooltip', DugTooltip)