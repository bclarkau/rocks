// icons 
import glasses from '../img/glasses.svg'
import head from '../img/head.svg'

const container = document.getElementById('container')

// inline embed svg images
const delivery = document.getElementById('delivery')
delivery.innerHTML = glasses
container.appendChild(delivery)

const destination = document.getElementById('destination')
destination.innerHTML = head
container.appendChild(destination)