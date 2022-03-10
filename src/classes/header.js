import DefaultClass from "../core/defaultClass"
import Burger from "./burger"
import LogoHeader from "./logoHeader"
import ControlTheme from "./controlTheme"

class Header extends DefaultClass{
	#elementsAdditionalLeft = [new Burger(), new LogoHeader()]
	#elementsAdditional = [new ControlTheme()]
	constructor() {
		super()
		this.element = super.createElement("header", "header")
		this.addElement()
	}
	addElement() {
		const leftWrap = super.createElement("div", "header__left-block")
		this.#elementsAdditionalLeft.map(object => {
			leftWrap.append(object.element)
		})
		this.element.append(leftWrap)
		this.#elementsAdditional.map(item => {
			this.element.append(item.element)
		})
	}
}

export default Header
