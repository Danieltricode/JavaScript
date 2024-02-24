function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('pass')
    var cont = document.getElementById('cont')
    if (ini.value.lemgth == 0 || fim.value.length == 0 || pass.value.length == 0) {
        cont.innerHTML = "Impossível contar!"
    } else {
        cont.innerHTML = "Contando: <br>"
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pass.value)
        if (p <= 0) {
            cont.innerHTML = "Passo inválido considere 1 passo!"
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
            cont.innerHTML += ` ${c} \u{1F449}`
             }
        } else {
            for (let c = i; c >= f; c -= p) {
                cont.innerHTML += `${c} \u{1F449}`
            }
        }
        cont.innerHTML += `\u{1F3C1}`
    }
}