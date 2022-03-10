class DefaultClass{
	createElement(type = null, classes = null, attrib = null, text = null) {
		const element = document.createElement(type)
		if (classes) {
			element.className = classes
		}
		if (attrib && attrib.length !== 0) {
			attrib.map(item => {
				element.setAttribute(item.name, item.value)
			})
		}
		if (text) {
			element.textContent = text
		}
		return element
	}
}

export default DefaultClass
