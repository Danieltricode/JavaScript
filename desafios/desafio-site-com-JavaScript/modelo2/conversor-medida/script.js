function converter() {
    let metro = document.getElementById('metro-txt')
    let res = document.querySelector('div#res')
    if (metro.value.length == 0 || metro.value == 0) {
        res.innerHTML = '<h3>Erro, por favor digite o número que seja maior que 0</h3>'
    } else {
        let km = Number(metro.value / 1000)
        let hm = Number(metro.value / 100)
        let dam = Number(metro.value / 10)
        let dm = Number(metro.value * 10)
        let cm = Number(metro.value * 100)
        let mm = Number(metro.value * 1000)
        res.innerHTML = ''
        res.innerHTML = `<h3>A distância de ${metro.value} metros, corresponde à...</h3>`
        res.innerHTML += `<p>${km} quilômetros (km)</p>`
        res.innerHTML += `<p>${hm} hectômetros (hm)</p>`
        res.innerHTML += `<p>${dam} decâmetros (dam)</p>`
        res.innerHTML += `<p>${dm} decímetros (dm)</p>`
        res.innerHTML += `<p>${cm} centímetros (cm)</p>`
        res.innerHTML += `<p>${mm} milímetros (mm)</p>`
    }
}