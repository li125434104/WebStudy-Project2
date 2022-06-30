const items = document.querySelectorAll('.item')
const preBtn = document.getElementById('pre')
const nextBtn = document.getElementById('next')
const progress = document.getElementById('progeress')

let currentIndex = 1

preBtn.addEventListener('click', ()=> {
	currentIndex--
	if (currentIndex < 1) {
		currentIndex = 1
	}
	updateUI(false)
})

nextBtn.addEventListener('click', ()=> {
	currentIndex++
	if (currentIndex > items.length) {
		currentIndex = items.length
	}
	updateUI(true)
})

function updateUI(next) {
	const item = items[next ? currentIndex - 1 : currentIndex]
	next ? item.classList.add('active') : item.classList.remove('active')

	progress.style.width = (currentIndex - 1) / (items.length - 1) * 100 + '%'
	
	if (currentIndex == 1) {
		preBtn.disabled = true
	} else if (currentIndex == items.length) {
		nextBtn.disabled = true
	} else {
		preBtn.disabled = false
		nextBtn.disabled = false
	}
}