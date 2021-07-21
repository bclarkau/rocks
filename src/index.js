// styles
import './scss/index.scss'

// icons 
import glasses from './img/glasses.svg'
import head from './img/head.svg'

function Images() {
	const delivery = document.getElementById('delivery')
	delivery.innerHTML = glasses

	const destination = document.getElementById('destination')
	destination.innerHTML = head
}
document.body.appendChild(Images())