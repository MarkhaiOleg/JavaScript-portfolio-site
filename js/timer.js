const timersBlock = document.querySelector('.timer__time')

const updateBlock = () => {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    timersBlock.textContent = `${fHours} :${fMinutes} :${fSeconds}`
}

updateBlock()

setInterval(updateBlock, 500)