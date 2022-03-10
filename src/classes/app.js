import DefaultClass from "../core/defaultClass"
import Header from "./header"

class App extends DefaultClass{
	#elementsAdditional = [new Header()]
	constructor() {
		super()
		this.element = super.createElement("div", "wrapper")
		this.addElement()
	}
	addElement() {
		this.#elementsAdditional.forEach(el => {
			this.element.append(el.element)
		})
	}
}

export default App
