import DefaultClass from "../core/defaultClass"

class Burger extends DefaultClass{
	#arrayAux = [1, 2, 3]
	constructor() {
		super()
		this.element = this.createBurger()
	}
	createBurger() {
		const element = super.createElement("div", "header__burger")
		this.#arrayAux.forEach(el => {
			element.append(super.createElement("span"))
		})
		return element
	}
}

export default Burger
