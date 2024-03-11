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
    if (l.indexOf(number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}