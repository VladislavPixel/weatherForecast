import DefaultClass from "../core/defaultClass"
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

class ControlTheme extends DefaultClass {
	constructor() {
		super()
		this.mode = "light"
		this.element = this.createControlTheme()
	}
	handlerClickControlBlock(event) {
		console.log("click")
		if (this.mode === "light") {
			this.mode = "dark"
			this.element.classList.add("dark")
		}
	}
	createControlTheme() {
		const rightWrap = super.createElement("div", "header__control-theme theme-control")
		const sunEl = super.createElement("img", "theme-control__sun", [{ name: "src", value: sun }, { name: "alt", value: "Иконка солнца" }])
		const moonEl = super.createElement("img", "theme-control__moon", [{ name: "src", value: moon }, { name: "alt", value: "Иконка Месяца" }])
		const controlBlock = super.createElement("div", "theme-control__block")
		controlBlock.addEventListener("click", this.handlerClickControlBlock)
		const flag = super.createElement("div", "theme-control__flag")
		controlBlock.append(flag)
		rightWrap.append(sunEl)
		rightWrap.append(controlBlock)
		rightWrap.append(moonEl)
		return rightWrap
	}
}

export default ControlTheme
