const telaDeContagem = document.getElementById('tela-contagem')
const botãoDeReiniciar = document.getElementById('botao-reiniciar')
const botãoDeAumentar = document.getElementById('botao-aumentar')
const botãoDeDiminuir = document.getElementById('botao-diminuir')
let contagem = 0

botãoDeAumentar.onclick = function() {
    contagem++
    telaDeContagem.textContent = contagem
}
botãoDeDiminuir.onclick = function() {
    contagem--
    telaDeContagem.textContent = contagem
}
botãoDeReiniciar.onclick = function() {
    contagem = 0
    telaDeContagem.textContent = contagem
}