document,addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', () => {
        const url = "http://" + input.value
        if(url){
            window.location.href = url
            window.resizeTo(800, 600)
        }
    })
})