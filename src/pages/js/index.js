document,addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', () => {
        const url = "http://" + input.value
        if(url){
            window.resizeTo(800, 600)
            window.location.href = url
        }
    })
})