import {CustomElement} from '../custom-element.js'
import {css, html} from './fetch.html.custom-element.js'


export class FetchCustomElement extends CustomElement {


    connectedCallback() {
        super.connectedCallback()
        this.shadowRoot.querySelector('.function-label').innerText = this.getAttribute('label')
        this.url = this.getAttribute('url')

        this.resultTag = this.shadowRoot.querySelector('.result')
        this.shadowRoot
            .querySelector('.test-btn')
            .addEventListener('click', () => this.testFunctionHello())
        this.shadowRoot
            .querySelector('.reset-btn')
            .addEventListener('click', () => this.resetFunctionHello())
    }

    disconnectedCallback() {
        super.disconnectedCallback()
    }

    async testFunctionHello() {
        this.resultTag.innerText = await fetch(this.url)
            .then(res => res.text())
            .catch(err => err)
    }

    async resetFunctionHello() {
        this.resultTag
            .innerText = ''
    }

}

CustomElement.defineCustomElementWithTemplate({
    componentName: 'fetch-custom-element',
    element: FetchCustomElement,
    html, css,
    useShadow: true,
})
