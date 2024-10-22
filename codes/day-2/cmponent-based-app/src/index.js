function AppHeader() {
    const headerElement = document.createElement('h2')

    headerElement.innerHTML = 'Welcome to component'

    headerElement.style.backgroundColor = 'burlywood'
    headerElement.style.fontFamily = 'Segoe UI'
    headerElement.style.textAlign = 'center'
    headerElement.style.border = '1px solid burlywood'
    headerElement.style.borderRadius = '5px'

    return headerElement
}

function AppFooter() {
    const footerElement = document.createElement('h3')

    footerElement.innerHTML = 'copyright &copy;Siemens, 2024'

    footerElement.style.backgroundColor = 'aqua'
    footerElement.style.fontFamily = 'Consolas'
    footerElement.style.textAlign = 'center'
    footerElement.style.border = '1px solid aqua'
    footerElement.style.borderRadius = '3px'

    return footerElement

}

const headerDesign = AppHeader()
const footerDesign = AppFooter()
const rootDiv = document.getElementById('root')
rootDiv.append(
    headerDesign,
    document.createElement('br'),
    document.createElement('br'),
    document.createElement('br'),
    document.createElement('br'),
    document.createElement('br'),
    document.createElement('br'),
    footerDesign
)