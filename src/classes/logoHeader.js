import DefaultClass from "../core/defaultClass"
import headerLogo from "../assets/headerLogo.svg"

class LogoHeader extends DefaultClass {
	constructor() {
		super()
		this.element = this.createLogoBlock()
	}
	createLogoBlock() {
		const element = super.createElement("div", "header__logo-block")
		const icon = super.createElement("img", "header__icon", [{name: "src", value: headerLogo}, {name: "alt", value: "Иконка облака и солнца на небе"}])
		const spanText = super.createElement("span", "header__name", null, "Моя Погода")
		element.append(icon)
		element.append(spanText)
		return element
	}
}

export default LogoHeader