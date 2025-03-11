
export class CustomElement extends HTMLElement {

    /** @type HTMLTemplateElement */
    get #componentTemplate() {
        return this.constructor.prototype.TEMPLATE
    }

    /*
    {
    componentName: string
    element: new() => T
    css?: string
    html?: string
    useShadow?: boolean
}
     */

    get #componentOpts() {
        return this.constructor.prototype.OPTS
    }

    /**
     *
     * @template T
     * @param opts {{css: string, html: string, componentName: string, useShadow: boolean, element: CustomElement}}
     */
    static defineCustomElementWithTemplate(
        opts) {

        // Creation structures/urls
        /** @type HTMLTemplateElement */
        const template = document.createElement('template')
        opts.element.prototype.TEMPLATE = template
        opts.element.prototype.OPTS = opts

        // Chargement css
        template.innerHTML = ``
        if (opts.css) template.innerHTML += `<style>@scope{${opts.css}}</style>`
        if (opts.html) template.innerHTML += `${opts.html}`

        // chargement dans les custom elements
        customElements.define(opts.componentName, opts.element)
    }

    connectedCallback() {
        const opts = this.#componentOpts
        if (opts.useShadow) {
            this.attachShadow({mode: 'open'})
            this.#initShadowRootWithTemplate()
        } else {
            this.#initElementWithTemplate()
        }

    }

    /**
     *
     * @return {ShadowRoot}
     */
    #initShadowRootWithTemplate() {
        if (!this.shadowRoot) return null
        this.shadowRoot.innerHTML = ''
        this.shadowRoot.appendChild(this.#componentTemplate.content.cloneNode(true))
        return this.shadowRoot
    }

    /**
     * @return void
     */
    #initElementWithTemplate() {
        this.innerHTML = ''
        this.appendChild(this.#componentTemplate.content.cloneNode(true))
    }


}
