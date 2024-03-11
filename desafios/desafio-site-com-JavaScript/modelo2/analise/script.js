    let num = document.getElementById('txtnum')
    let lista = document.getElementById('lista')
    let res = document.querySelector('div#res')
    let valor = []
function isNumero(n) {
     if (Number(n) >= 1 && Number(n) <= 100) {
        return true
     } else {
        return false
     }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valor)) {
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    valor.sort
    let text = document.createElement('p')
    res.appendChild(text)
    text.innerText = `Ao todo temos ${valor.length} números.
    O maior valor foi.
    O menor valor foi ${valor[0]}.
    Somando todos os valores, temos.
    A média dos valores digitados é.`
}