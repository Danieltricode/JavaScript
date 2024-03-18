function converter() {
    let rs = document.querySelector('input#rs')
    let us = document.querySelector('input#us')
    let res = document.querySelector('div#res')
    if (rs.value.length != 0 && us.value.length != 0) {
        let real = Number(rs.value)
        let dolar = Number(us.value)
        let resu = real * dolar
        res.innerHTML = `<h3>Convertendo ${real}R$ para dólar dá: ${resu}US$</h3>`
    } else {
        res.innerHTML = '<h3>[ERRO] Por favor escreva os números nos campos acima.</h3>'
    }
}