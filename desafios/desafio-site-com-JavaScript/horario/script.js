function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var horario = data.getHours()
    msg.innerHTML = `Agora são ${horario} horas.`
    if (horario >= 0 && horario < 12) {
        img.src = 'media/sun.png'
        document.body.style.background = '#F29F05'
    } else if (horario >= 12 && horario <= 18) {
        img.src = 'media/sunset.png'
        document.body.style.background = '#ff3f00'
    } else {
        img.src = 'media/moon.png'
        document.body.style.background = '#323CA6'
    }
}
