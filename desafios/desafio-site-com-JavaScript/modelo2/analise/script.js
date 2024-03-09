function adicionar() {
    let an = document.getElementById('txtnum')
    let tab = document.getElementById('tab')
    if (an.value.length == 0 || an.value > 100) {
        window.alert('Erro, adiciona um número!')
    } else {
        var num = [an.value]
        var item = document.createElement('option')
        item.text = `Valor ${num}`
        tab.appendChild(item)
    }
}
function finalizar() {
    
}