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
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valor.length == 0) {
        window.alert('Por favor, adicione um número antes de finalizar.')
    } else {
            let maior = valor[0]
            let menor = valor[0]
            let soma = 0
            let media = 0
            for(let pos in valor) {
                soma += valor[pos]
                if (valor[pos] > maior)
                maior = valor[pos]
                if (valor[pos] < menor)
                menor = valor[pos]
            }
            media = soma / valor.length
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${valor.length} números.</p>`
            res.innerHTML += `<p></p>O maior valor foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
}