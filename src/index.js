import "./css/style.css"
import backgroundImage from "./assets/background.jpg"
import App from "./classes/app"


const app = new App()

const body = document.querySelector("body")
body.prepend(app.element)

