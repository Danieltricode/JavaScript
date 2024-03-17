function converter() {
    let cel = document.querySelector('input#cel')
    let res = document.querySelector('div#res')
    if (cel.value.length == 0) {
        res.innerHTML = '<h3>[ERRO] Por favor, digite o número.</h3>'
    } else {
        res.innerHTML = ''
        let celsius = Number(cel.value)
        let kel = Number(celsius + 273.15)
        let fah = Number(celsius * 1.8 + 32)
        res.innerHTML = `<h3>A temperatura ${celsius}°C, corresponde a...</h3>`
        res.innerHTML += `<p>${kel}°K (Kelvin)</p>`
        res.innerHTML += `<p>${fah}°F (Fahrenheit)</p>`
    }
}